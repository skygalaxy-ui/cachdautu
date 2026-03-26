#!/bin/bash
# Cron job: Tự động publish bài viết theo lịch
# Cài đặt trên VPS: crontab -e
# Thêm dòng:  0 1 * * * /path/to/cachdautu/scripts/cron-publish.sh >> /var/log/cachdautu-cron.log 2>&1
# (Chạy lúc 1:00 UTC = 8:00 VN mỗi ngày)

SITE_URL="${SITE_URL:-https://cachdautu.com}"
CRON_KEY="cachdautu-cron-2026"

echo "$(date '+%Y-%m-%d %H:%M:%S') — Checking scheduled posts..."

RESPONSE=$(curl -s -w "\n%{http_code}" "${SITE_URL}/api/cron/publish?key=${CRON_KEY}")
HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY=$(echo "$RESPONSE" | head -n -1)

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Success: $BODY"
else
    echo "❌ Error (HTTP $HTTP_CODE): $BODY"
fi
