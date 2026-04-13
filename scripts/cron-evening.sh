#!/bin/bash
# Cron job: Tự động publish bài viết theo lịch
# Cài đặt trên VPS: crontab -e
# Thêm dòng:  0 13 * * * /path/to/cachdautu/scripts/cron-evening.sh >> /var/log/cachdautu-cron-evening.log 2>&1
# (Chạy lúc 13:00 UTC = 20:00 VN tối mỗi ngày)

SITE_URL="${SITE_URL:-https://cachdautu.com}"
CRON_KEY="cachdautu-cron-2026"

echo "$(date '+%Y-%m-%d %H:%M:%S') — Sending evening stats..."

RESPONSE=$(curl -s -w "\n%{http_code}" "${SITE_URL}/api/cron/tele-summary?key=${CRON_KEY}&type=evening")
HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY=$(echo "$RESPONSE" | head -n -1)

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Success: $BODY"
else
    echo "❌ Error (HTTP $HTTP_CODE): $BODY"
fi
