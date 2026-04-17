import urllib.request, urllib.parse, json, ssl

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

query = urllib.parse.quote("*4 Sai lầm*")
req = urllib.request.Request(f"{url}/rest/v1/posts?select=title,content&title=ilike.{query}", headers={"apikey": key})
data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))
if data:
    print(data[0]['content'])
