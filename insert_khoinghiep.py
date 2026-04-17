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

content = """Sau nhiều năm cày cuốc làm thuê, tích cóp được vài trăm triệu, khát vọng "làm ông chủ" khiến nhiều người hừng hực khí thế nộp đơn xin nghỉ việc để tự mình mở một cửa hàng. Từ một quán cafe view đẹp, một tiệm quần áo thời trang, cho đến một siêu thị mini... 

Giấc mơ thì lúc nào cũng màu hường: "Sáng ra mở cửa, tối về đếm tiền". Nhưng nghiệt ngã thay, hơn 80% cửa hàng bán lẻ truyền thống (Retail) tại Việt Nam phải đóng cửa, sang nhượng trong vòng 8 tháng đầu tiên. Nguyên nhân không nằm ở "phong thủy" hay "chưa được thời", mà đến từ những **sai lầm chí mạng** trong tư duy quản trị tài chính dưới đây.

![Một cửa hàng nhỏ nhưng chi phí vận hành luôn là gánh nặng khổng lồ](/images/blog/inline_vang_2.png)

## 1. Sai lầm 1: Nướng sạch nguồn vốn vào "Setup - Trang trí cửa hàng"
Đây là căn bệnh nan y khó chữa nhất của dân văn phòng tập tành startup. Họ luôn bị ám ảnh bởi sự hoàn hảo về mặt hình thức. Có trong tay 300 triệu, họ sẵn sàng chi 150 triệu cho thiết kế thi công biển bảng, 100 triệu mua nội thất kệ kính tủ gỗ đắt tiền, 30 triệu mua máy pha cafe hoặc phần mềm tính tiền cao cấp, và chỉ chừa lại đúng 20 triệu cho... tiền nhập hàng và vốn lưu động.

**Hậu quả:** 
Khi mở cửa, việc kinh doanh trong 3 tháng đầu hiếm khi có lãi ngay vì lượng khách quen chưa có. Tiền lãi không đóng nổi tiền điện nước và lương nhân viên. Nhưng vì không còn dòng tiền vốn lưu động (Working Capital), cửa hàng đành ngậm ngùi "cạn máu" chết dần.

**Lời khuyên xương máu:** 
- Vốn setup tài sản cố định (bàn ghế, cải tạo) CHỈ ĐƯỢC PHÉP chiếm tối đa 30% - 40% tổng số vốn. 
- 60% vón còn lại phải được giữ chặt làm "Máu" để duy trì chi phí cố định (Tiền mặt bằng, lương...) chịu đựng cơn đói khát trong ít nhất 6 tháng đầu. Bạn bán chất lượng/sản phẩm, chứ không bán cửa kính tường đẹp (trừ loại hình kinh doanh F&B sống ảo).

![Đừng bao giờ để cạn kiệt dòng tiền mà chỉ ôm hàng tồn kho khô héo](/images/blog/inline_ngansach_4.png)

## 2. Sai lầm 2: Tự ảo tưởng về Lưu lượng khách (Traffic vỉa hè)
"Cửa hàng của em nằm ở mặt tiền đường lớn, chỗ này xe máy qua lại nườm nượp, kiểu gì mỗi ngày chẳng tóm được 50 khách rẽ vào mua quần áo!"

Đây là cú lừa vĩ đại nhất do chính não bộ bạn dệt nên. Có một con đường 1 triệu lượt xe chạy qua mỗi ngày, nhưng tất cả đều phóng với tốc độ 60km/h để kịp giờ làm, không một ai có tâm trạng dừng lại ngắm đồ. Hơn thế nữa, vỉa hè phía trước có bậc thềm cao chót vót, hoặc không có chỗ cho bảo vệ dắt xe...

**Nghệ thuật đếm khách:**
Trước khi thuê mặt bằng, hãy chịu khó ngồi quán nước đối diện đúng 3 ngày (Sáng - Trưa - Tối) để bấm thiết bị đếm (Clicker). 
- Xem có bao nhiêu xe máy đi chậm lại? 
- Làn đường đó là làn đi làm hay làn đi chơi về?
- Nếu là quán ăn trưa, thì trong bán kính 2km xung quanh có bao nhiêu nghìn nhân viên văn phòng? Nếu không có dân văn phòng mà bạn mở cơm niêu giá 80k/phần, bạn chắc chắn phá sản.

## 3. Sai lầm 3: Coi thường việc làm Marketing Online (O2O)
Mở một cửa hàng sạch đẹp, cúng khai trương hoành tráng, và... ngồi vểnh râu chờ khách tự đẩy cửa đi vào. Đây là tư duy làm ăn của thập niên 1990.

Vào năm 2026, kể cả bạn có bán Gạo hay Tạp hóa, người dùng đều có thói quen "Search Google Map" trước khi bước ra đường. Nếu bạn mở một shop mẹ và bé, nhưng:
- Bạn không có một kênh Titok/Fb Reel nào lôi kéo tệp bà bầu.
- Cửa hàng không đăng ký định vị trên Google Map với đầy review 5 sao.
- Sản phẩm không có gian hàng trên ShopeeFood, GrabMart...

Thì cửa hàng của bạn hoàn toàn "tàng hình" trong kỷ nguyên số. Chiến lược đúng đắn nhất hiện nay là **O2O (Online to Offline)**. Dùng online để thu hút sự chú ý của khách hàng toàn thành phố, rồi kéo họ về tiệm Offline để trải nghiệm độ tin cậy và chốt sales.

![Ứng dụng dữ liệu online để dẫn lối khách hàng tới cửa tiệm](/images/blog/inline_bds_4.png)

## 4. Sai lầm 4: Ơn giời! Lấy tiền doanh thu đi tiêu xài cá nhân
Cửa hàng hoạt động được 1 tháng. Hôm nay bạn tổng kết thấy trong két sắt thu được 20 triệu tiền mặt. Bạn sung sướng và trích thẳng 5 triệu để đi sắm một đôi giày hàng hiệu tự thưởng cho bản thân vì đã nỗ lực.

**BÙM!** Bạn vừa ăn vào tiền vốn (Tiền nhập hàng). Doanh thu KHÔNG PHẢI LÀ LỢI NHUẬN.
Để có 20 triệu trong két, bạn đã bán số hàng có giá gốc 12 triệu, trừ đi 5 triệu tiền chia trung bình mặt bằng, tiền điện... lãi ròng thực tế của bạn có thể chỉ là 3 triệu. Việc vô cớ đút tay vào két sắt lấy tiền doanh thu tiêu cá nhân sẽ gây thâm hụt nghiêm trọng. Đến ngày đại lý bia hoặc chủ xưởng quần áo gọi điện đòi thanh toán tiền công nợ nhập hàng, bạn sẽ hoảng hốt nhận ra tiền mặt đã "bốc hơi" từ lúc nào.

Hãy luôn trả lương cho chính bản thân mình (Ví dụ: Định mức lương quản lý của mình là 10 triệu/tháng rút vào ngày 5 hàng tháng), nghiêm cấm đụng vào "Quỹ doanh thu" trừ phi dùng để mua nguyên vật liệu và tái đầu tư trả nợ.

Khởi nghiệp là một ván cờ đo lường đầy trí tuệ chứ không chỉ cần lòng nhiệt huyết mộng mơ!"""

post = {
    "id": str(uuid.uuid4()),
    "title": "4 Sai lầm 'Đốt Tiền' khiến 80% Người khởi nghiệp mở cửa tiệm phá sản",
    "slug": "4-sai-lam-dot-tien-khien-80-phan-tram-nguoi-khoi-nghiep-pha-san",
    "category_id": "c4270425-5c6e-43af-aa92-aff4caa6d082", # Khởi nghiệp
    "scheduled_at": "2026-04-15T13:30:00+00:00", # Apr 15, 20:30 VN
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
    print("Thành công! Đã chèn bài Khởi Nghiệp.")
except Exception as e:
    import urllib.error
    if isinstance(e, urllib.error.HTTPError):
        print(f"Lỗi: {e.read().decode('utf-8')}")
    else:
        print(f"Lỗi: {e}")
