import os
import json
import urllib.request
import re

def load_env():
    env_vars = {}
    if os.path.exists(".env.local"):
        with open(".env.local", "r") as f:
            for line in f:
                if "=" in line and not line.startswith("#"):
                    key, val = line.strip().split("=", 1)
                    env_vars[key] = val
    return env_vars

env = load_env()
supa_url = env.get("NEXT_PUBLIC_SUPABASE_URL")
supa_key = env.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")

if not supa_url or not supa_key:
    print("Missing supabase config.")
    exit(1)

endpoint = f"{supa_url}/rest/v1/posts?select=id,title,slug,content,is_published"

req = urllib.request.Request(endpoint)
req.add_header('apikey', supa_key)
req.add_header('Authorization', f'Bearer {supa_key}')
req.add_header('Content-Type', 'application/json')
req.add_header('Prefer', 'return=representation')

try:
    response = urllib.request.urlopen(req)
    posts = json.loads(response.read().decode('utf-8'))
    
    bad_posts = []
    total_posts = len(posts)
    published_posts = sum(1 for p in posts if p.get('is_published'))
    draft_posts = total_posts - published_posts

    for post in posts:
        content = post.get("content", "")
        if not content:
            continue
            
        issues = []
        
        # Word count
        words = [w for w in re.split(r'\s+', content) if w.strip()]
        word_count = len(words)
        if word_count < 800:
            issues.append(f"Quá ngắn ({word_count} từ)")
            
        # Headings
        has_h2 = bool(re.search(r'^##\s', content, re.MULTILINE)) or bool(re.search(r'<h2', content, re.IGNORECASE))
        has_h3 = bool(re.search(r'^###\s', content, re.MULTILINE)) or bool(re.search(r'<h3', content, re.IGNORECASE))
        
        if not has_h2:
            issues.append("Thiếu thẻ H2 (##)")
        if not has_h3:
            issues.append("Thiếu thẻ con H3 (###)")
            
        # Tables
        has_table = bool(re.search(r'\|.*\|', content)) or bool(re.search(r'<table', content, re.IGNORECASE))
        if not has_table:
            issues.append("Không có Bảng dữ liệu / So sánh")
            
        # Images
        has_image = bool(re.search(r'!\[.*?\]\(.*?\)', content)) or bool(re.search(r'<img', content, re.IGNORECASE))
        if not has_image:
            issues.append("Thiếu ảnh chèn trong nội dung")
            
        if issues:
            bad_posts.append({
                "title": post.get("title"),
                "word_count": word_count,
                "issues": issues
            })
            
    print("---SUMMARY---")
    print(f"Tổng bài viết: {total_posts} (Đã đăng: {published_posts}, Đang chờ đăng: {draft_posts})")
    
    if len(bad_posts) == 0:
        print("Tất cả bài viết đều đạt chuẩn!")
    else:
        print(f"Phát hiện {len(bad_posts)} bài viết 'Mỏng' hoặc thiếu chuẩn SEO:\n")
        bad_posts.sort(key=lambda x: len(x['issues']), reverse=True)
        for i, p in enumerate(bad_posts):
            iss_str = ", ".join(p['issues'])
            print(f"[{i+1}] {p['title']}")
            print(f"    -> Lỗi: {iss_str}\n")
            
except Exception as e:
    print(f"Lỗi: {e}")
