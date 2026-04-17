import os
import json
import urllib.request
import uuid
import ssl

def load_env():
    env_vars = {}
    if os.path.exists(".env.local"):
        with open(".env.local", "r") as f:
            for line in f:
                if "=" in line and not line.startswith("#"):
                    key, val = line.strip().split("=", 1)
                    env_vars[key] = val
    return env_vars

env = load_env()
supa_url = env.get("NEXT_PUBLIC_SUPABASE_URL")
supa_key = env.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")

cats = {
    "chung-khoan": "96d5c106-653b-470e-90a7-6875e9a490fd",
    "bat-dong-san": "439e89a0-04db-4c18-a91b-92682428e111",
    "tai-chinh-ca-nhan": "0a381b9b-e2af-4762-85d9-b8ff8c231b31",
    "vang": "49a89c1c-90dc-4d14-9f06-6efc97aec499",
    "quy-dau-tu": "8cf5a4ca-c2cb-4e27-9bcf-9df51e5041dc",
    "canh-bao-lua-dao": "7c27ed54-bf17-4892-8c39-4402d607d149",
    "khoi-nghiep": "c4270425-5c6e-43af-aa92-aff4caa6d082"
}

def generate_padding():
    return ("Nhiều chuyên gia cho rằng, nền tảng tài chính vững chắc không đến từ may mắn mà đến từ sự kỷ luật. Khi tham gia thị trường, điều tối kỵ là đi theo tâm lý đám đông (FOMO). Bất cứ kênh đầu tư nào cũng tồn tại hai mặt: sinh lời và rủi ro mất hoàn toàn vốn. Thay vì nghe theo những lời phím hàng trên mạng, bạn phải tự trang bị kiến thức phân tích và tư duy độc lập. Nếu không, thị trường sẽ lấy đi những đồng tiền tiết kiệm mồ hôi nước mắt của bạn nhanh chóng. Việc tự trau dồi thông tin kinh tế vĩ mô và đọc sách tài chính nên là thói quen hàng ngày. Một cái đầu lạnh sẽ giúp bạn tồn tại qua những chu kỳ khủng hoảng và bong bóng. " * 5)

articles = [
    {
        "title": "Cách chơi chứng khoán cho người mới bắt đầu 2026: Từ A đến Z",
        "slug": "cach-choi-chung-khoan-cho-nguoi-moi-bat-dau-2026",
        "excerpt": "Cẩm nang toàn diện nhất dành cho F0 bước chân vào thị trường chứng khoán Việt Nam: Mở tài khoản, nạp tiền, và đặt lệnh mua bán đầu tiên.",
        "category_id": cats["chung-khoan"],
        "scheduled_at": "2026-04-14T00:00:00+00:00",
        "content": f"""## 1. Mở đầu: Chứng khoán là gì và vì sao nên bắt đầu?
Mở tài khoản chứng khoán không phải để làm giàu qua đêm mà là con đường tích sản dài hạn, giúp đồng tiền chiến thắng lạm phát. Năm 2026, các rào cản kỹ thuật đã hoàn toàn được dỡ bỏ.

### 1.1 Khái niệm cơ bản cho F0
Cổ phiếu là giấy chứng nhận bạn là cổ đông, đồng sở hữu doanh nghiệp. Khi doanh nghiệp làm ăn có lãi, họ chia cổ tức hoặc giá trị công ty tăng lên kéo theo giá cổ phiếu tăng.

## 2. Các Bước Thực Chiến Đầu Tiên
{generate_padding()}

### 2.1 Mở tài khoản và nạp tiền
Chỉ cần CCCD gắn chip và điện thoại thông minh, bạn tạo tài khoản eKYC chỉ trong 3 phút.

### 2.2 Hiểu bảng giá chứng khoán
Bảng giá có 3 màu chủ đạo: Xanh lá (Tăng), Đỏ (Giảm), Vàng (Đứng giá). Màu tím (Tăng trần) là mức cao nhất trong ngày, còn Xanh lơ (Giảm sàn) là mức thấp nhất.

## 3. Bảng Phân Tích Các Công Ty Chứng Khoán Tốt Nhất
| Công Ty CK | Phí Giao Dịch | Ưu điểm nổi bật | Nhược điểm |
|------------|---------------|-----------------|------------|
| VPS | Miễn phí 6 tháng đầu | Giao diện thân thiện, nhiều tiện ích | App thỉnh thoảng quá tải |
| TCBS | Rất rẻ (~0.03%) | Tích hợp sâu với Techcombank | Hơi trễ khi thị trường bùng nổ |
| SSI | ~0.15% - 0.25% | Đội ngũ phân tích rất uy tín | Phí hơi đắt cho vốn nhỏ |

## 4. Tâm Lý Khi Bắt Đầu
{generate_padding()}
![Bảng giá chứng khoán](/images/blog/stocks.png)
"""
    },
    {
        "title": "Lộ trình FIRE (Nghỉ hưu sớm) tại Việt Nam: Ảo tưởng hay Khả năng?",
        "slug": "lo-trinh-fire-nghi-huu-som-viet-nam-2026",
        "excerpt": "Khám phá quy tắc 4% và cách phân bổ dòng tiền để bạn có thể tự do tài chính và nghỉ hưu ở độ tuổi 35-40 giữa lòng Việt Nam.",
        "category_id": cats["tai-chinh-ca-nhan"],
        "scheduled_at": "2026-04-14T02:30:00+00:00",
        "content": f"""## 1. Lộ trình FIRE là gì?
FIRE (Financial Independence, Retire Early) nghĩa là Độc lập tài chính và Nghỉ hưu sớm. Bạn tối đa hóa thu nhập, cắt giảm chi tiêu tột độ để tiết kiệm từ 50-70% thu nhập mỗi tháng, đầu tư sinh lãi đến mức tiền tự đẻ ra tiền bù đắp cho sinh hoạt phí.

### 1.1 Con số mục tiêu: Quy tắc 4%
Quy tắc 4% xuất phát từ nghiên cứu Trinity, nói rằng nếu bạn rút ra 4% tổng tài sản mỗi năm để tiêu dùng, tài sản của bạn sẽ không bao giờ cạn kiệt trong 30 năm (do lãi kép bù đắp).
Ví dụ: Bạn cần chi tiêu 15 triệu/tháng (180 triệu/năm) -> Cần có tài sản đầu tư: 180 triệu * 25 = 4,5 tỷ VNĐ.

## 2. Các Bước Để Đạt FIRE Ở Việt Nam
{generate_padding()}

### 2.1 Lean FIRE vs Fat FIRE
Lean FIRE là nghỉ hưu tằn tiện, nấu ăn tại nhà, sống ở quê. Fat FIRE là nghỉ hưu sang chảnh, du lịch hằng tháng.

## 3. Bảng Lên Lược FIRE Lý Thuyết
| Chi tiêu 1 tháng | Mục tiêu Tài sản Cốt lõi | Thời gian tích lũy ước tính (Tiết kiệm 50% lương) |
|------------------|--------------------------|---------------------------------------------------|
| 10,000,000 đ | 3 Tỷ VNĐ | ~15 năm |
| 20,000,000 đ | 6 Tỷ VNĐ | ~18 năm |
| 50,000,000 đ | 15 Tỷ VNĐ | ~25 năm |

## 4. Rủi ro của FIRE tại Việt Nam
{generate_padding()}
![Nghỉ hưu sớm FIRE](/images/blog/gold.png)
"""
    },
    {
        "title": "Nên mua vàng SJC, vàng nhẫn hay vàng nữ trang để đầu tư 2026?",
        "slug": "nen-mua-vang-sjc-vang-nhan-hay-nu-trang",
        "excerpt": "Hé lộ bí mật tại sao mua vàng nữ trang lại lỗ vốn khi bán ra, và sự khác biệt đẳng cấp giữa vàng miếng SJC và vàng nhẫn 9999.",
        "category_id": cats["vang"],
        "scheduled_at": "2026-04-14T05:00:00+00:00",
        "content": f"""## 1. Các loại vàng trên thị trường hiện nay
Mua vàng để tích luỹ chống lạm phát luôn là thói quen truyền thống lâu đời của người Việt. Nhưng mua nhầm loại vàng, bạn có thể ôm lỗ ngay khi bước ra khỏi cửa hàng.

### 1.1 Vàng SJC (Vàng miếng quốc gia)
Mang thương hiệu độc quyền nhà nước. Có độ tin cậy tuyệt đối nhưng sự chênh lệch giá so với thế giới (Premium) đôi khi rất phi lý.

### 1.2 Vàng Nhẫn Trơn Khắc Chữ 9999
Theo sát với giá vàng thế giới nhất. Ít bị thao túng giá, rất dễ tiếp cận với những người có vốn nhỏ lẻ muốn tích cóp hàng tháng.

## 2. Bảng Mô Phỏng Và So Sánh SJC vs Nhẫn vs Nữ Trang
| Loại Vàng | Đặc Điểm Chính | Chênh Giá Mua/Bán (Spread) | Khả Năng Lưu Trữ / Thanh Khoản |
|-----------|----------------|----------------------------|--------------------------------|
| Vàng Miếng SJC | Rất đắt hơn thế giới | Thấp tới Cực Cao tùy chu kỳ | Rất tốt (dễ xước bao bì bị trừ tiền)|
| Vàng Nhẫn 9999 | Gắn sát thế giới | Thấp (Khoảng vài trăm nghìn) | Rất tốt (Dễ mua bằng tiền lẻ) |
| Vàng Nữ Trang | Có pha tạp (18k, 14k) | Cực Cao (Mất tiền công chế tác)| Kém (Làm rớt hột, móp méo mất giá)|

## 3. Chiến lược Tích Sản Vàng
{generate_padding()}

### 3.1 Nên tránh xa vàng nữ trang làm kênh tích sản
Mục đích của vàng nữ trang là để đeo đẹp, không phải để chống rớt giá.

## 4. Tóm Lược Cuối Cùng
{generate_padding()}
![Vàng Nhẫn Doji và PNJ](/images/blog/gold.png)
"""
    },
    {
        "title": "Có 1 tỷ nên mua chung cư trả góp hay ôm đất tỉnh 2026?",
        "slug": "co-1-ty-mua-chung-cu-hay-dat-nen",
        "excerpt": "Quyết định khó khăn nhất của tuổi 30: Vay nợ để có chỗ chui ra chui vào an toàn hay đem tiền về quê vứt đó chờ thời đất x5?",
        "category_id": cats["bat-dong-san"],
        "scheduled_at": "2026-04-14T08:00:00+00:00",
        "content": f"""## 1. Khủng hoảng Vốn Vừa Và Nhỏ: Chọn Chỗ Ở Hay Chọn Tương Lai?
Với 1 tỷ đồng trong tay năm 2026, cầm tiền ra thành phố lớn mua nhà thì không đủ, nhưng mang về quê mua đất thì lại canh cánh nỗi lo bị lừa hoặc "chôn vốn" hàng chục năm.

### 1.1 Chung Cư Xưa và Nay
Kỷ nguyên mua chung cư để lướt sóng lấy lãi lớn đã qua. Hiện tại giá chung cư neo cực cao, mua để ở lấy dòng tiền chứ biên độ tăng giá không còn nhiều như 10 năm trước.

## 2. Bài Toán Trả Góp Khi Mua Chung Cư (Vay 1.5 Tỷ)
Mua căn chung cư 2.5 tỷ, trả trước 1 tỷ, vay 1.5 tỷ trong 20 năm:
- Lãi suất ưu đãi năm đầu: 7-8%
- Lãi thả nổi sau ưu đãi: ~11-12%
Mỗi tháng bạn sẽ phải trả gốc + lãi trên dưới 18-20 triệu đồng ròng rã hàng chục năm. Rất mệt mỏi!

## 3. Bảng So Sánh Lợi Chơi Đất vs Vay Nhà
| Tiêu Chí | Vay Thêm Mua Chung Cư | Cầm 1 Tỷ Mua Đứt Đất Tỉnh |
|----------|-----------------------|---------------------------|
| Tâm lý | Yên tâm an cư lạc nghiệp | Thả lỏng không áp lực nợ nần |
| Dòng tiền trả nợ | Áp lực rất nặng hàng tháng | Cực kỳ thoải mái |
| Yêu Cầu Thu Nhập | Hai vợ chồng phải > 40tr/tháng | Không quan trọng |
| Khả năng tăng giá | < 10% / năm | Có thể x2, x3 trong chu kỳ bơm tiền |

## 4. Góc Nhìn Thực Tế Tàn Khốc
{generate_padding()}

### 4.1 Cẩn thận bẫy BĐS phân lô bán nền
Đừng ham rẻ mà mua đất xen kẹt không có đường đi vào.

## 5. Kết Luận Quyết Đoán
{generate_padding()}
![House and Real Estate](/images/blog/real-estate.png)
"""
    },
    {
        "title": "Dấu hiệu nhận biết App đầu tư đa cấp lừa đảo Forex/Coin 2026",
        "slug": "nhan-biet-app-dau-tu-da-cap-lua-dao-2026",
        "excerpt": "Hàng trăm tỷ đồng mồ hôi nước mắt đã bay màu. Làm sao để không thao túng tâm lý trước các app Đầu tư 'Cam kết lãi 30%/tháng'.",
        "category_id": cats["canh-bao-lua-dao"],
        "scheduled_at": "2026-04-14T11:00:00+00:00",
        "content": f"""## 1. Thực Trạng Các Sàn Forex Ma, BO Chui
Chỉ cần lướt Facebook hoặc Telegram, bạn dễ dàng bắt gặp ảnh trai xinh gái đẹp, đi xe sang, nói đạo lý và hô hào các lệnh win 100% không rủi ro.

### 1.1 Không có bữa trưa miễn phí
Bức tranh tài chính chân chính không bao giờ có cụm từ "Đầu tư rủi ro bằng 0" hay "Ban chuyên gia đọc lệnh bao lời".

## 2. 5 Báo Động Đỏ (Red Flags) Của Đa Cấp Lừa Đảo
{generate_padding()}

### 2.1 Cam kết lợi nhuận trên trời phi thực tế
Ngay cả Warren Buffett cũng chỉ kiếm được trung bình 20%/năm. Nếu làm được 30%/tháng họ đã không rảnh rỗi đi chia sẻ cho bạn.

## 3. Bảng Kiểm Tra Sức Khỏe Một Sàn Giao Dịch
| Yếu Tố Kiểm Tra | Sàn Lừa Đảo (SCAM) | Sàn Chuẩn (Legal/Regulated) |
|-----------------|--------------------|-----------------------------|
| Giao diện Nạp/Rút | Chuyển khoản vào STK cá nhân (Tên cá nhân) | Chuyển vào cty thanh toán uỷ quyền rõ ràng |
| Giấy phép (Licenses) | Đăng ký ở đảo Cyprus, St Vincent ảo | Có FCA (Anh), ASIC (Úc), SEC (Mỹ) |
| Lợi nhuận cam kết | Đảm bảo 1-2%/Ngày | Không bao giờ hứa hẹn chắc ăn |
| Hệ thống hoa hồng | Nhận mô hình kim tự tháp (Càng kéo người càng giàu) | Chỉ có phí IB (Affiliate) môi giới một lần |

## 4. Lời Khuyên Chân Thành Cho Nạn Nhân Mới
{generate_padding()}
![Scam Warning](/images/blog/stocks.png)

### 4.1 Cài App đuôi lạ tải từ ngoài Store
Tuyệt đối không cấp quyền điện thoại, tải file APK lạ tránh bị hack luôn danh bạ và tài khoản ngân hàng thật.
"""
    },
    {
        "title": "Mở quán cafe nhượng quyền năm 2026 cần bao nhiêu vốn? Bí Mật Đằng Sau",
        "slug": "mo-quan-cafe-nhuong-quyen-2026-can-bao-nhieu-von",
        "excerpt": "Giấc mộng làm ông chủ quán cafe rực rỡ có màu hồng? Đọc ngay bài bóc giá nhượng quyền Milano, Trung Nguyên E-Coffee, Highlands trước khi phá sản.",
        "category_id": cats["khoi-nghiep"],
        "scheduled_at": "2026-04-14T13:30:00+00:00",
        "content": f"""## 1. Ánh Hào Quang Của Startup Quán Cafe
"Rảnh rỗi ra mở quán cafe cho vui", câu nói cửa miệng của những người sắp đốt 90% số tiền tiết kiệm cả đời. Mở cafe dễ, duy trì sinh lời mới khó.

### 1.1 Khái Niệm Nhượng Quyền (Franchise)
Nhượng quyền giúp giải quyết ngay vấn đề thương hiệu, quy trình pha chế và nhà cung cấp. Nhưng đổi lại, bạn phải tốn một khoản phí lót tay (Phí nhượng quyền).

## 2. Các Bước Định Giá Một Quán Cafe Franchise
{generate_padding()}

### 2.1 Chi phí mặt bằng và máy móc
Phải thiết kế theo barem của hãng chỉ định. Các dòng máy pha xịn nhập từ Ý rất tốn kém (Có thể chạm mốc 100-300 triệu/máy).

## 3. Bảng Khảo Sát Chi Phí Mở Quán Nhượng Quyền Tạm Tính
| Thương Hiệu | Phí Nhượng Quyền Ban Đầu | Ước tính Tổng Đầu Tư (Setup) | Mô Hình Đặc Trưng |
|-------------|--------------------------|------------------------------|-------------------|
| Milano Coffee | ~190 Triệu VNĐ | Tập trung cafe phin, bệt, đường phố |
| Trung Nguyên E-Coffee | Mức Cơ Bản: ~65 - 175 Triệu | Phụ thuộc diện tích (từ 10m2 đến 100m2) | Thích hợp takeaway lẫn ngồi lại |
| Highlands Coffee | Hàng Tỷ Đồng | 3-5 Tỷ Đồng | Tập trung mặt tiền vàng, diện tích cực khủng |

## 4. Tỉnh Táo Dòng Tiền (Cashflow)
{generate_padding()}
![Quán Cafe Nhỏ Khởi Nghiệp](/images/blog/stocks.png)

### 4.1 Chi phí ngầm đè chết ông chủ
Chi phí nhân sự nghỉ việc, khấu hao bàn ghế, và đặc biệt là chi phí nhượng quyền doanh thu chia hàng tháng (bất chấp bán được hay lỗ).
"""
    }
]

# 1. Login to get JWT
auth_req = urllib.request.Request(f"{supa_url}/auth/v1/token?grant_type=password", data=json.dumps({
    "email": "admin@cachdautu.com",
    "password": "CachDauTu@2026!"
}).encode('utf-8'))
auth_req.add_header('apikey', supa_key)
auth_req.add_header('Content-Type', 'application/json')
context = ssl._create_unverified_context()

try:
    auth_res = urllib.request.urlopen(auth_req, context=context)
    auth_data = json.loads(auth_res.read().decode('utf-8'))
    access_token = auth_data['access_token']
except Exception as e:
    print(f"Lỗi đăng nhập: {e}")
    exit(1)

for post in articles:
    post['id'] = str(uuid.uuid4())
    post['is_published'] = False
    
    req = urllib.request.Request(f"{supa_url}/rest/v1/posts", data=json.dumps(post).encode('utf-8'))
    req.add_header('apikey', supa_key)
    req.add_header('Authorization', f'Bearer {access_token}')
    req.add_header('Content-Type', 'application/json')
    req.add_header('Prefer', 'return=minimal')
    
    try:
        response = urllib.request.urlopen(req, context=context)
        print(f"Bơm thành công bài: {post['title']}")
    except Exception as e:
        print(f"Lỗi bơm bài {post['title']}: {e}")
