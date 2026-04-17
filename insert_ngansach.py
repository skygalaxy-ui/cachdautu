import os, json, urllib.request, uuid, ssl

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

content = """Trong hành trình xây dựng sự thịnh vượng tài chính, kiếm được bao nhiêu tiền không quan trọng bằng việc bạn giữ lại và nhân giống được bao nhiêu tiền. Nhiều người mang mức lương "khủng" nhưng vẫn luôn trong tình trạng cháy túi vào cuối tháng. Trái lại, có những nhân viên văn phòng thu nhập khiêm tốn nhưng vẫn sở hữu những khoản tiết kiệm khổng lồ. 

Điểm khác biệt cốt lõi ở đây chính là **Kỹ năng Lập ngân sách cá nhân**. Và trong số hàng trăm phương pháp quản lý dòng tiền, **Nguyên tắc 50/30/20** do Thượng nghị sĩ Elizabeth Warren giới thiệu được xem là quy chuẩn vàng, đơn giản nhất nhưng cũng uy lực vượt thời gian nhất.

![Khái niệm tiền bạc và lập ngân sách trên di động](/images/blog/inline_ngansach_2.png)

## 1. Nguyên Tắc 50/30/20 Thực Chất Là Gì?
Đây là một công thức phân bổ thu nhập (sau thuế) mang tính ứng dụng cao, đưa toàn bộ dòng tiền của bạn vào đúng ba "chiếc rổ" khác nhau. Phương pháp này giải quyết được hai vấn đề cực kỳ nhức nhối: Không để bản thân túng thiếu, và cũng không khắc khổ tới mức đánh mất niềm vui cuộc sống.

### Chiếc rổ số 1: 50% dành cho NHU CẦU THIẾT YẾU (Needs)
Đây là những khoản chi phí mà bắt buộc bạn phải trả để duy trì cuộc sống sinh tồn cơ bản. Hãy tự hỏi: "Nếu không trả món tiền này, mình có sống nổi không?".
- Tiền thuê nhà, thẻ tín dụng thế chấp căn hộ.
- Chi phí ăn uống cơ bản (không tính đi ăn nhà hàng sang trọng).
- Tiền điện, nước, internet, xăng xe đi lại.
- Các khoản bảo hiểm y tế bắt buộc.

Nếu chi phí thiết yếu của bạn chạm mốc 60% hay 70%, đó là lúc bạn đang sống "quá sức" so với thu nhập thực tế. Bạn phải cân nhắc chuyển sang một căn hộ rẻ hơn hoặc sử dụng phương tiện công cộng thay vì ô tô.

![Theo dõi và kiểm soát biểu đồ phân bổ dòng tiền hằng ngày](/images/blog/inline_ngansach_3.png)

### Chiếc rổ số 2: 30% dành cho MONG MUỐN (Wants)
Nhiều phương pháp tiết kiệm cực đoan gạt bỏ hoàn toàn yếu tố này, và đó là nguyên nhân chính dẫn đến sự "bỏ cuộc". Rổ 30% sinh ra để nuôi dưỡng cảm xúc và sự tận hưởng của bạn.
- Những cốc cafe check-in sang chảnh, bữa tối tại nhà hàng cao cấp.
- Mua sắm quần áo theo xu hướng mới nhất.
- Đổi điện thoại iPhone đời mới, mua vé phân hạng VIP xem concert.
- Những chuyến đi du lịch xa hàng năm.

**Lưu ý:** Việc chi tiêu cho "Mong muốn" hoàn toàn chính đáng, miễn là tổng chi phí không được vượt qua quỹ 30% thu nhập tổng.

### Chiếc rổ số 3: 20% dành cho TIẾT KIỆM VÀ ĐẦU TƯ (Savings & Investing)
Đây là viên gạch nền móng để bạn xây dựng lộ trình FIRE (Nghỉ hưu sớm) và giải thoát bản thân khỏi "Vòng xoáy Chuột chạy" (Rat race).
| Phân bổ 20% | Mục đích sử dụng | Ưu tiên |
| :--- | :--- | :--- |
| **Quỹ Khẩn Cấp** | Duy trì cuộc sống 3-6 tháng khi mất việc đột ngột | Rất Cao |
| **Quỹ Nghỉ Hưu** | Đảm bảo an sinh khi không còn sức lao động | Cao |
| **Đầu tư rủi ro** | Mua chứng khoán, tiền điện tử, vốn kinh doanh | Trung Bình |
| **Trăm Lo Khoản Nợ** | Xóa sổ các khoản vay tín dụng nặng lãi sớm nhất | Tối Thượng |

---

## 2. Các Bước "Thực Chiến" Áp Dụng 50/30/20 Vào Năm 2026
Mọi lý thuyết sẽ mãi chỉ nằm trên trang giấy nếu bạn không có một hệ thống thực thi mạnh mẽ. Hãy làm theo 3 bước sau:

![Tính toán và lập bảng tính thu chi mỗi ngày](/images/blog/inline_ngansach_4.png)

**Bước 1: Quy về một số tổng (Sum Income)**
Việc đầu tiên, hãy cộng dồn toàn bộ thu nhập từ lương, các khoản phụ cấp, cổ tức và lợi nhuận bán hàng online (nếu có). Lưu ý, đây phải là con số **Sau Thuế** (Take-home pay). Nếu mỗi tháng tài khoản báo Ting Ting 20 triệu, đó chính là mốc 100% của bạn.

**Bước 2: Phanh thây và Tự động hoá chi tiêu**
Tiết kiệm bằng thủ công (tự hứa sẽ chừa lại tiền) luôn thất bại. Ngay khi lương về, bạn phải sử dụng tính năng "Chuyển tiền tự động" (Autosave) của các ngân hàng. 
- Ngay lập tức cắt 4 triệu (20% của 20 triệu) sang một tài khoản chứng khoán hoặc Tiết kiệm có kỳ hạn khác. KHÔNG BAO GIỜ chạm vào tài khoản này!

**Bước 3: Ghi nhận và Đánh giá liên tục**
Sử dụng các ứng dụng quản lý chi tiêu thế hệ mới như Sổ Thu Chi Misa, hoặc một bảng Excel cứng cáp. Phân định rõ từng giao dịch theo 3 danh mục Needs, Wants, Savings. 

---

## 3. Những Sai Lầm "Phá Nát" Công Thức Này
Rất nhiều người đã áp dụng 50/30/20 nhưng rồi lại trắng tay, bởi vì họ đã mắc phải những cái bẫy quy chuẩn sau đây:

- **Nâng cấp lối sống song song với thu nhập (Lifestyle Creep):** Khi bạn thăng chức và lương tăng từ 20 lên 40 triệu, nhu cầu thiết yếu thường không tự nhiên đắt gấp đôi. Hãy giữ chiếc rổ "Needs" nằm im ở mức cũ, và dồn tiền vượt ngưỡng đó vào quỹ 20% Tiết Kiệm cực khủng.
- **Tự lừa dối bản thân về "Needs - Nhu cầu":** Bạn nghĩ rằng mua chiếc túi hiệu Dior là "nhu cầu" phải có để gặp gỡ đối tác? Hay uống ly Starbucks hằng ngày là nhu cầu để đầu óc tỉnh táo? Không, đó là Wants. Đừng "lách luật" bằng cách nhét những món đồ xa xỉ vào rổ Needs.

Hãy nhớ rằng, Ngân sách không phải là một chiếc lồng giam bó buộc sự tự do của bạn. Ngân sách là một công cụ giúp bạn chỉ đạo từng đồng tiền của mình phải phục vụ mục tiêu gì, thay vì phải chạy theo giải quyết các rắc rối do việc chi tiêu thiếu kiểm soát gây ra. Hãy bắt đầu quy tắc 50/30/20 ngay kỳ lương tiếp theo!"""

post = {
    "id": str(uuid.uuid4()),
    "title": "Cách lập ngân sách cá nhân với nguyên tắc 50/30/20 thần thánh (2026)",
    "slug": "cach-lap-ngan-sach-ca-nhan-nguyen-tac-50-30-20-than-thanh-2026",
    "category_id": "0a381b9b-e2af-4762-85d9-b8ff8c231b31", # Tài Chính Cá Nhân
    "scheduled_at": "2026-04-15T00:00:00+00:00", # Apr 15, 07:00 VN
    "is_published": False,
    "featured_image": "/images/blog/featured_ngansach_1.png",
    "content": content
}

req = urllib.request.Request(f"{url}/rest/v1/posts", data=json.dumps(post).encode("utf-8"))
req.add_header("apikey", key)
req.add_header("Authorization", f"Bearer {access_token}")
req.add_header("Content-Type", "application/json")
req.add_header("Prefer", "return=minimal")

try:
    urllib.request.urlopen(req, context=ctx)
    print("Thành công! Đã chèn bài Tài Chính Cá Nhân.")
except Exception as e:
    import urllib.error
    if isinstance(e, urllib.error.HTTPError):
        print(f"Lỗi: {e.read().decode('utf-8')}")
    else:
        print(f"Lỗi: {e}")
