import os
import json
import urllib.request

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

endpoint = f"{supa_url}/rest/v1/categories?select=id,name,slug"
req = urllib.request.Request(endpoint)
req.add_header('apikey', supa_key)
req.add_header('Authorization', f'Bearer {supa_key}')
req.add_header('Content-Type', 'application/json')

try:
    response = urllib.request.urlopen(req)
    data = json.loads(response.read().decode('utf-8'))
    for d in data: print(f"{d['slug']}: {d['id']}")
except Exception as e:
    print(e)
