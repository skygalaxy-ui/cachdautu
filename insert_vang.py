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

content = """Mặc cho sự ra đời của vô số kênh đầu tư kỹ thuật số tân tiến, **Vàng** vẫn chứng minh được vị thế "Tài sản Trú ẩn An toàn" tối thượng trong tâm thức người Việt Nam. Đặc biệt trong bối cảnh lạm phát biến động ảo diệu và lãi suất ngân hàng liên tục phá đáy, dòng tiền tích lũy một lần nữa lại ào ạt đổ vào các tiệm kinh doanh kim hoàn.

Tuy nhiên, mua vàng để tích trữ không đơn giản chỉ là mang tiền ra tiệm tạp hóa mua một món hàng. Nếu bạn chọn nhầm địa chỉ kém uy tín, không những bị chèn ép về giá khi bán lại mà còn đối mặt với nguy cơ vàng bị hao hụt tuổi (vàng độn, vàng giả). Dưới đây là danh sách và phân tích chi tiết về **Các Tiệm Vàng Uy Tín Nhất Việt Nam**, cùng bộ quy tắc vàng để bạn "mua không hớ, bán không lỗ".

![Một tiệm kim hoàn cao cấp và sang trọng chuẩn quốc tế](/images/blog/inline_vang_2.png)

## 1. Top Các Thương Hiệu Vàng Uy Tín Hàng Đầu (Cập Nhật 2026)

Việc ưu tiên các **thương hiệu Quốc gia** hoặc công ty đại chúng luôn là nguyên tắc bất di bất dịch khi mua vàng đầu tư (khác hoàn toàn với mua vàng trang sức để đeo). Các hệ thống lớn có mạng lưới phủ sóng toàn quốc, đảm bảo tính thanh khoản tuyệt đối (bạn mua ở Sài Gòn, cầm ra Hà Nội bán vẫn được nguyên giá, không sợ bị trừ hao).

### 🥇 SJC - Công ty Vàng Bạc Đá Quý Sài Gòn
- **Vị thế:** Đây là thương hiệu vàng quốc gia của Việt Nam. 100% người dân Việt Nam khi nhắc đến "Vàng miếng" đều mặc định đó là vàng SJC.
- **Sản phẩm chủ lực:** Vàng miếng SJC 1 lượng, 5 chỉ, 1 chỉ, 5 phân...
- **Ưu điểm:** Thanh khoản rực rỡ nhất trên phương diện toàn quốc. Tính pháp lý hoàn hảo, không một đại lý nào dám từ chối mua lại vàng miếng SJC đủ tiêu chuẩn.
- **Nhược điểm:** Mức chênh lệch khổng lồ giữa giá vàng SJC và giá vàng thế giới (đôi khi dao động từ vài triệu đến cả chục triệu đồng/lượng). 

### 🥈 DOJI - Tập đoàn Vàng Bạc Đá Quý DOJI
- **Vị thế:** Nằm trong Top 5 doanh nghiệp tư nhân lớn nhất Việt Nam.
- **Sản phẩm chủ lực:** Vàng ép vỉ Âu Vàng Phúc Long, Vàng nhẫn Hưng Thịnh Vượng.
- **Ưu điểm:** Thiết kế sản phẩm ép vỉ cực kì hoàn thiện, bảo mật cao (sử dụng công nghệ tem chống giả 3D hiện đại nhất 2026). Giá mua vào và bán ra thường bám khá sát với thị trường thế giới và có sự cạnh tranh mạnh so với SJC.
- **Nhược điểm:** Tính thanh khoản ở các vùng nông thôn hẻo lánh đôi khi không mạnh bằng SJC (phải tìm đúng chi nhánh DOJI để bán được giá tốt nhất).

### 🥉 PNJ - Công ty Cổ phần Vàng Bạc Đá Quý Phú Nhuận
- **Vị thế:** Số một về thị phần trang sức thiết kế cao cấp, đồng thời sở hữu thị phần vàng kim loại lớn.
- **Sản phẩm chủ lực:** Vàng nhẫn trơn 24K (Nhẫn tròn trơn PNJ), vàng miếng Tài Lộc.
- **Ưu điểm:** Hệ thống cửa hàng khổng lồ và rộng khắp nhất cả nước, len lỏi tới tận cấp huyện. Nhẫn trơn PNJ hiện đang là sự lựa chọn tối ưu nhất để tích lũy tài sản dài hạn nhờ mức giá "sát sườn" với giá thế giới và hầu như không bị thổi giá như vàng miếng SJC.

![Vàng chính là lá chắn thép chống lại lạm phát của đồng tiền giấy](/images/blog/inline_vang_3.png)

---

## 2. Bí Quyết Mua Bán Vàng "Không Mất Giá"
Ngoài việc chọn đúng tiệm, thao tác và cách thức bạn lưu trữ vàng cũng đóng vai trò sinh tử trong việc bảo toàn lợi nhuận. Hãy khắc cốt ghi tâm 3 nguyên tắc sau:

**Quy Tắc 1: Mua Vàng Ở Đâu, Bán Ở Đó**
Đây là luật ngầm của giới kinh doanh vàng bạc. Nếu bạn mua nhẫn vàng trơn tại PNJ và mang ra Bảo Tín Minh Châu để bán, tiệm sẽ lập tức trừ hao tiền công hoặc tính phí "Kiểm định lại" (do họ không tin tưởng tuyệt đối vào nhẫn không phải do mình đúc). Luôn cầm theo **hóa đơn đỏ** và bán vàng tại đúng thương hiệu bạn đã mua.

**Quy Tắc 2: Phải Bảo Dưỡng Nguyên Vẹn "Lớp Áo" Nilon**
Đặc biệt đối với Vàng miếng SJC hoặc Vàng ép vỉ DOJI. Chỉ cần vỏ bao bì bằng nhựa nilon (Plastic) bị rách một lỗ nhỏ bằng đầu tăm, hoặc bị gãy nếp, móp méo... tiệm vàng lập tức trừ của bạn từ 200.000 vnđ – 500.000 vnđ/lượng tùy vào "tâm trạng" của người thâu mua. Hãy cấp cất kỹ vàng trong két sắt bọc mút mềm.

| Loại Vàng Đầu Tư | Tính Thanh Khoản | Rủi ro thổi giá | Độ mất giá khi rách vỏ vỉ |
| :--- | :--- | :--- | :--- |
| **Vàng Miếng SJC** | Rất Tuyệt Đối | Cực Cao | Bị trừ phí nặng |
| **Vàng Nhẫn 24K (9999)** | Tốt (Nếu bán đúng tiệm) | Thấp (Sát giá thế giới) | Không bị trừ (Vì không ép vỉ Plastic) |
| **Vàng Trang Sức (22k, 18k)** | Yếu | Không thể đo lường | Trừ mất hoàn toàn % tiền gia công |

![Giao dịch và lưu trữ tài sản vàng đang ngày càng hiện đại hóa](/images/blog/inline_vang_4.png)

## 3. Tương Lai Giao Dịch Vàng 2026: Vàng Tài Khoản Điện Tử
Sự xê dịch của công nghệ tài chính hiện đại đã cho ra đời hình thức **Mua bán vàng điện tử** (E-Gold). Bạn không cần phải ôm theo hàng tỷ đồng tiền mặt ra dứng gác ở tiệm vàng để mang rủi ro bị cướp giật trên đường về nhà.

Các ngân hàng lớn hiện nay đã cho phép bạn mua vàng SJC thông qua các thao tác trực tuyến trên App Banking. Dòng tiền sẽ tự động được cấn trừ, và mã số Series của lượng vàng đó sẽ được cấp vào Tài khoản lưu trữ định danh bảo mật của bạn tại kho kho bạc nhà nước. Khi nào muốn bán, bạn chỉ cần lên App và ấn nút "Khớp Lệnh" y như việc mua bán cổ phiếu.

**Kết luận:** Nếu tài sản của bạn chỉ có khoảng 10-20 triệu, mua 1-2 chỉ vàng nhẫn trơn tại DOJI hoặc PNJ là phương án khôn ngoan nhất. Nhưng nếu bạn là tay buôn lớn định xuất tiền để cất giấu tài sản khổng lồ, hãy cân nhắc sử dụng dịch vụ Vàng Tài Khoản hoặc vàng miếng SJC để tận dụng được thanh khoản toàn diện nhất!"""

post = {
    "id": str(uuid.uuid4()),
    "title": "Top Các Tiệm Vàng Uy Tín Nhất 2026 và Tuyệt Chiêu Mua Bán Không Mất Giá",
    "slug": "top-cac-tiem-vang-uy-tin-nhat-2026-tuyet-chieu-mua-ban-khong-mat-gia",
    "category_id": "49a89c1c-90dc-4d14-9f06-6efc97aec499", # Vàng
    "scheduled_at": "2026-04-15T02:30:00+00:00", # Apr 15, 09:30 VN
    "is_published": False,
    "featured_image": "/images/blog/featured_vang_1.png",
    "content": content
}

req = urllib.request.Request(f"{url}/rest/v1/posts", data=json.dumps(post).encode("utf-8"))
req.add_header("apikey", key)
req.add_header("Authorization", f"Bearer {access_token}")
req.add_header("Content-Type", "application/json")
req.add_header("Prefer", "return=minimal")

try:
    urllib.request.urlopen(req, context=ctx)
    print("Thành công! Đã chèn bài Vàng.")
except Exception as e:
    import urllib.error
    if isinstance(e, urllib.error.HTTPError):
        print(f"Lỗi: {e.read().decode('utf-8')}")
    else:
        print(f"Lỗi: {e}")
