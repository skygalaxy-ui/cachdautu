import os, json, urllib.request, ssl

env_vars = {}
with open(".env.local", "r") as f:
    for line in f:
        if "=" in line and not line.startswith("#"):
            k, v = line.strip().split("=", 1)
            env_vars[k] = v

url = env_vars["NEXT_PUBLIC_SUPABASE_URL"]
key = env_vars["NEXT_PUBLIC_SUPABASE_ANON_KEY"]

auth_req = urllib.request.Request(f"{url}/auth/v1/token?grant_type=password", data=json.dumps({
    "email": "admin@cachdautu.com",
    "password": "CachDauTu@2026!"
}).encode("utf-8"))
auth_req.add_header("apikey", key)
auth_req.add_header("Content-Type", "application/json")
ctx = ssl._create_unverified_context()
access_token = json.loads(urllib.request.urlopen(auth_req, context=ctx).read().decode("utf-8"))["access_token"]

content = """👉 **TÓM TẮT NHANH (TL;DR):** 
Mở quán cafe nhượng quyền năm 2026 không phải là cuộc chơi "nhàn hạ đếm tiền" như lời chào mời. Tổng chi phí mở quán phụ thuộc vào quy mô, dao động từ **100 triệu VNĐ** (mô hình Kiosk mang đi) cho tới **3 - 5 tỷ VNĐ** (mô hình chuỗi lớn như Highlands, Katinat). Ngoài vốn cứng, bạn bắt buộc phải có Quỹ dự phòng trong 6 tháng, và chuẩn bị tâm lý cắt lại 5% - 8% tổng doanh thu gộp hàng tháng cho công ty mẹ bất chấp bạn đang hòa hay lỗ.

---

Giấc mơ làm chủ một tiệm cafe thơm nức mùi Arabica là một trong những khát vọng lãng mạn nhất của giới trẻ khởi nghiệp. Nhưng thực tế 80% quán cafe tư nhân "tự phát" phải đóng cửa trong năm đầu vì kiệt máu. Bối cảnh đó đẩy xu hướng **Nhượng quyền thương hiệu (Franchise)** lên ngôi như một chiếc phao cứu sinh an toàn. 

Tuy nhiên, mua nhượng quyền không phải là mua "Bảo hiểm thành công". Bài viết dưới đây sẽ bóc tách mọi ngóc ngách về dòng tiền và chi phí ngầm, giúp bạn không bị ảo tưởng trước khi ký hợp đồng.

![Một mô hình tiệm cafe nhượng quyền điển hình trong đô thị](/images/blog/featured_cafe.png)

## 1. Bản Chất của Nhượng Quyền Cafe Là Gì?
Hiểu một cách đơn giản nhất, bạn đang trả tiền để "thuê" lại uy tín, tập khách hàng sẵn có và công thức pha chế của một thương hiệu đã nổi tiếng.

Ví dụ: Mở quán "Cafe Thảo Cầm Viên", bạn mất 3 tháng để tìm khách hàng đầu tiên. Nhưng nếu bạn treo biển **"Trung Nguyên E-Coffee"** hoặc **"Milano"**, ngay ngày khai trương đầu tiên khách hàng sẽ tự động tấp xe vào vì họ đã quen thuộc với mùi vị và tin tưởng thương hiệu đó từ trước.

### Ưu điểm tuyệt đối:
- Không cần tốn tiền Marketing để tự giáo dục định vị thương hiệu.
- Quy trình vận hành, quản lý kho, nhập hạt cafe được đối tác set-up chuẩn hóa từ A-Z.
- Tiết kiệm thời gian thử và sai.

### Nhược điểm chết người:
- Phụ thuộc sinh tử vào công ty mẹ (Nếu công ty mẹ dính phốt truyền thông, tiệm của bạn cũng vắng như chùa Bà Đanh).
- Hoàn toàn KHÔNG CÓ KHOẢNG TRỐNG SÁNG TẠO: Bạn không được tự ý thêm món "Sinh tố bơ" vào menu nếu công ty mẹ không cho phép. Không được đổi loại ghế, đổi nhạc.

---

## 2. Vậy Mở Quán Nhượng Quyền Cần Chuẩn Bị Bao Nhiêu Vốn?
Tuyệt đối đừng để những con số quảng cáo "Chỉ với 80 triệu sở hữu ngay..." đánh lừa. Số vốn thực tế lớn hơn rất nhiều so với "Phí nhượng quyền" (Franchise fee). Bảng dưới đây khảo sát phân rã chi phí thực tế cập nhật năm 2026.

### Phân tầng 3 mô hình Nhượng quyền hiện nay

| Tên Thương Hiệu | Phân Khúc / Mô hình | Tổng Vốn Ước Tính (Setup A-Z) | Phí Duy Trì Hàng Tháng (Royalty) |
| :--- | :--- | :--- | :--- |
| **Milano / Napoli** | Kiosk / Cafe Vỉa Hè (Bình dân) | 150 triệu – 250 triệu VNĐ | Gần như không có (Bắt buộc nhập nguyên vật liệu của hãng) |
| **Trung Nguyên E-Coffee** | Trạm dừng chân / Dân văn phòng | 250 triệu – 450 triệu VNĐ | Miễn phí hoặc cố định theo năm tùy gói |
| **Highlands / Katinat** | Flagship / Cuộc chiến Không gian | 3.5 Tỷ – 5 Tỷ VNĐ | 5% – 8% Doanh thu gộp (Doanh thu chưa trừ chi phí) |

### Công Thức Tỉ Lệ Vàng (Allocation)
Khi bạn có trong tay 1 tỷ đồng, việc phân bổ dòng vốn được các chuyên gia FnB khuyến nghị như sau:
- **Ngân sách cố định (Setup, Cọc nhà, Nhượng quyền):** 60% (600 Triệu).
- **Ngân sách Lưu động (Working Capital):** 40% (400 Triệu). Khoản tiền này dùng để bù lỗ, đóng tiền mặt bằng trả thẳng, và gánh lương nhân sự trong 3-6 tháng đầu tiên vắng khách. Lỗi lớn nhất của NĐT là tiêu sạch 1 tỷ vào trang trí và không còn 1 đồng nào để duy trì.

---

## 3. Bí Mật Đằng Sau: Những Cạm Bẫy Đè Chết Ông Chủ "Ngây Thơ"
*(Kinh nghiệm thực chiến)* 
Nhượng quyền được thiết kế để công ty mẹ luôn có lãi, còn bạn chịu rủi ro.

1. **Thuế Máu Doanh Thu (Royalty Fee):** 
Nhiều thương hiệu lớn áp phí 5% Doanh thu. Bạn bán 1 cốc cafe 50k, bạn nộp lại 2.5k. Nghe có vẻ ít? NHƯNG đó là doanh thu gộp. Nếu tháng đó bạn bán được 100 triệu, trừ chi phí mặt bằng và nhân sự bạn đang lỗ vốn 10 triệu. Dù LỖ, bạn **vẫn phải dâng nạp 5 triệu** phí doanh thu cho công ty mẹ. Họ không cùng bạn gánh lỗ.

2. **Cái neo Nguyên Vật Liệu:** 
Để đảm bảo chất lượng đồng nhất, thương hiệu ép bạn phải lấy 100% nguyên liệu (từ hạt cafe, ly nhựa, ống hút) từ kho tổng của họ với mức giá đôi khi cao hơn 20% so với mua sỉ ngoài chợ đầu mối. Đây mới là rổ hút máu khép kín lợi hại nhất.

3. **Mặt bằng tự vả nhau:** 
Thương hiệu phát triển quá nóng dẫn đến bán nhượng quyền vô tội vạ. Kết quả là trong cùng một bán kính ngã tư đường, có tận 3 quán cùng một thương hiệu mở ra và tự đấu đá kịch liệt giành giật khách của nhau.

---

## 4. Những Câu Hỏi Thường Gặp (FAQs)
**Q: Bao lâu thì tôi thu hồi lại vốn (ROI) khi mở quán nhượng quyền?**
*A: Với chuỗi bình dân (như Milano), trung bình từ 8 - 14 tháng. Với chuỗi lớn có setup nội thất tỷ đồng, lộ trình hoàn vốn tốt nhất là từ 24 - 36 tháng. Bất cứ lời hứa "hoàn vốn 3 tháng" nào cũng đều là dối trá.*

**Q: Liệu tôi có thể đơn phương chấm dứt hợp đồng nhượng quyền và giữ lại mặt bằng làm thương hiệu riêng?**
*A: Bạn sẽ mất toàn bộ cọc thương hiệu. Ngoài ra, điều khoản Non-Compete (Không cạnh tranh) trong hợp đồng thường cấm bạn mở quán cafe cùng loại tại địa điểm đó từ 1-2 năm sau khi hủy hợp đồng.*

---
**Tóm lại:** Nhượng quyền cafe không phải là "ngồi mát ăn bát vàng". Nó là một hoạt động đầu tư tài chính khắc nghiệt, đòi hỏi bạn phải có khả năng bám trụ dòng tiền và quản trị nhân sự chặt chẽ. Nếu vốn mỏng và chưa từng trải, hãy bắt đầu bằng việc đi làm quản lý thuê cho một quán cafe trước khi ném tiền tỷ vào bài toán này!"""

req = urllib.request.Request(f"{url}/rest/v1/posts?id=eq.0e08c366-80d2-4c82-86a2-603ca2d4c21f", data=json.dumps({"content": content, "featured_image": "/images/blog/featured_cafe.png"}).encode("utf-8"), method="PATCH") # IMPORTANT: PATCH Dùng method="PATCH"
req.add_header("apikey", key)
req.add_header("Authorization", f"Bearer {access_token}")
req.add_header("Content-Type", "application/json")
req.add_header("Prefer", "return=minimal")

try:
    urllib.request.urlopen(req, context=ctx)
    print("Thành công! Đã Rewrite full chuẩn 2026 cho bài Cà phê nhượng quyền.")
except Exception as e:
    import urllib.error
    if isinstance(e, urllib.error.HTTPError):
        print(f"Lỗi: {e.read().decode('utf-8')}")
    else:
        print(f"Lỗi: {e}")
