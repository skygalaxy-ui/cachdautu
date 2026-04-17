import urllib.request, json, ssl, os

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
env_vars = {}
try:
    with open(".env.local", "r") as f:
        for line in f:
            line = line.strip()
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                env_vars[k] = v
except:
    pass

url = env_vars.get("NEXT_PUBLIC_SUPABASE_URL", os.environ.get("NEXT_PUBLIC_SUPABASE_URL"))
key = env_vars.get("NEXT_PUBLIC_SUPABASE_ANON_KEY", os.environ.get("NEXT_PUBLIC_SUPABASE_ANON_KEY"))
ctx = ssl._create_unverified_context()

def rewrite_post(post):
    promptly = f"""Hãy đóng vai trò chuyên gia tài chính cá nhân năm 2026. Viết lại bài sau để đạt chuẩn SEO E-E-A-T 2026.
BẮT BUỘC:
- Mở đầu ngay bằng "### 💡 Key Takeaways (Tóm tắt nhanh)"
- Phải thiết kế một Bảng (Markdown Table) so sánh/con số.
- Có mục "### 💭 Expert View (Góc nhìn chuyên gia)"
- Tổng bài viết phải đạt từ 1000 chữ trở lên. Trả về đúng định dạng chuẩn Markdown (không nịnh bợ, không chứa cụm từ chat như "dưới đây là...").
Tiêu đề: {post['title']}
Content Cũ: {post['content']}
"""
    data = json.dumps({
        "contents": [{"parts": [{"text": promptly}]}],
        "generationConfig": {"temperature": 0.4}
    }).encode("utf-8")
    
    req = urllib.request.Request(
        f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key={GEMINI_API_KEY}",
        data=data,
        headers={"Content-Type": "application/json"}
    )
    
    try:
        resp = urllib.request.urlopen(req, context=ctx)
        result = json.loads(resp.read().decode('utf-8'))
        return result['candidates'][0]['content']['parts'][0]['text']
    except Exception as e:
        print("Gemini error", e)
        return False

# Lấy 6 bài gần nhất
req = urllib.request.Request(f"{url}/rest/v1/posts?select=id,title,content&order=created_at.desc&limit=6", headers={"apikey": key})
data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))

for d in data:
    print(f"Rewriting: {d['title']}...")
    new_content = rewrite_post(d)
    if new_content:
        # Xóa backtick wrap nếu AI trả về ```markdown ... ```
        if new_content.startswith("```markdown"):
            new_content = "\n".join(new_content.split("\n")[1:-1])
        elif new_content.startswith("```"):
            new_content = "\n".join(new_content.split("\n")[1:-1])
            
        payload = {"content": new_content}
        update_req = urllib.request.Request(f"{url}/rest/v1/posts?id=eq.{d['id']}", data=json.dumps(payload).encode("utf-8"), method="PATCH", headers={"apikey": key, "Content-Type": "application/json", "Prefer": "return=minimal"})
        urllib.request.urlopen(update_req, context=ctx)
        print(" -> Success!")
