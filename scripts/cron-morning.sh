#!/bin/bash
# Cron job: Tự động publish bài viết theo lịch
# Cài đặt trên VPS: crontab -e
# Thêm dòng:  0 0 * * * /path/to/cachdautu/scripts/cron-morning.sh >> /var/log/cachdautu-cron-morning.log 2>&1
# (Chạy lúc 0:00 UTC = 7:00 VN sáng mỗi ngày)

SITE_URL="${SITE_URL:-https://cachdautu.com}"
CRON_KEY="cachdautu-cron-2026"

echo "$(date '+%Y-%m-%d %H:%M:%S') — Sending morning stats..."

RESPONSE=$(curl -s -w "\n%{http_code}" "${SITE_URL}/api/cron/tele-summary?key=${CRON_KEY}&type=morning")
HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY=$(echo "$RESPONSE" | head -n -1)

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Success: $BODY"
else
    echo "❌ Error (HTTP $HTTP_CODE): $BODY"
fi
