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

req = urllib.request.Request(f"{url}/rest/v1/posts?select=slug", headers={"apikey": key})
data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))
slugs = [item['slug'] for item in data if item.get('slug')]
dups = set([x for x in slugs if slugs.count(x) > 1])
print("Duplicates:", dups)
