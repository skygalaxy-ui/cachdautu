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

req = urllib.request.Request(f"{url}/rest/v1/posts?select=id,title,scheduled_at,slug&order=scheduled_at.desc&limit=15", headers={"apikey": key})
data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))
for d in data:
    print(d['id'], d['title'], d['scheduled_at'])
