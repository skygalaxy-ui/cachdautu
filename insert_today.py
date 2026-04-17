import os
import json
import urllib.request
import uuid
import re

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
    "quy-dau-tu": "8cf5a4ca-c2cb-4e27-9bcf-9df51e5041dc"
}

def generate_lorem(lines=20):
    # Dùng text tiếng Việt mô phỏng chuẩn SEO
    return ("Nhiều nhà đầu tư F0 khi mới bước chân vào thị trường thường mang tâm lý hoang mang. Tuy nhiên, nếu nắm vững các nguyên tắc cốt lõi, việc đầu tư sinh lời sẽ an toàn và bền vững hơn. Bạn phải xây dựng quỹ dự phòng trước, rồi mới tính đến phân bổ vốn vào cổ phiếu hay bất động sản. Không có bữa trưa miễn phí trên thị trường này. " * lines)

articles = [
    {
        "title": "Mở Tài Khoản Chứng Khoán Cần Bao Nhiêu Tiền Năm 2026? Hướng Dẫn Cho F0",
        "slug": "mo-tai-khoan-chung-khoan-can-bao-nhieu-tien-2026",
        "excerpt": "Bạn không cần hàng chục triệu để bắt đầu. Khám phá số vốn tối thiểu thực tế để mở tài khoản và hướng dẫn đặt lệnh đầu tiên.",
        "category_id": cats["chung-khoan"],
        "scheduled_at": "2026-04-13T00:00:00+00:00",
        "content": """## 1. Mở Tài Khoản Chứng Khoán Tốn Bao Nhiêu Chi Phí?
""" + generate_lorem(5) + """

### 1.1 Chi phí mở tài khoản (Phí mở ban đầu)
Hiện tại, 100% các công ty chứng khoán tại Việt Nam (như SSI, VPS, TCBS, VNDirect) đều **Miễn Phí** mở tài khoản mở mới. 

### 1.2 Số vốn tối thiểu cần nạp để giao dịch
Theo quy định giao dịch lô chẵn 100 cổ phiếu tại HOSE. Bạn chỉ cần số tiền để mua đúng 100 cổ phiếu rẻ nhất.

## 2. Bảng Mô Phỏng Vốn Đầu Tư Tối Thiểu
| Mã Cổ Phiếu | Ngành | Giá Cổ Phiếu (VNĐ) | Vốn Tối Thiểu (100 cp) | Đánh Giá Rủi Ro |
|-------------|-------|--------------------|------------------------|-----------------|
| HAG         | Nông nghiệp | ~12,000      | ~1,200,000 VNĐ         | Rủi ro cao      |
| MBB         | Ngân hàng   | ~25,000      | ~2,500,000 VNĐ         | Rủi ro trung bình |
| FPT         | Công nghệ   | ~115,000     | ~11,500,000 VNĐ        | Rủi ro thấp     |

## 3. Lời Khuyên Phân Bổ Vốn Ban Đầu
""" + generate_lorem(10) + """
![Mở tài khoản chứng khoán online](/images/blog/stocks.png)

### 3.1 Giao dịch lô lẻ có được không?
Bạn hoàn toàn có thể mua lô lẻ (từ 1-99 cổ phiếu). Nhưng tính thanh khoản thấp nên hãy ưu tiên tích lũy mua lô chẵn 100 nhé!
"""
    },
    {
        "title": "Cổ Phiếu Chu Kỳ Là Gì? 3 Nhóm Ngành Nhạy Bén Nhất Dòng Tiền 2026",
        "slug": "co-phieu-chu-ky-la-gi-nganh-nao-huong-loi",
        "excerpt": "Cổ phiếu chu kỳ đem lại lợi nhuận đột biến nhưng cũng mang theo rủi ro chia đôi tài khoản nếu bạn đu đỉnh.",
        "category_id": cats["chung-khoan"],
        "scheduled_at": "2026-04-13T02:30:00+00:00",
        "content": """## 1. Khái Niệm Cổ Phiếu Chu Kỳ (Cyclical Stocks)
""" + generate_lorem(6) + """

### 1.1 Khác biệt so với cổ phiếu phòng thủ
Cổ phiếu phòng thủ như điện, nước, y tế thường có mức tăng trưởng chậm rãi nhưng ổn định ngay cả trong suy thoái. Ngược lại, cổ phiếu chu kỳ sống chết theo nhịp đập kinh tế vĩ mô.

## 2. Bảng So Sánh Cổ Phiếu Chu Kỳ Và Phòng Thủ
| Tiêu chí | Cổ Phiếu Chu Kỳ | Cổ Phiếu Phòng Thủ |
|----------|-----------------|--------------------|
| Biến động giá | Rất mạnh, biên độ lớn | Chậm, ổn định |
| Phụ thuộc Vĩ mô| Cực kỳ cao | Thấp |
| Nhóm ngành đại diện | Thép, Ngân hàng, BĐS | Điện, Nước, Dược phẩm |
| Ví dụ thực tế | HPG, TCB, VHM | REE, BWE, DHG |

## 3. Top 3 Nhóm Chu Kỳ Chú Ý Năm Nay
""" + generate_lorem(8) + """
### 3.1 Ngành Thép
Ngành thép nhạy bén với chu kỳ xây dựng và đầu tư công quốc gia.
![Cổ phiếu chu kỳ ngành thép](/images/blog/stocks.png)

### 3.2 Nhóm Ngân Hàng
Được ví là "máu của nền kinh tế", chu kỳ tín dụng quyết định đỉnh và đáy của nhóm bank.
"""
    },
    {
        "title": "Quy Nhỏ Nhặt Mà Cứu Sống Bạn: Xây Quỹ Dự Phòng Khẩn Cấp Bằng Cách Nào?",
        "slug": "quy-du-phong-khan-cap-101-cach-tich-luy",
        "excerpt": "Bạn không bao giờ biết trước lúc nào công ty cắt giảm nhân sự. Hãy chuẩn bị quỹ khẩn cấp 6 tháng lương ngay hôm nay.",
        "category_id": cats["tai-chinh-ca-nhan"],
        "scheduled_at": "2026-04-13T05:00:00+00:00",
        "content": """## 1. Quỹ Dự Phòng Cứu Số Mạng Bạn Thế Nào?
""" + generate_lorem(5) + """

### 1.1 Không phải rủi ro nào cũng đoán trước được
Từ dịch bệnh, sa thải, đến bệnh tật. Quỹ khẩn cấp gánh chịu áp lực dòng tiền để bạn không phải vay tín dụng đen.

## 2. Tính Toán Con Số Mục Tiêu (Bao Nhiêu Là Đủ?)
| Chi Phí Hàng Tháng | Mục Tiêu 3 Tháng | Mục Tiêu 6 Tháng (Chuẩn) | Mục Tiêu 1 Năm (Siêu an toàn) |
|--------------------|-----------------|-------------------------|------------------------------|
| 10,000,000 đ       | 30,000,000 đ    | 60,000,000 đ            | 120,000,000 đ                |
| 20,000,000 đ       | 60,000,000 đ    | 120,000,000 đ           | 240,000,000 đ                |

## 3. Cất Quỹ Dự Phòng Ở Đâu?
""" + generate_lorem(7) + """
![Gửi tiết kiệm xây quỹ dự phòng](/images/blog/gold.png)

### 3.1 Gửi Tiết Kiệm Ngân Hàng (Kỳ Hạn 1 Tháng)
Đây là chiến lược cuộn gốc lãi tốt nhất. Thanh khoản cao, rút ra khi nào cũng được dù mất lãi.

### 3.2 Chứng chỉ tiền gửi (Túi thần tài Momo, Tikop)
Linh hoạt lấy theo ngày nhưng lãi suất không còn hấp dẫn như xưa.
"""
    },
    {
        "title": "Đầu Tư Vàng 9999 Hay Gửi Tiết Kiệm Năm 2026: Chiến Lược Chống Lạm Phát",
        "slug": "dau-tu-vang-hay-gui-tiet-kiem-2026",
        "excerpt": "Trong kỷ nguyên lạm phát và tiền rẻ, việc giữ 100% tiền mặt trong ngân hàng có thể là một rủi ro tàng hình.",
        "category_id": cats["vang"],
        "scheduled_at": "2026-04-13T08:00:00+00:00",
        "content": """## 1. Nhìn Lại Lịch Sử Giá Vàng Chống Lạm Phát
""" + generate_lorem(5) + """

### 1.1 Vàng - Nơi trú ẩn cuối cùng
Trong khi tiền giấy có thể bị mất giá trị khi các ngân hàng trung ương in thả ga, vàng có số lượng cung hữu hạn trên trái đất.

## 2. Bảng So Sánh Gửi Tiết Kiệm và Mua Vàng Vật Chất
| Đặc điểm | Gửi Tiết Kiệm Ngân Hàng | Tích Trữ Vàng Nhẫn 9999 |
|----------|-----------------------|-------------------------|
| Mức độ An Toàn | Rất Cao (Được NHNN bảo hộ) | Cao (Lưu ý rủi ro mất trộm) |
| Lợi nhuận dự kiến | 4.5% - 6% / năm | -10% đến +25% / năm (Biến động) |
| Mục đích lõi | Sinh lãi đều đặn | Bảo toàn sức mua dài hạn |
| Thanh khoản | Tức thời | Rất tốt (Nhưng phụ thuộc giá tiệm vàng) |

## 3. Bạn Nên Chọn Khẩu Vị Nào?
""" + generate_lorem(8) + """
![Vàng Nhẫn 9999 và Tiền Cầm Tay](/images/blog/gold.png)

### 3.1 Quy tắc 70/30 huyền thoại
Đừng bao giờ "All-in" mua vàng hoặc gửi tiết kiệm. Hãy pha trộn 70% tiền mặt và 30% vàng để giảm sóc cho danh mục.
"""
    },
    {
        "title": "So Sánh 2 Quỹ Dẫn Dắt Thị Trường: ETF VN30 Và ETF VNFIN LEAD",
        "slug": "so-sanh-etf-vn30-va-vnfin-lead-quy-nao-ngon",
        "excerpt": "Mua quỹ ETF là con đường nhanh nhất để sở hữu rổ cổ phiếu lớn nhất Việt Nam. Nhưng chọn E1VFVN30 hay FUESSVFL?",
        "category_id": cats["quy-dau-tu"],
        "scheduled_at": "2026-04-13T11:00:00+00:00",
        "content": """## 1. ETF Kụ Nội VN30 (E1VFVN30)
""" + generate_lorem(5) + """

### 1.1 Khái quát về danh mục
Quỹ mô phỏng chỉ số VN30, bao gồm 30 doanh nghiệp đầu ngành như VHM, FPT, HPG, TCB. Phân bổ rủi ro ngành cực kỳ đa dạng.

## 2. ETF Ngân Hàng & Tài Chính (VNFIN LEAD - FUESSVFL)
### 2.1 Đặc trưng
Quỹ này tập trung cực mạnh vào Dòng Bank và Chứng khoán. "Lên thì bốc đầu, xuống thì dò đáy" là đặc tính nổi bật của nó.

## 3. Bảng So Sánh Chỉ Tiêu Khách Quan
| Tiêu chí | ETF VN30 (E1VFVN30) | ETF VNFIN LEAD (FUESSVFL) |
|----------|---------------------|---------------------------|
| Quỹ Quản Lý | Dragon Capital | SSIAM |
| Nhóm Cổ Phiếu Cấu Thành | 30 công ty vô địch đa ngành | ~21 công ty ngành Tài chính Ngân hàng |
| Độ Biến Động (Beta) | Gần sát VNIndex | Rất lớn so với VNIndex |
| Phí Quản Lý | ~0.65%/năm | ~0.65%/năm |

## 4. Nên Múc Quỹ Nào?
""" + generate_lorem(6) + """
![ETF Chart](/images/blog/stocks.png)

### 4.1 Khẩu vị rủi ro
Nếu bạn thích an toàn, mua rổ VN30. Nếu bạn tin rằng nền kinh tế phục hồi thì ngành ngân hàng sẽ tăng mạnh nhất, hãy mua FIN LEAD.
"""
    },
    {
        "title": "Nghịch Lý BĐS 2026: Có 2 Tỷ Nên Mua Chung Cư Cũ Hay Về Quê Ôm Đất Nền?",
        "slug": "2-ty-mua-chung-cu-hay-dat-nen-ven-do",
        "excerpt": "Chung cư nội đô đang ngáo giá trong khi đất nền ven đô đang cắt lỗ. Dòng vốn 2 tỷ của bạn nên trú ẩn vào đâu?",
        "category_id": cats["bat-dong-san"],
        "scheduled_at": "2026-04-13T13:30:00+00:00",
        "content": """## 1. Bối Cảnh Thị Trường Bất Động Sản "Lệch Pha"
""" + generate_lorem(5) + """

### 1.1 Chung cư nội đô cháy hàng, ngáo giá
Căn hộ ở các thành phố lớn liên tục thiết lập mặt bằng giá mới do chi phí đền bù tăng, giá nguyên vật liệu cao và quỹ đất cạn kiệt.

### 1.2 Đất tỉnh cắt lỗ sâu sau thời gian đu đỉnh ảo
Nhiều "cá mập" kiệt sức tài chính đang xả hàng loạt lô đất vườn, đất dự án vùng ven với mức giá chiết khấu 30-40%.

## 2. Bảng Phân Tích Lợi Ích & Rủi Ro Tiền Tỷ
| Phương Phương Đầu Tư | Mua Chung Cư (Giữ tiền, nhận dòng tiền) | Mua Đất Nền (Chờ khởi sắc sóng bơm tiền) |
|----------------------|-----------------------------------------|------------------------------------------|
| Lãi vốn (Capital Gain) | Thấp đến Trung Bình (Sắp chạm trần)    | Rất Cao (Nếu ôm được đáy)                |
| Lãi dòng (Dòng tiền)   | 4-5% / năm (Cho thuê ngay lập tức)     | 0% (Để cỏ mọc, chăn bò)                  |
| Thanh Khoản            | Cực Tốt (Rất dễ gạt ra thoát hàng)     | Cực Kém (Thị trường đóng băng khó bán)   |
| Pháp lý điển hình      | Sổ hồng (Tuy hơi chậm cấp)             | Rủi ro quy hoạch, phân lô bán nền ảo     |

## 3. Tổng Kết Quyết Định
""" + generate_lorem(6) + """
![Căn hộ so với đất ven đô](/images/blog/real-estate.png)

### 3.1 Nhu cầu an toàn hay đầu cơ bứt phá?
Nếu bạn sợ lạm phát, thích cảm giác an toàn hàng tháng có tiền ting ting: Chung cư. Nếu bạn có thu nhập riêng rất mạnh, vốn nhàn rỗi 5-10 năm: Bắt đáy đất nền.
"""
    }
]

import ssl
from collections import defaultdict

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
    
    # insert
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
