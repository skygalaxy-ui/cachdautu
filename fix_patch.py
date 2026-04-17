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
headers = {
    "apikey": key,
    "Authorization": f"Bearer {key}",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}

# Fix Article 1
query1 = urllib.parse.quote("*4 Sai lầm*")
req1 = urllib.request.Request(f"{url}/rest/v1/posts?select=id,title&title=ilike.{query1}", headers=headers)
data1 = json.loads(urllib.request.urlopen(req1, context=ctx).read().decode('utf-8'))
if data1:
    post_id = data1[0]['id']
    content1 = """### 💡 Key Takeaways (Tóm tắt nhanh)
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
    payload1 = {"content": content1, "featured_image": "/images/blog/featured_startup_fail.png"}
    update_req1 = urllib.request.Request(f"{url}/rest/v1/posts?id=eq.{post_id}", data=json.dumps(payload1).encode("utf-8"), method="PATCH", headers=headers)
    res = json.loads(urllib.request.urlopen(update_req1, context=ctx).read().decode('utf-8'))
    print("Article 1 patched:", res[0]['title'])

# Fix Article 2
query2 = urllib.parse.quote("*Mô hình Ponzi là gì*")
req2 = urllib.request.Request(f"{url}/rest/v1/posts?select=id,title&title=ilike.{query2}", headers=headers)
data2 = json.loads(urllib.request.urlopen(req2, context=ctx).read().decode('utf-8'))
if data2:
    post_id = data2[0]['id']
    content2 = """### 💡 Key Takeaways (Tóm tắt nhanh)
- **Bản chất của Ponzi:** Là trò lừa đảo "Lấy tiền người sau trả cho người trước" thay vì tạo ra lợi nhuận từ hoạt động kinh doanh thật.
- **Biến tướng tinh vi 2026:** Ponzi hiện nay ẩn mình dưới vỏ bọc sang trọng như: Giao dịch AI tự động, Farming Crypto lợi suất khủng, hoặc Mua chung bất động sản nghỉ dưỡng.
- **Dấu hiệu nhận biết:** Lợi nhuận cam kết quá cao (20-30%/tháng), luôn trả công hậu hĩnh nếu mời người mới tham gia, và vô cùng mập mờ về giấy phép đăng ký kinh doanh.
- **Tâm lý nạn nhân:** 90% nạn nhân không phải vì ngu ngốc, mà do hội chứng FOMO (Sợ lỡ cơ hội) và tư duy "vào sớm rút sớm, chết thằng vào sau".

Ponzi không phải là một thuật ngữ rỗng tuếch nằm trên trang sách kinh tế. Nó là nguyên nhân biến hàng ngàn cuốn sổ đỏ tại Việt Nam thành giấy lộn mỗi năm. Dù báo đài đã cảnh báo hàng thập kỷ qua, tại sao những kỹ sư IT học thức cao, những chủ doanh nghiệp khôn ngoan lại vẫn liên tục sập bẫy các dự án "Bỏ 1 tỷ thu về 100 triệu mỗi tháng"? 

Sự sập bẫy này không đến từ sự kém cỏi, mà đến từ khao khát thoát khỏi áp lực dòng tiền nhanh nhất.

### 1. Ponzi thời 4.0: Bức bình phong mang tên "Thuật toán AI tự động"
Ngày xưa, Ponzi thường đội lốt các lớp học "Bí quyết làm giàu" hội trường hoặc đa cấp bán khóa học. Nhưng năm 2026, dân lừa đảo đã tinh vi hơn rất nhiều. 

Chúng khoác lên dự án chiếc áo công nghệ chói lọi. Người mời chào có thể đưa cho bạn xem một chiếc App (Ứng dụng) siêu mượt, hiển thị nến xanh đỏ mỗi giây, với "Thuật toán Giao Dịch Bằng Trí Tuệ Nhân Tạo (AI) cam kết thắng 100%". Sự hào nhoáng này che giấu hoàn toàn bản chất cốt lõi: Ứng dụng đó không hề chạy thật. Tất cả chỉ là một bảng Excel do hacker sửa số.

![Sự sụp đổ của một tảng băng rủi ro tài chính](/images/blog/inline_ponzi_1.png)

Tiền mặt thật sự của bạn đã được chuyển cho "Boss" mua siêu xe, và một phần nhỏ li ti được ném lại cho bạn dưới danh nghĩa "Trả lãi tháng đầu tiên".

### 2. Sự "Dễ Ăn" Trong Tháng Đầu Tiên Và Bẫy Tâm Lý
Bảng so sánh sau đây sẽ lật mặt bản chất của Ponzi so với các kênh kinh doanh thực tế:

| Tiêu Chí So Sánh | Dự Án Ponzi Lừa Đảo | Kênh Đầu Tư Chính Thống (ETFs / Tiết kiệm) |
| --- | --- | --- |
| **Lợi nhuận cam kết** | Cực ảo: 15% - 30% / Tháng | An toàn: 5% - 15% / Năm |
| **Mô hình hoạt động** | Tiền người mới đắp vào trả lãi cho người cũ | Tạo ra thặng dư cho xã hội thông qua vốn |
| **Giao diện & Marketing** | Khoa trương, mua bài báo rác, thuê người nổi tiếng seeding | Rõ ràng, minh bạch, được giám sát bởi Ủy Ban Chứng Khoán Nhà Nước |
| **Báo cáo kinh doanh** | Mập mờ, giấu nhẹm công nghệ cốt lõi ("Bí mật công ty") | Có Báo Cáo Tài Chính định kỳ hàng Quý được kiểm toán uy tín |

Điều làm Ponzi đáng sợ là việc nó **Thực sự trả lãi rất đều và đúng hạn trong vòng 1 tới 3 tháng đầu**. 

Đây là mồi câu trí mạng. Khi người đầu tư nhận được lãi thực tế, bộ não não tiết ra lượng Dopamine khổng lồ, xóa tan toàn bộ lớp phòng ngự cảnh giác. Ngay lập tức, họ sẽ lấy sạch tiền trong sổ tiết kiệm, thậm chí cầm cố nhà cửa ném vào dự án vì sợ "Nhỡ mai mốt nó giảm lãi". 

![Sợi xích ảo tử huyệt](/images/blog/inline_ponzi_2.png)

### 3. Vòng Xoáy Cuồng Nộ của "Hoa Hồng Giới Thiệu"
Dự án Ponzi không sống bằng lợi nhuận kinh doanh, nó SỐNG bằng dòng máu của nạn nhân mới. Dấu hiệu chắc chắn 100% của Ponzi là việc tung ra "Chính sách đại lý" cực kỳ khủng khiếp:
- *Mời được 1 F1 tham gia: Thưởng nóng 10% hoa hồng trực tiếp trên số tiền họ nạp.*
- *Mở rộng được hệ thống F2, F3: Nuôi hoa hồng thụ động lên tới 5 tầng.*

Đây là cách chúng "Ngáo đá hóa" người tham gia, biến chính nạn nhân trở thành những tú bà đi mồi chài người thân, họ hàng, đồng nghiệp để lấp liếm sự thâm hụt của dự án. 

### 💭 Expert View (Góc nhìn chuyên gia)
> *“Điều đau lòng nhất của Ponzi 2026 không phải là nạn nhân thiếu hiểu biết. Thống kê cho thấy rất nhiều người tham gia hoàn toàn BIẾT RÕ dự án này là lừa đảo. Nhưng họ mang tâm lý con bạc: **'Dự án mới chạy, mình nạp lớn lấy lãi 2 tháng rồi rút gốc chạy luôn, thằng vào sau chết mặc xác nó'**. Sự khôn lỏi này mới là vết rớt chí mạng, vì những kẻ tạo ra App luôn bấm nút sập hệ thống CHỈ đúng 1 ngày trước khi bạn định bấm nút rút tiền.”*

![Bẫy chuột thanh khoản sập xuống](/images/blog/inline_ponzi_3.png)

### Lời Khuyên Cốt Lõi: Kháng thể chống Lừa đảo năm 2026
Hãy xăm trong đầu câu thần chú tàn nhẫn nhất của giới tư bản cổ cồn trắng: 

**"Nếu có một cỗ máy in tiền chắc chắn tạo ra lợi nhuận 1%/ngày, chủ dự án sẽ tự ném sổ đỏ của đại gia đình họ ra ngân hàng vay để âm thầm húp trọn, chứ KHÔNG BAO GIỜ tốn chi phí đi thuê hội trường hay chạy quảng cáo mướt mồ hôi để mời bạn hưởng chung số tiền đó!"**

---
**Một Số Câu Hỏi Thường Gặp (FAQs)**

**1. Làm sao để tôi báo cáo khi nghi ngờ một dự án là Ponzi?**  
Tuyệt đối không tham gia và gửi hồ sơ trực tiếp tới "Cổng thông tin tiếp nhận tin báo lừa đảo mạng" của Bộ Công An.

**2. Tiền điện tử (Crypto) có phải là trò Ponzi không?**  
Crypto bản chất là Công nghệ Blockchain. Nhưng hiện nay có tới 80% các đồng coin cỏ (Memecoin, Shitcoin đa cấp) mượn danh công nghệ để làm ICO rút ruột nhà đầu tư. Chỉ nên tập trung vào Vốn Hóa Lớn (Bitcoin, ETH) thay vì làm giàu qua đêm.

**3. Tại sao sàn vẫn cho rút thử 1 triệu đồng rất nhanh?**  
Đó là bẫy. Ngay khi bạn nạp 500 triệu, lệnh rút sẽ lập tức bị bảo trì vô thời hạn với lý do "Nâng cấp hệ thống AI".
"""
    payload2 = {"content": content2, "featured_image": "/images/blog/featured_ponzi.png"}
    update_req2 = urllib.request.Request(f"{url}/rest/v1/posts?id=eq.{post_id}", data=json.dumps(payload2).encode("utf-8"), method="PATCH", headers=headers)
    res2 = json.loads(urllib.request.urlopen(update_req2, context=ctx).read().decode('utf-8'))
    print("Article 2 patched:", res2[0]['title'])
