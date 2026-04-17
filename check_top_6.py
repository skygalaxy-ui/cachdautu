import os, json, urllib.request, ssl
env_vars = {}
with open(".env.local", "r") as f:
    for line in f:
        line = line.strip()
        if "=" in line and not line.startswith("#"):
            k, v = line.split("=", 1)
            env_vars[k] = v

url = env_vars["NEXT_PUBLIC_SUPABASE_URL"]
key = env_vars["NEXT_PUBLIC_SUPABASE_ANON_KEY"]
ctx = ssl._create_unverified_context()

req = urllib.request.Request(f"{url}/rest/v1/posts?select=id,title,scheduled_at,content,featured_image&order=created_at.desc&limit=6", headers={"apikey": key})
data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))
for i, d in enumerate(data):
    content = d.get('content', '') or ''
    word_count = len(content.split())
    has_table = "<table" in content or "|---" in content
    has_tldr = "Tóm tắt nhanh" in content or "Key Takeaways" in content or "TL;DR" in content
    img = d.get('featured_image', '')
    print(f"[{i+1}] {d['title']} ({d['scheduled_at']})")
    print(f"   => Length: {word_count} words")
    print(f"   => Featured Image: {'✅' if img else '❌ None'}")
    print(f"   => Table: {'✅' if has_table else '❌'}")
    print(f"   => TL;DR: {'✅' if has_tldr else '❌'}\n")
