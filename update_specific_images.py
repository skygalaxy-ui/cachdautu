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

req = urllib.request.Request(f"{url}/rest/v1/posts?select=id,title,featured_image,slug&order=created_at.desc&limit=150", headers={"apikey": key})
data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))

for d in data:
    if "chu kỳ" in d['title'].lower():
        payload = {"featured_image": "/images/blog/cyclical_stocks.png"}
        update_req = urllib.request.Request(f"{url}/rest/v1/posts?id=eq.{d['id']}", data=json.dumps(payload).encode("utf-8"), method="PATCH", headers={"apikey": key, "Content-Type": "application/json", "Prefer": "return=minimal"})
        urllib.request.urlopen(update_req, context=ctx)
        print("Updated cyclical stocks:", d['title'])
    elif "vay mua nhà" in d['title'].lower():
        payload = {"featured_image": "/images/blog/mortgage_2026.png"}
        update_req = urllib.request.Request(f"{url}/rest/v1/posts?id=eq.{d['id']}", data=json.dumps(payload).encode("utf-8"), method="PATCH", headers={"apikey": key, "Content-Type": "application/json", "Prefer": "return=minimal"})
        urllib.request.urlopen(update_req, context=ctx)
        print("Updated mortgage:", d['title'])
    elif "mở tài khoản" in d['title'].lower() and "bao nhiêu" in d['title'].lower():
        payload = {"featured_image": "/images/blog/broker_account.png"}
        update_req = urllib.request.Request(f"{url}/rest/v1/posts?id=eq.{d['id']}", data=json.dumps(payload).encode("utf-8"), method="PATCH", headers={"apikey": key, "Content-Type": "application/json", "Prefer": "return=minimal"})
        urllib.request.urlopen(update_req, context=ctx)
        print("Updated broker account:", d['title'])
