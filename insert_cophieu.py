import os, json, urllib.request, uuid, ssl
from datetime import datetime, timezone, timedelta

env_vars = {}
with open(".env.local", "r") as f:
    for line in f:
        if "=" in line and not line.startswith("#"):
            k, v = line.strip().split("=", 1)
            env_vars[k] = v

url = env_vars["NEXT_PUBLIC_SUPABASE_URL"]
key = env_vars["NEXT_PUBLIC_SUPABASE_ANON_KEY"]

# Login as admin to bypass RLS
auth_req = urllib.request.Request(f"{url}/auth/v1/token?grant_type=password", data=json.dumps({
    "email": "admin@cachdautu.com",
    "password": "CachDauTu@2026!"
}).encode("utf-8"))
auth_req.add_header("apikey", key)
auth_req.add_header("Content-Type", "application/json")
ctx = ssl._create_unverified_context()
access_token = json.loads(urllib.request.urlopen(auth_req, context=ctx).read().decode("utf-8"))["access_token"]

# Nội dung chuẩn SEO > 1000 từ
content = """Trong một thế giới đầu tư ngày càng hiện đại, **cổ phiếu** nổi lên như một trong những kênh sinh lời hấp dẫn nhất nhưng cũng đi kèm không ít rủi ro. Rất nhiều người nghe đến cụm từ "chơi chứng khoán" hay "đầu tư cổ phiếu" nhưng không thực sự hiểu rõ bản chất đằng sau những con số nhảy múa trên bảng điện. 

Việc không hiểu rõ bản chất của cổ phiếu chính là lý do khiến 95% nhà đầu tư F0 (người mới) chịu thua lỗ trong 6 tháng đầu tiên tiến vào thị trường. Bài viết này sẽ phân tích từ A đến Z bản chất thực sự của cổ phiếu, các loại hình cổ phiếu phổ biến, cũng như đo lường chính xác các rủi ro mà bạn có thể gặp phải.

---

## 1. Bản chất cốt lõi: Cổ phiếu thực ra là gì?
Cổ phiếu không phải là một chuỗi biểu đồ xanh đỏ hay một canh bạc may rủi. Về mặt pháp lý và bản chất tài chính, **cổ phiếu (Stock)** là giấy chứng nhận số tiền nhà đầu tư đóng góp vào công ty phát hành. 

Nói cách khác, khi bạn mua cổ phiếu của tập đoàn FPT hay Hòa Phát (HPG), bạn chính thức trở thành **một cổ đông (người đồng sở hữu)** của công ty đó, dù với tỷ lệ rất nhỏ.

![Khái niệm về thị trường chứng khoán hiện đại](/images/blog/inline_cophieu_2.png)

### 1.1 Khác biệt giữa Cổ Phiếu và Trái Phiếu
Trong khi cổ phiếu đại diện cho quyền **sở hữu**, thì trái phiếu đại diện cho quyền **chủ nợ**.

| Tiêu chí | Cổ Phiếu (Stock) | Trái Phiếu (Bond) |
| :--- | :--- | :--- |
| **Bản chất** | Chứng chỉ góp vốn, quyền sở hữu | Chứng chỉ xác nhận nợ |
| **Quyền lợi** | Được chia cổ tức nếu công ty có lãi | Nhận lãi suất cố định, không phụ thuộc lãi lỗ |
| **Rủi ro** | Rất cao (Có thể mất trắng nếu phá sản) | Thấp hơn (Công ty ưu tiên trả nợ trước khi trả cho cổ đông) |
| **Biến động giá** | Lên xuống mạnh theo thị trường | Khá ổn định, dao động nhẹ |

---

## 2. Làm thế nào bạn tạo ra lợi nhuận từ cổ phiếu?
Sự hấp dẫn của thị trường nằm ở chỗ nó cung cấp **hai dòng tiền** rõ rệt cho người nắm giữ cổ phiếu dài hạn. Hiểu cách dòng tiền này vận hành sẽ giúp bạn thiết lập một danh mục đầu tư tối ưu nhất cho chặng đường tự do tài chính.

### 2.1 Lợi nhuận từ chênh lệch giá (Capital Gain)
Đây là cách kiếm tiền kinh điển nhất: **Mua thấp và bán cao**. Ví dụ, bạn mua cổ phiếu của Vinamilk (VNM) với giá 65,000 VND. Vài tháng sau, nhờ kết quả kinh doanh đột phá, giá cổ phiếu tăng lên 80,000 VND. Nếu bạn chốt lời tại thời điểm này, khoản chênh lệch 15,000 VND/cổ phiếu chính là lợi nhuận ròng của bạn.

![Theo dõi bảng điện và quản lý danh mục đầu tư chuyên nghiệp](/images/blog/inline_cophieu_4.png)

### 2.2 Nhận Cổ tức (Dividend)
Khi một công ty làm ăn có lãi, thay vì giữ lại toàn bộ để tái đầu tư, họ có thể quyết định trích một phần lợi nhuận để chia lại cho các cổ đông. Đây gọi là **cổ tức**.
- **Cổ tức bằng tiền mặt:** Công ty chuyển thẳng tiền tươi vào tài khoản chứng khoán của bạn. (Bạn cần đóng thuế 5%).
- **Cổ tức bằng cổ phiếu:** Công ty phát hành thêm cổ phiếu để tặng bạn. Tổng tài sản không ngay lập tức tăng lên, nhưng nếu công ty tiếp tục tăng trưởng mạnh trong tương lai, số dư lợi nhuận của bạn sẽ theo cấp số nhân (lãi kép).

---

## 3. Nhận diện các Rủi Ro "Cốt Tử" khi đầu tư cổ phiếu
Lợi nhuận rực rỡ luôn che đậy những góc khuất đầy rủi ro. Việc không kiểm soát được rủi ro là lý do khiến nhiều người ví thị trường chứng khoán không khác gì một trò chơi sát phạt.

![Quản trị rủi ro tài chính luôn là tấm khiên bảo vệ nhà đầu tư](/images/blog/inline_cophieu_3.png)

Dưới đây là 3 tầng rủi ro chính mà bất kỳ nền tảng tư vấn tài chính nào cũng cảnh báo bạn:

### Rủi ro hệ thống (Rủi ro thị trường)
Đây là những yếu tố vĩ mô nằm ngoài tầm kiểm soát của bất kỳ doanh nghiệp nào:
- Lạm phát tăng phi mã khiến ngân hàng nhà nước phải tăng lãi suất.
- Sự kiện địa chính trị, chiến tranh hay đại dịch dịch bệnh.
- Khủng hoảng kinh tế toàn cầu làm suy sụp niềm tin của đại đa số dân cư.
**Cách phòng vệ:** Phân bổ danh mục đầu tư hợp lý giữa các lớp tài sản khác nhau như Vàng, Trái phiếu và Bất động sản. Đừng "bỏ tất cả trứng vào một rổ".

### Rủi ro phi hệ thống (Rủi ro ngành hoặc doanh nghiệp)
Chỉ ảnh hưởng cục bộ trực tiếp đến một mã cổ phiếu hoặc một ngành nghề cụ thể:
- Lãnh đạo công ty vướng vòng lao lý hoặc có hành vi gian lận báo cáo tài chính.
- Công ty bị tụt hậu so với đối thủ và đánh mất thị phần.
- Sự xuất hiện của một công nghệ mới đánh sập toàn bộ mô hình kinh doanh truyền thống.
**Cách phòng vệ:** Liên tục nâng cao kiến thức đọc hiểu báo cáo tài chính và đa dạng hóa các mã cổ phiếu trong cùng một danh mục (ví dụ chọn 3-5 ngành khác nhau).

---

## 4. Bắt đầu đầu tư như thế nào cho hiệu quả?
Thị trường luôn chờ đợi người sẵn sàng. Để hạn chế sai lầm, đây là các bước quy chuẩn cho F0:
1. **Xây dựng phễu kiến thức:** Không mua bất kỳ cổ phiếu nào dựa trên lời "phím hàng" của môi giới. Hãy đọc sách Phân tích cơ bản hoặc tham gia quỹ ETF như VN30 trước.
2. **Sử dụng tiền nhàn rỗi:** Tuyệt đối không bao giờ dùng vốn vay mượn (đặc biệt vay margin khi mới chơi) hay quỹ khẩn cấp để giao dịch cổ phiếu. Hãy xác định khoản tiền này có thể bị "kẹt" từ 1 đến 3 năm mà không ảnh hưởng tới sức khỏe tài chính gia đình.
3. **Tuân thủ quy tắc cắt lỗ:** "Thà mất một ngón tay còn hơn mất cả cánh tay". Quy tắc 7% – 8% cắt lỗ cứng đã cứu sống hàng triệu nhà giao dịch huyền thoại trên thế giới.

Tóm lại, **cổ phiếu** vừa là lá cờ tiên phong vừa là con quay định hình tương lai làm giàu, nhưng nó đòi hỏi một tinh thần làm việc kỷ luật, khả năng phân tích bình tĩnh và lòng kiên nhẫn sắt đá. Hãy bắt đầu xây dựng con đường tài chính của bạn ngay hôm nay bằng cách sở hữu mã cổ phiếu làm ăn tốt nhất mà bạn tự mình phân tích!"""

post = {
    "id": str(uuid.uuid4()),
    "title": "Bản chất Cổ phiếu là gì? Hiểu đúng luật chơi trước khi xuống tiền (2026)",
    "slug": "ban-chat-co-phieu-la-gi-hieu-dung-luat-choi-truoc-khi-xuong-tien-2026",
    "category_id": "96d5c106-653b-470e-90a7-6875e9a490fd", # Chứng Khoán
    "scheduled_at": "2026-04-14T23:30:00+00:00", # Apr 15, 06:30 UTC // 13:30 VN
    "is_published": False,
    "featured_image": "/images/blog/featured_cophieu_1.png",
    "content": content
}

req = urllib.request.Request(f"{url}/rest/v1/posts", data=json.dumps(post).encode("utf-8"))
req.add_header("apikey", key)
req.add_header("Authorization", f"Bearer {access_token}")
req.add_header("Content-Type", "application/json")
req.add_header("Prefer", "return=minimal")

try:
    urllib.request.urlopen(req, context=ctx)
    print("Thành công! Đã chèn bài mẫu 1000 từ + 4 ảnh!")
except Exception as e:
    print(f"Lỗi: {e}")
