import os, json, urllib.request, ssl, time, random
from urllib.parse import quote
from urllib.error import HTTPError

env_vars = {}
try:
    with open(".env.local", "r") as f:
        for line in f:
            if "=" in line and not line.startswith("#"):
                k, v = line.strip().split("=", 1)
                env_vars[k] = v
except FileNotFoundError:
    pass

url = env_vars.get("NEXT_PUBLIC_SUPABASE_URL", "https://pbxpjmklrkkwatdvacap.supabase.co")
key = env_vars.get("NEXT_PUBLIC_SUPABASE_ANON_KEY", "sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD")

ctx = ssl._create_unverified_context()

def log_msg(msg):
    print(msg)
    with open("ai_images_log.txt", "a", encoding="utf-8") as f:
        f.write(msg + "\n")

def api_get(endpoint):
    req = urllib.request.Request(f"{url}{endpoint}", headers={"apikey": key, "Authorization": f"Bearer {key}"})
    return json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))

def api_patch_post(post_id, data):
    req = urllib.request.Request(f"{url}/rest/v1/posts?id=eq.{post_id}", data=json.dumps(data).encode('utf-8'), headers={
        "apikey": key, 
        "Authorization": f"Bearer {key}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    }, method="PATCH")
    try:
        urllib.request.urlopen(req, context=ctx)
        return True
    except Exception as e:
        log_msg(f"Lỗi update DB: {e}")
        return False

def upload_to_supabase(buffer, filename):
    req_url = f"{url}/storage/v1/object/images/posts/{filename}"
    req = urllib.request.Request(req_url, data=buffer, headers={
        "apikey": key,
        "Authorization": f"Bearer {key}",
        "Content-Type": "image/jpeg",
        "x-upsert": "true"
    }, method="POST")
    try:
        urllib.request.urlopen(req, context=ctx)
        public_url = f"{url}/storage/v1/object/public/images/posts/{filename}"
        return public_url
    except Exception as e:
        log_msg(f"Lỗi Upload Supabase Storage: {e}")
        return None

def get_ai_image_buffer(prompt, width, height, max_retries=10):
    encoded_prompt = quote(prompt)
    seed = random.randint(1, 1000000)
    image_url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width={width}&height={height}&nologo=true&seed={seed}"
    req = urllib.request.Request(image_url, headers={'User-Agent': 'Mozilla/5.0'})
    
    for attempt in range(max_retries):
        try:
            response = urllib.request.urlopen(req, context=ctx)
            return response.read()
        except HTTPError as e:
            if e.code == 429:
                log_msg(f"       [Rate Limit 429] Đợi 15s rồi thử lại (Lần {attempt+1}/{max_retries})...")
                time.sleep(15)
            else:
                log_msg(f"       Lỗi HTTP {e.code}: Bỏ qua sau {attempt} lần.")
                time.sleep(5)
        except Exception as e:
            log_msg(f"       Lỗi kết nối: {e}. Đợi 10s rồi thử lại...")
            time.sleep(10)
    return None

def inject_images(content, image_urls, title):
    if not content: content = ""
    paragraphs = content.split('\n\n')
    new_content = []
    injected = 0
    step = max(2, len(paragraphs) // 4)
    
    for i, p in enumerate(paragraphs):
        new_content.append(p)
        if i > 0 and i % step == 0 and injected < len(image_urls) and not p.startswith('#') and not p.startswith('!['):
            new_content.append(f"\n![Minh hoạ - {title}]({image_urls[injected]})\n")
            injected += 1
            
    while injected < len(image_urls):
        new_content.append(f"\n![Minh hoạ - {title}]({image_urls[injected]})\n")
        injected += 1
        
    return '\n\n'.join(new_content)

def main():
    log_msg("\n==================================")
    log_msg(f"BẮT ĐẦU CHẠY FIX ẢNH AI LÚC: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    log_msg("Đang lấy DB posts...")
    posts = api_get("/rest/v1/posts?select=id,title,slug,content,featured_image")
    
    # Đếm ảnh bị trùng
    img_counts = {}
    for p in posts:
        img = p.get("featured_image")
        if img:
            img_counts[img] = img_counts.get(img, 0) + 1
            
    dup_images = {img for img, c in img_counts.items() if c > 1}
    target_posts = [p for p in posts if p.get("featured_image") in dup_images]
    
    log_msg(f"Tổng số bài viết bị trùng trên database: {len(target_posts)}")
    log_msg("Bắt đầu xử lý từng bài (có nghỉ giữa các lượt để tránh Timeout)...\n")
    
    for idx, p in enumerate(target_posts):
        title = p["title"]
        slug = p["slug"]
        log_msg(f"[{idx+1}/{len(target_posts)}] Đang xử lý: {title}")
        try:
            base_prompt = "high quality vector flat design illustration, modern minimal, financial topic: " + title
            
            log_msg("   - Khởi tạo ảnh đại diện (Featured Image)...")
            feat_buf = get_ai_image_buffer(base_prompt + ", banner format", 1200, 630)
            if not feat_buf: continue
            feat_url = upload_to_supabase(feat_buf, f"feat-{slug}-{int(time.time())}.jpg")
            time.sleep(5)
            
            log_msg("   - Khởi tạo 3 ảnh minh hoạ ngang (Inline Images)...")
            inline_urls = []
            for i in range(1, 4):
                inline_buf = get_ai_image_buffer(base_prompt + f", part {i}", 800, 500)
                if inline_buf:
                    inline_url = upload_to_supabase(inline_buf, f"inline-{slug}-{i}-{int(time.time())}.jpg")
                    if inline_url:
                        inline_urls.append(inline_url)
                time.sleep(5) # Nghỉ để không ăn rate limit
            
            log_msg("   - Cập nhật database...")
            new_content = inject_images(p.get("content", ""), inline_urls, title)
            
            updated = api_patch_post(p["id"], {"featured_image": feat_url, "content": new_content})
            if updated:
                log_msg(f"   ✅ Thành công bài: {slug}")
        except Exception as e:
            log_msg(f"   ❌ Lỗi: {e}")
        
        log_msg("   [Hoán chuyển] Nghỉ 10s trước khi qua bài kế tiếp...\n")
        time.sleep(10)
        
    log_msg(f"HOÀN TẤT LÚC: {time.strftime('%Y-%m-%d %H:%M:%S')}")
            
if __name__ == "__main__":
    main()
