import os
import json
import urllib.request
from datetime import datetime, timezone, timedelta

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
# Next URLs
supa_url = env.get("NEXT_PUBLIC_SUPABASE_URL")
supa_key = env.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")

if not supa_url or not supa_key:
    print("Không tìm thấy cấu hình Supabase.")
    exit(1)

now = datetime.now(timezone.utc)
now_iso = now.strftime("%Y-%m-%dT%H:%M:%S.000Z")

endpoint = f"{supa_url}/rest/v1/posts?is_published=eq.false&scheduled_at=not.is.null&scheduled_at=gt.{now_iso}&select=title,slug,scheduled_at&order=scheduled_at.asc"

req = urllib.request.Request(endpoint)
req.add_header('apikey', supa_key)
req.add_header('Authorization', f'Bearer {supa_key}')
req.add_header('Content-Type', 'application/json')
req.add_header('Prefer', 'return=representation')

try:
    response = urllib.request.urlopen(req)
    data = json.loads(response.read().decode('utf-8'))
    
    if len(data) == 0:
        print("Không có bài viết nào đang xếp hàng đợi xuất bản.")
    else:
        print(f"\n📅 THỐNG KÊ {len(data)} BÀI VIẾT ĐANG LÊN LỊCH:\n")
        
        for i, post in enumerate(data):
            # Parse ISO string
            dt_utc = datetime.fromisoformat(post['scheduled_at'].replace('Z', '+00:00'))
            dt_vn = dt_utc + timedelta(hours=7)
            
            print(f"[{i+1}] 🕒 {dt_vn.strftime('%H:%M - %d/%m/%Y')}")
            print(f"    📌 Tiêu đề: {post['title']}\n")
except Exception as e:
    print(f"Lỗi: {e}")
