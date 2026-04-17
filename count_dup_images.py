import os, json, urllib.request, ssl
from collections import Counter

env_vars = {}
with open(".env.local", "r") as f:
    for line in f:
        if "=" in line and not line.startswith("#"):
            k, v = line.strip().split("=", 1)
            env_vars[k] = v

url = env_vars["NEXT_PUBLIC_SUPABASE_URL"]
key = env_vars["NEXT_PUBLIC_SUPABASE_ANON_KEY"]
ctx = ssl._create_unverified_context()

req = urllib.request.Request(f"{url}/rest/v1/posts?select=id,title,featured_image", headers={"apikey": key})
data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))

# Check featured_image duplicates
images = [item['featured_image'] for item in data if item.get('featured_image')]
counts = Counter(images)

duplicates = {img: count for img, count in counts.items() if count > 1}

print("Total posts with featured images:", len(images))
print("Total duplicated images:", sum(count for count in duplicates.values()))
print("\nTop duplicated images:")
for img, count in counts.most_common(20):
    if count > 1:
        print(f"[{count} times]: {img}")
