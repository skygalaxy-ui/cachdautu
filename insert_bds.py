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

content = """Trong giai đoạn kinh tế phục hồi (2026), một trong những câu hỏi nhức nhối nhất của giới văn phòng hoặc các cặp vợ chồng trẻ là: **"Có 500 triệu đồng tiền nhàn rỗi, nên vứt vào ngân hàng lấy lãi suất an toàn, hay liều mình lùng mua một mảnh đất nền ven đô chờ đổi đời?"**

Cả ngân hàng và bất động sản đều có những sức hút và rủi ro hoàn toàn trái ngược nhau. 500 triệu không phải là một con số quá lớn để dễ dàng rải thảm ở các khu trung tâm dự án, nhưng lại là mồ hôi nước mắt cả thanh xuân. Bài phân tích dưới đây sẽ "mổ xẻ" trần trụi cả hai kênh đầu tư này để giúp bạn đưa ra quyết định "xuống tiền" khôn ngoan nhất.

![Bất động sản ven đô và Gửi tiết kiệm: Cuộc chiến của vốn mỏng](/images/blog/inline_bds_2.png)

## 1. Gửi tiết kiệm (Bank Savings): Bến đỗ của sự An Toàn Tuyệt Đối
Nếu bạn là người có khẩu vị rủi ro thấp (Risk-Averse) và liên tục lo lắng mất ngủ mỗi khi tiền rời khỏi ví, thì sổ tiết kiệm chính là chân ái của cuộc đời bạn.

### Điểm cộng của Gửi tiết kiệm:
- **Tính thanh khoản tối thượng:** Bạn có 500 triệu đang gửi kỳ hạn 12 tháng, nhưng gia đình đột nhiên có người ốm nặng cần cấp cứu? Bạn chỉ cần phi ra ngân hàng gần nhất, ký một tờ giấy tất toán trước hạn (chấp nhận mất lãi hoặc hưởng lãi không kỳ hạn) và nhận trực tiếp 500 triệu tiền mặt trong 15 phút. Không có kênh đầu tư nào thanh khoản nhanh như vậy.
- **Lợi nhuận được bảo chứng:** Trừ hi hữu khủng hoảng, tiền gửi của bạn sẽ luôn sinh sôi theo đúng mức % cam kết trên hợp đồng. Với lãi suất trung bình 6%/năm hiện tại, 500 triệu sẽ đẻ ra đều đặn 30 triệu/năm (2.5 triệu/tháng) mà bạn không phải rỏ một giọt mồ hôi.
- **Miễn nhiễm với chu kỳ kinh tế:** Thị trường chứng khoán bong bóng hay bất động sản đóng băng cũng không thể làm giảm đi một đồng gốc nào của bạn.

![Hoạt động ngân hàng an toàn nhưng chịu rủi ro trượt giá tiền tệ](/images/blog/inline_bds_3.png)

### Rủi ro chết người: Lạm phát (Kẻ cắp vô hình)
Nếu lạm phát thực tế là 5% và ngân hàng trả lãi 6%, lợi tức thực dương của bạn chỉ là 1%. 500 triệu hôm nay mua được một chiếc ô tô Sedan, nhưng 10 năm sau với số tiền gốc cộng lãi đó, bạn có thể chỉ mua được một chiếc xe máy SH cao cấp do đồng tiền mất giá. Tiết kiệm không làm bạn nghèo đi, nhưng **nó tước đi cơ hội để bạn trở nên giàu có**.

---

## 2. Đầu tư đất nền ven đô (Suburban Land): Canh bạc đổi đời của Vốn Mỏng
Với ngân sách 500 triệu, bạn hoàn toàn không có "cửa" bước vào các dự án phân lô trung tâm hay khu đô thị cao cấp. Tọa độ duy nhất dành cho bạn là **đất nền ven đô** hoặc vùng ven các khu công nghiệp ngoại thành, cách trung tâm các thành phố lớn (Hà Nội, TP.HCM, Đà Nẵng) khoảng 40 - 60km.

### Tại sao nên mua đất nền ven đô?
- **Lãi suất biên (Capital Gain) khổng lồ:** Đây là thứ ngân hàng không bao giờ mang lại. Một mảnh đất 500 triệu ở Đồng Nai hay vùng ven Bình Chánh có thể vọt lên 1.5 tỷ (Lãi 200%) chỉ sau 3 năm nếu có quy hoạch đường vành đai hoặc có Cụm công nghiệp mới đổ về. Bất động sản vùng ven được định giá bằng "Kỳ vọng tương lai".
- **Kênh trú ẩn lạm phát tốt nhất:** Đất đai không tự sinh ra thêm. Khi tiền giấy in ra quá nhiều, giá đất bắt buộc phải tăng theo tỷ lệ lạm phát để thiết lập mặt bằng giá trị mới.

![Kiểm tra thông tin bản đồ quy hoạch một cách cẩn trọng bằng công nghệ](/images/blog/inline_bds_4.png)

### Những rủi ro có thể khiến bạn "mất trắng" 500 triệu:
Đừng nhìn vào quả ngọt mà quên mất bùn lầy. Bất động sản ven đô dành cho số vốn 500 triệu chứa đầy cạm bẫy:
1. **Pháp lý chưa rõ ràng (Đất sổ chung, Vi bằng):** Với 500 triệu, rất khó ép mua được đất nền đã có sổ đỏ thổ cư riêng 100%. Mua đất giấy viết tay hoặc vi bằng có nguy cơ bị dính quy hoạch giải tỏa công cộng mà đền bù rất rẻ bèo.
2. **Kẹt vốn (Đóng băng thanh khoản):** Bạn dồn toàn bộ 500 triệu vào mảnh đất xen kẹt 30km ngoài thành phố. Đột nhiên con ốm cần 100 triệu? Bạn treo biển bán đất, giảm giá liên tục 3 tháng trời nhưng không một ai thèm gọi điện đến xem.
3. **Mắc bẫy "Sốt ảo":** Cò đất lợi dụng thông tin ảo (sắp xây sân bay, đại học) để đẩy mảnh đất thực giá 200 triệu lên 500 triệu. Cơn sốt đi qua, bạn mắc kẹt trên đỉnh và mất 10 năm chỉ để hòa vốn.

---

## 3. Lời Giải Thích Đáng Nhất Để Quyết Định
Không có kênh đầu tư hoàn hảo nhất, chỉ có thời điểm giải ngân thích hợp nhất. 

- ĐẤT NỀN LÀ LỰA CHỌN CỦA BẠN NẾU: Bạn đã có **Quỹ khẩn cấp 100 triệu**, thu nhập dư dả hàng tháng, và có thể "quên" 500 triệu này đi trong ròng rã 3-5 năm. Quan trọng nhất, bạn phải có kỹ năng kiểm tra quy hoạch trên Sở Quy hoạch Kiến trúc.
- GỬI TIẾT KIỆM LÀ ĐIỀU BẠN PHẢI LÀM NẾU: 500 triệu đó đóng vai trò sinh tử cho chi phí y tế khám chữa bệnh cho người già, ăn học cho con nhỏ, hoặc bạn chưa từng đọc bất kỳ hợp đồng cọc đất nào.

Gợi ý lai ghép (Hybrid): **Chia đôi giỏ trứng**. Gửi 200 triệu vào ngân hàng để làm bọc lót sinh kế, và sử dụng 300 triệu cộng với sử dụng một chút đòn bẩy ngân hàng (Vay thêm 200tr trả góp bằng lương tháng) để có 500 triệu tiền thịt mua mảnh đất pháp lý an toàn nhất!"""

post = {
    "id": str(uuid.uuid4()),
    "title": "Có 500 triệu nên Gửi tiết kiệm hay mạo hiểm mua Đất nền ven đô? (2026)",
    "slug": "co-500-trieu-nen-gui-tiet-kiem-hay-mao-hiem-mua-dat-nen-ven-do-2026",
    "category_id": "439e89a0-04db-4c18-a91b-92682428e111", # Bất Động Sản
    "scheduled_at": "2026-04-15T05:00:00+00:00", # Apr 15, 12:00 VN
    "is_published": False,
    "featured_image": "/images/blog/featured_bds_1.png",
    "content": content
}

req = urllib.request.Request(f"{url}/rest/v1/posts", data=json.dumps(post).encode("utf-8"))
req.add_header("apikey", key)
req.add_header("Authorization", f"Bearer {access_token}")
req.add_header("Content-Type", "application/json")
req.add_header("Prefer", "return=minimal")

try:
    urllib.request.urlopen(req, context=ctx)
    print("Thành công! Đã chèn bài Bất Động Sản.")
except Exception as e:
    import urllib.error
    if isinstance(e, urllib.error.HTTPError):
        print(f"Lỗi: {e.read().decode('utf-8')}")
    else:
        print(f"Lỗi: {e}")
