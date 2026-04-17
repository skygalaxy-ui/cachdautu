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

content = """Mỗi năm, hàng nghìn tỷ đồng của người Việt không cánh mà bay vì dính vào các vụ lừa đảo tài chính "đội lốt" dự án khởi nghiệp triệu USD, tiền ảo, hay góp vốn kinh doanh. Bạn có bao giờ tự hỏi: Tại sao rất nhiều nạn nhân là những giáo viên, bác sĩ, thậm chí là chuyên gia tài chính có học vấn rất cao? 

Thực chất, họ đều đang sập cùng một chiếc bẫy đã tồn tại hàng trăm năm mang tên **Mô Hình Ponzi**. Bài viết này sẽ lột trần toàn bộ cơ chế vận hành của thủ đoạn này, giúp bạn có kháng thể bảo vệ gia tài của mình trước những lời mời chào "Lãi suất 20%/tháng".

![Chân dung Charles Ponzi và cơ chế lừa đảo mang tên ông](/images/blog/inline_cophieu_3.png)

## 1. Mô hình Ponzi là gì? Bản chất của "Lấy mỡ nó, rán nó"
Mô hình Ponzi được đặt theo tên của Charles Ponzi, một kẻ lừa đảo khét tiếng người Ý tại Mỹ vào những năm 1920. Tuy nhiên, bản chất của nó thì vô cùng đơn giản: **Dùng tiền của người tham gia sau, để trả lãi cho người tham gia trước.**

Trong một doanh nghiệp hợp pháp, lợi nhuận được sinh ra từ việc bán sản phẩm, dịch vụ hoặc đầu tư sinh lời thực tế. Nhưng trong Ponzi:
- Kẻ chủ mưu không hề mang tiền đi kinh doanh hay đầu tư bất cứ thứ gì.
- Dự án kinh doanh siêu lợi nhuận (khai thác vàng, đào coin, trí tuệ nhân tạo...) chỉ là bánh vẽ.
- Khi người A nạp vào 100 triệu, kẻ lừa đảo lấy ngay 20 triệu trong số đó để trả "cổ tức tháng đầu" cho A. Kẻ lừa đảo đút túi 80 triệu.
- Khi A thấy "lãi về đều", A rủ thêm B, C, D vào nhằm ăn hoa hồng. Tiền của B, C, D lại được dùng để phết lên mặt A một lớp quyến rũ giả tạo. 

### Quy luật "Sụp đổ tất yếu" của Ponzi
Mô hình này giống như một quả bóng bị bơm hơi liên tục. Nó bắt buộc phải tuyển mới liên tục người tham gia (Dòng tiền nạp vào) để có thể gánh được chi phí khổng lồ của việc trả lãi (Dòng tiền rút ra cực lớn do lãi suất hứa hẹn quá cao). 

Khi không còn ai để dụ dỗ, hoặc khi những người cũ đồng loạt hoảng sợ đòi rút vốn gốc (Panic withdraw), hệ thống sẽ gãy đổ ngay lập tức. Kẻ chủ mưu sẽ khóa website, xóa nhóm Telegram, ôm theo ngàn tỷ và biến mất ra nước ngoài.

![Sự sụp đổ của một mô hình đa cấp kim tự tháp là không thể tránh khỏi](/images/blog/featured_cophieu_1.png)

---

## 2. Dấu Hiệu Nhận Biết Mô Hình Ponzi Năm 2026 (Phiên Bản Nâng Cấp)
Kẻ lừa đảo luôn thích ứng với thời cuộc. Nếu ngày xưa, chúng dùng các vỏ bọc rườm rà như kinh doanh đa cấp chức năng, thì năm 2026, chúng đóng bộ áo vest sang trọng và sử dụng các thuật ngữ nhức não như: Blockchain, Web3, Khai thác AI, Forex Robot, Hợp đồng thông minh DeFi.

Tuy nhiên, dù đội lốt công nghệ nào, chúng cũng bộc lộ **4 dấu hiệu chí tử** sau:

### 1. Cam kết lợi nhuận trên trời, Không rủi ro
Lãi suất gửi tiết kiệm là 6%/năm. Warren Buffett (Nhà đầu tư vĩ đại nhất) chỉ đạt trung bình 20%/năm. Vậy mà dự án dám cam kết trả lãi 1%/ngày (tức hơn 300%/năm) và khẳng định "Đầu tư an toàn 100% không sợ lỗ". Đây là tiếng chuông báo động đỏ thẫm. Quy luật tài chính là: Lợi nhuận cao LUÔN ĐI CÙNG Rủi ro cực cao!

### 2. Mô hình tuyển ref (giới thiệu người mới) cực kỳ hấp dẫn
Sản phẩm hay công nghệ của dự án thường rất mờ nhạt, khó dùng, và chẳng ai thực sự mua chúng để xài. Thay vì tập trung bán sản phẩm để tạo doanh thu thực, dự án dành tới 80% năng lượng để xây dựng chính sách hoa hồng: Giới thiệu 1 người được 10%, giới thiệu nhánh tầng 2 được 5%, lên leader 3 sao được thưởng xe Mercedes. Đây là động lực thúc đẩy lòng tham khiến nạn nhân tự bán đứng cả gia đình, bạn bè mình.

### 3. Thông tin lãnh đạo mập mờ, công ty "quốc tế"
Tìm kiếm tên Ban giám đốc (CEO) trên Google thì ra những người Tây ngoại quốc mặc vest bảnh bao nhưng tài khoản LinkedIn lại lèo tèo 50 người kết nối, không có thành tựu nền tảng. Công ty thì rêu rao trụ sở tại "Dubai", "Singapore" hay "Vương quốc Anh", nhưng hoạt động lùa gà lại toàn ở Việt Nam.

![Che đậy bản chất dưới các ứng dụng đầu tư AI cực kỳ đẹp mắt](/images/blog/inline_ngansach_3.png)

---

## 3. Tại Sao Người Rất Thông Minh Vẫn Bị "Lùa"?
Nhiều bác sĩ, giảng viên đại học, thậm chí nhân viên tín dụng ngân hàng vẫn mất hàng chục tỷ vào Ponzi. Nguyên nhân tâm lý sâu xa không nằm ở chỉ số IQ, mà nằm ở:

1. **Hiệu ứng đám đông và Niềm tin mù quáng (FOMO):** Khi thấy bạn bè đi cafe chụp ảnh với cọc tiền, mua xe mới, não bộ sẽ tiết ra Dopamine kích thích lòng ghen tị và sợ bị bỏ lỡ. Họ nghĩ: "Nó ngu hơn mình còn kiếm được, mình phải chơi mạnh hơn".
2. **Sự tự ti về lỗ hổng chuyên môn:** Đối diện với các thuật ngữ mới như "Hệ sinh thái Layer 2", "Node validation", trí thức thường có xu hướng xấu hổ không dám hỏi kỹ vì chột dạ sợ mình mang tiếng lạc hậu. Kẻ lừa đảo tận dụng rất tốt điểm yếu tâm lý "Đừng cãi lại rào cản công nghệ siêu đẳng" này.
3. **Ảo tưởng "Rút êm trước khi sập":** Đây là bi kịch kinh điển nhất. Rất nhiều người tham gia hoàn toàn BIẾT rõ đây là Ponzi lừa đảo. Nhưng họ tự nhủ: *“Dự án mới chạy, mình nạp lớn lấy lãi 2 tháng rồi rút gốc chạy luôn, thằng vào sau chết mặc nó”*. Cuối cùng, lòng tham khiến họ tái đầu tư liên tục, cho đến đúng ngày dự án biến mất.

### Kháng thể chống Lừa đảo năm 2026
Hãy giữ trong đầu câu thần chú duy nhất của giới tỷ phú: **"Nếu có một cỗ máy in tiền lãi 1%/ngày, chúng sẽ tự ném giấy đỏ cầm sổ nhà ra ngân hàng vay để in tiền, chứ không bao giờ mất công chạy quảng cáo Zalo để mời bạn hưởng chung số tiền đó!"**."""

post = {
    "id": str(uuid.uuid4()),
    "title": "Mô hình Ponzi là gì? Tại sao người thông minh vẫn 'mất trắng' tỷ đồng?",
    "slug": "mo-hinh-ponzi-la-gi-tai-sao-nguoi-thong-minh-van-mat-trang-ty-dong",
    "category_id": "7c27ed54-bf17-4892-8c39-4402d607d149", # Cảnh Báo Lừa Đảo
    "scheduled_at": "2026-04-15T11:00:00+00:00", # Apr 15, 18:00 VN
    "is_published": False,
    "featured_image": "/images/blog/inline_vang_3.png",
    "content": content
}

req = urllib.request.Request(f"{url}/rest/v1/posts", data=json.dumps(post).encode("utf-8"))
req.add_header("apikey", key)
req.add_header("Authorization", f"Bearer {access_token}")
req.add_header("Content-Type", "application/json")
req.add_header("Prefer", "return=minimal")

try:
    urllib.request.urlopen(req, context=ctx)
    print("Thành công! Đã chèn bài Ponzi.")
except Exception as e:
    import urllib.error
    if isinstance(e, urllib.error.HTTPError):
        print(f"Lỗi: {e.read().decode('utf-8')}")
    else:
        print(f"Lỗi: {e}")
