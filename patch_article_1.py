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

# Find the exact ID
query = urllib.parse.quote("*4 Sai lầm*")
req = urllib.request.Request(f"{url}/rest/v1/posts?select=id,title&title=ilike.{query}", headers={"apikey": key})
data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))
post_id = data[0]['id']

content = """### 💡 Key Takeaways (Tóm tắt nhanh)
- **Kiểm soát dòng tiền:** 80% doanh nghiệp nhỏ thất bại do cạn kiệt tiền mặt, không phải do sản phẩm tồi.
- **Chi phí cố định (Mặt bằng):** Tuyệt đối không chi quá 20% doanh thu dự kiến cho tiền thuê mặt bằng để tránh gánh nặng khi bĩ cực.
- **Tiêu thụ thời gian:** Khởi nghiệp không có kế hoạch hành động rõ ràng sẽ đốt sạch tiền lương và quỹ dự phòng sau 3 - 6 tháng đầu.
- **Lẫn lộn tài chính:** Không trả lương cố định cho bản thân mà rút thẳng tiền từ két doanh thu là nguyên nhân trực tiếp dẫn tới sụp đổ dòng tiền xoay vòng.

Khởi nghiệp là khát khao của rất nhiều bạn trẻ tại Việt Nam, đặc biệt khi phong trào "bỏ phố về quê" hay tự lập mở quán cafe, tiệm quần áo đang lên ngôi vào năm 2026. Tuy nhiên, đằng sau những hình ảnh check-in hào nhoáng là một thực tế tàn khốc: **Có tới 80% người khởi nghiệp phải tự tay đóng cửa tiệm cắt lỗ chỉ sau 6 tháng**. Vậy nguyên nhân thực sự nằm ở đâu? Thường không phải do bạn kém cỏi, mà vì 4 sai lầm "đốt tiền" kinh điển sau đây.

### 1. Ảo tưởng sức mạnh và Cạn kiệt dòng tiền (Cash flow)
Sai lầm chí mạng nhất của các tay mơ khởi nghiệp là vứt sạch số vốn mình có để nhập một đống hàng hóa, decor quán thật lộng lẫy và đinh ninh rằng: Cứ khai trương là sẽ đông khách. 

Thực tế, dòng tiền (cash flow) mới là mạch máu của startup. Không có dòng tiền dư dả (quy mô vốn lưu động ít nhất cho 6 tháng), bạn sẽ nhanh chóng kiệt quệ sau tuần trăng mật khai trương.

![Khởi nghiệp cạn kiệt dòng tiền](/images/blog/inline_startup_fail_1.png)

Đừng bao giờ để cạn kiệt dòng tiền mà chỉ ôm một đống hàng hóa tồn kho khô héo. Hãy luôn dự trù ít nhất 30% - 40% chi phí cho việc duy trì vận hành quán và làm Marketing bền bỉ.

### 2. "Đốt" tiền cọc vào mặt bằng đắt đỏ không cần thiết
Người xưa thường nói "Buôn có bạn, bán có phường", điều này khiến các bạn trẻ hiện nay có tâm lý nhất định phải thuê mặt bằng "mặt tiền đường lớn" để tạo độ phủ. Dưới đây là bảng so sánh thực tế áp lực chi phí:

| Tiêu Chí Đánh Giá | Mặt Tiền Đường Lớn (A) | Trong Ngõ Hoặc Online (B) |
| --- | --- | --- |
| **Chi phí thuê/tháng** | 20.000.000 - 50.000.000 VNĐ | 5.000.000 - 10.000.000 VNĐ |
| **Chi phí cọc (Thường 3-6 tháng)** | Rất lớn, chôn vốn ngay lập tức | Nhỏ, linh hoạt dòng vốn |
| **Lưu lượng khách** | Khách vãng lai tự nhiên (Rất bất định) | Khách chủ động tìm đến qua Marketing |
| **Tỷ lệ rủi ro phá sản** | Cực kỳ cao (Khó gồng lãi) | Thấp, dễ xoay sở (Gồng được lâu) |

Bài học: Với các ngành F&B, thời trang 2026, hãy ưu tiên ứng dụng dữ liệu online (Tiktok, Facebook) để kéo khách hàng mục tiêu về tận tiệm trong ngõ nhỏ, thay vì vứt tiền cho chủ nhà một cách thụ động. 

![Áp lực chi phí mặt bằng khởi nghiệp](/images/blog/inline_startup_fail_2.png)

### 3. Đánh mất thời gian vàng ngọc trong vô định
Sự nhiệt huyết ban đầu thường tan biến cực nhanh nếu bạn không có bảng tiến độ công việc (Timeline) khắc nghiệt. Việc tự làm chủ mang lại cảm giác "tự do", nhưng đó là cái bẫy. Bạn có thể ngủ nướng đến 10h sáng, nhẩn nha uống café và lướt web vô định dưới mác "đang nghiên cứu thị trường".

Mỗi ngày trôi qua không tạo ra doanh thu, tiền thuê nhà, tiền điện nước, và chi phí cơ hội từ mức lương bạn từng kiếm ở công ty cũ đang bị đốt cháy theo thời gian thực. Hãy làm việc kỷ luật gấp 3 lần khi đi làm thuê.

### 💭 Expert View (Góc nhìn chuyên gia)
> *“Sự ngây thơ lớn nhất của F0 khởi nghiệp năm 2026 không phải là chọn sai mô hình kinh doanh, mà là **ảo tưởng về điểm hòa vốn**. Đa số các bạn nghĩ rằng mở cửa ra là bán được hàng ngay. Thực ra, 6 tháng đầu mới là giai đoạn vung tiền để 'mua' hành vi khách hàng. Nếu bạn làm bảng ngân sách quá khít với số tiền bạn có trong tài khoản, việc phá sản chỉ là vấn đề thời gian.”*

### 4. Rút tiền từ két doanh thu coi như tiền lời (Lẫn lộn chi tiêu)
Sai lầm cực kỳ nhức nhối khác là không phân bạch rạch ròi giữa tiền của NGUYỄN VĂN A và tiền của CÔNG TY A. Khi thấy cuối ngày trong két có 20 triệu đồng doanh thu bán quần áo, nhiều bạn trẻ tự nhủ: "Hôm nay làm ăn khá, lấy 1 triệu đồng tối nay đi nhậu thưởng bản thân cũng không sao".

![Cửa tiệm đóng cửa cắt lỗ](/images/blog/inline_startup_fail_3.png)

Sự thật phũ phàng: Để có 20 triệu doanh thu đó, bạn đã phải trả giá 12 triệu gốc hàng nhập, 5 triệu chi phí cố định... Lãi ròng thực tế chỉ vỏn vẹn 3 triệu. Việc vô cớ đút tay vào két rút tiền sẽ khiến bạn không đủ tiền thanh toán công nợ mua tiếp chuyến hàng ngày mai. 

**Tuyệt đối tuân thủ:** Luôn tự thiết lập một mức lương cố định cho chính bạn thân mình (Ví dụ: 10 triệu/tháng) rồi mới hạch toán khoản tiền còn lại vào "Quỹ Tái Đầu Tư Mở Rộng Doanh Nghiệp". Khởi nghiệp là một ván cờ quản trị dòng tiền, đầy trí tuệ chứ đâu phải chỉ dựa vào lòng nhiệt huyết mộng mơ!

---
**Một Số Câu Hỏi Thường Gặp (FAQs)**

**1. Khởi nghiệp cần bao nhiêu vốn lưu động là đủ?**  
Nên chuẩn bị vốn lưu động gấp 4 - 6 lần tổng mậu dịch chi phí hàng tháng (Mặt bằng, lương, quảng cáo) để an tâm tồn tại qua "Thung lũng tử thần" ban đầu.

**2. Góp vốn khởi nghiệp chung với bạn bè có nên không?**  
Có, nhưng CỰC KỲ rủi ro nếu khuyết thiếu Hợp Đồng Rõ Ràng. Từng vai trò, nghĩa vụ tài chính, và các điều khoản xử lý khi thua lỗ phải được "giấy trắng mực đen", tránh vì hùn vốn mà mất cả tiền lẫn anh em chiến hữu.

**3. Kinh doanh online có chắc ăn hơn mở tiệm offline?**  
Online giảm được tối đa rủi ro dòng tiền và mặt bằng, nhưng bù lại chi phí chạy Ads (Chạy quảng cáo online) lại là gánh nặng lớn nhất nếu không biết tối ưu dữ liệu content video. Bạn phải đặc biệt làm chủ được các kênh bán đa luồng 2026.
"""

payload = {
    "content": content,
    "featured_image": "/images/blog/featured_startup_fail.png"
}

update_req = urllib.request.Request(f"{url}/rest/v1/posts?id=eq.{post_id}", data=json.dumps(payload).encode("utf-8"), method="PATCH", headers={"apikey": key, "Content-Type": "application/json", "Prefer": "return=minimal"})
res = urllib.request.urlopen(update_req, context=ctx)
print("✅ Successfully Updated Database for Article 1:", post_id)
