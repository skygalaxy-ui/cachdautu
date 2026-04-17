import urllib.request, json, ssl

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

req = urllib.request.Request(f"{url}/rest/v1/posts?select=title,featured_image,content&order=created_at.desc&limit=6", headers={"apikey": key})
data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))
for d in data:
    has_inline = "![" in d['content']
    print(d['title'])
    print("  => Featured:", d.get('featured_image', ''))
    print("  => Has Inline Image markdown (![]):", has_inline)
