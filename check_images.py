import os, json, urllib.request, ssl
env_vars = {}
with open(".env.local", "r") as f:
    for line in f:
        if "=" in line and not line.startswith("#"):
            k, v = line.strip().split("=", 1)
            env_vars[k] = v

url = env_vars["NEXT_PUBLIC_SUPABASE_URL"]
key = env_vars["NEXT_PUBLIC_SUPABASE_ANON_KEY"]
ctx = ssl._create_unverified_context()

req = urllib.request.Request(f"{url}/rest/v1/posts?select=id,title,featured_image,categories(slug)", headers={"apikey": key})
data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))
for d in data[:10]: # Print top 10 to see pattern
    cat = d['categories']['slug'] if d['categories'] else 'None'
    print(d['id'][:8], " | ", d['title'][:30], " | Image:", d['featured_image'])
