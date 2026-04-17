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

# Data cho 3 bài viết
updates = [
    {
        "id": "54a1bcfd-e453-4139-88d0-9b5a47946410", # FIRE
        "featured_image": "/images/blog/inline_vang_2.png",
        "content": """👉 **TÓM TẮT NHANH (TL;DR):** 
FIRE (Financial Independence, Retire Early) nghĩa là Độc lập tài chính, Nghỉ hưu sớm. Không phải là ngừng làm việc ở tuổi 35 và đi câu cá, FIRE là có đủ tự do tài chính để LÀM NHỮNG GÌ MÌNH THÍCH mà không sợ chết đói. Tuy nhiên, quy tắc 4% kinh điển của Mỹ khi đem về Việt Nam (lạm phát thực tế cao) thường xuyên đổ vỡ, khiến nhiều thanh niên "vỡ mộng" phải đi xin việc lại.

---

Giới trẻ Việt Nam năm 2026 đang hừng hực khí thế bàn luận về khái niệm "Nghỉ hưu sớm". Thật tuyệt vời nếu bạn chỉ mới 35 tuổi nhưng không cần phải nhìn sắc mặt sếp mỗi tháng, không phải kẹt xe 2 tiếng mỗi sáng và có thể xách balo lên đi Đà Lạt bất cứ khi nào.

Nhưng sự lãng mạn đó đã vùi dập biết bao nhiêu người ngộ nhận về khái niệm FIRE. Bài viết này sẽ vạch trần bản chất thực sự của lối sống FIRE và điều chỉnh lại các công thức tính toán sao cho phù hợp nhất với tỷ giá và kinh tế Việt Nam.

![Tự hào vì được nghỉ hưu sớm hay chỉ là một ảo tưởng trốn chạy công việc?](/images/blog/inline_vang_2.png)

## 1. Bản Chất của FIRE: Cú tát vào sự lười biếng
Rất nhiều người nhầm tưởng FIRE là phong trào cổ xúy cho sự lười biếng. Họ chán ghét công việc hiện tại, ghét sếp, ghét văn phòng... và họ lấy FIRE làm cái cớ để "bỏ phố về quê" trồng rau thả cá.

Bản chất của FIRE chưa bao giờ là "Ngừng làm việc". Nó mang ý nghĩa **Độc Lập (Independence)**. Khi bạn đạt FIRE, bạn hoàn toàn có thể tiếp tục đi làm, nhưng bạn làm vì đam mê cống hiến, chứ không phải vì sợ thiếu tiền đóng tiền điện tháng sau.

### Công thức "Quy tắc 4%" kinh điển
Quy tắc 4% (Xuất phát từ nghiên cứu Trinity) nói rằng: Bạn cần tích lũy một số tiền lớn gấp **25 lần chi phí sinh hoạt một năm** của bạn. 
Nếu gia đình bạn một năm xài 500 triệu. Bạn cần 500 x 25 = 12.5 Tỷ đồng. Bạn đem 12.5 tỷ này đi đầu tư, thu về lãi suất 5-7%, mỗi năm rút ra đúng 4% (500 triệu) để tiêu xài. Tiền vốn sẽ KHÔNG BAO GIỜ CẠN trong suốt 30 năm sau đó do lãi mẹ đẻ lãi con đủ sức bù lạm phát.

---

## 2. Thảm Họa Khi Áp Dụng Rập Khuôn 4% Tại Việt Nam
Mọi lý thuyết phương Tây đều sụp đổ nếu bạn áp dụng mù quáng tại thị trường Việt Nam.

| Yếu tố rủi ro | Mỹ / Châu Âu | Thực trạng tại Việt Nam | Hậu quả cho dân FIRE |
| :--- | :--- | :--- | :--- |
| **Lạm phát hàng năm** | 2% - 3% | Thực tế (giá nhu yếu phẩm) tăng 6% - 10%/năm | Số tiền rút ra bị thâm hụt sức mua nghiêm trọng sau 5 năm |
| **Bảo hiểm y tế** | Có hệ thống an sinh / Trợ cấp mạnh | Phải tự chi trả toàn phần nếu mắc bạo bệnh | Một lần nhập viện có thể nướng sạch 1/3 quỹ FIRE |
| **Gửi tiết kiệm** | Không đáng kể | Lãi 5-6% (Đã bị lạm phát ăn mòn) | Quỹ không thể tăng trưởng thực dương |

### Giải pháp "Thực Chiến": Quy tắc 3% và Tạo Dòng Tiền Đều Đặn
Để FIRE an toàn tuyệt đối tại VN năm 2026, bạn nên nâng hạn mức tích lũy lên **33 lần chi phí sinh hoạt (Tức tỷ lệ rút an toàn chỉ là 3%/năm)**.
Nghĩa là nếu cần 500 triệu/năm, bạn phải cày cuốc đạt mốc 16.5 Tỷ đồng. Tiền này không để hoàn toàn vào sổ tiết kiệm, mà phải bỏ vào danh mục Cổ phiếu trả cổ tức cao (VNM, HPG), Trái phiếu Doanh nghiệp an toàn, hoặc cho thuê Nhà/Chung cư để tiền liên tục xoay vòng sinh ra dòng chảy (Cashflow).

---

## 3. Sai Lầm Rợn Người Của Thế Hệ "Bỏ Phố Về Quê" (E-E-A-T)
*(Câu chuyện thực tế)*
Một cặp vợ chồng trẻ rút 2 tỷ tiền chung cư từ Sài Gòn, tính chuyện về Đăk Lăk mua khu vườn nhỏ theo tiếng gọi FIRE. 2 tỷ rải rác mua đất 1.5 tỷ, 500 triệu còn lại để "bón cây sống qua ngày". Chỉ 2 năm sau, vợ mang thai, đứa trẻ đau ốm liên tục, chi phí y tế và sữa bỉm dội lên gấp 5 lần so với tính toán. Ở quê không có siêu thị xịn, việc học hành thiếu thốn... Hai vợ chồng phải lao đao bán tháo miếng đất (lúc đó đang đóng băng) để quay lại thành phố tìm việc.

Tuyệt đối đừng nhầm lẫn giữa **Túng quẫn tàng hình** với **Độc lập tài chính**. Đừng đánh cược tương lai nếu quỹ khẩn cấp của bạn chưa đủ 1 năm tiền lương.

---

## 4. Những Câu Hỏi Thường Gặp (FAQs)
**Q: Tôi có thu nhập 15 triệu/tháng thì bao giờ mới FIRE được?**
*A: Câu trả lời đau lòng là Rất Lâu (hoặc Không Thể). Ở mốc thu nhập này, bạn không nên tập trung vào Tiết kiệm hèn mọn, mà phải dồn sức Đầu tư vào Kỹ năng (Học lập trình, tiếng Anh, Bán hàng) để nâng thu nhập lên 40-50 triệu/tháng trước đã.*

**Q: Đang vay mua nhà trả góp có FIRE được không?**
*A: Hoàn toàn không. Vay tiêu dùng và nợ lãi suất kép là kẻ thù số một của FIRE. Chỉ tính chuyện FIRE khi bạn hoàn toàn Sạch Nợ.*

**Tóm lại:** Khái niệm FIRE tại VN cần sự chuẩn bị khắc nghiệt và một cái đầu lạnh như băng. Hãy đặt ra những cột mốc dẹp bỏ nợ nần trước khi ảo mộng đi nhâm nhi cà phê trên Đà Lạt ở tuổi 35!"""
    },
    {
        "id": "a791e778-bade-46e0-bef1-7a2d9b27c521", # Lừa đảo đa cấp
        "featured_image": "/images/blog/inline_cophieu_3.png",
        "content": """👉 **TÓM TẮT NHANH (TL;DR):** 
Chỉ cần bạn nghe thấy ba chữ "Lãi suất cam kết" từ 10% - 20%/tháng thì xin chúc mừng, bạn đang nói chuyện với dự án lừa đảo đa cấp 100%. Không một siêu quỹ đầu tư phố Wall nào tự tin cam kết lợi nhuận cứng với mức siêu nhiên như vậy. Bạn đang bị "lùa gà" bằng các app đầu tư Forex, Coin ảo tự xưng là áp dụng công nghệ "Trí tuệ nhân tạo múc đáy bán đỉnh". Rút tiền ngay lập tức trước khi hệ thống sập!

---

Sự bùng nổ của thị trường Crypto (Tiền mã hóa) và Giao dịch ngoại hối (Forex) đã tạo ra một khoảng trống màu mỡ cho các băng nhóm lừa đảo xuyên biên giới hoạt động. Nạn nhân năm 2026 không chỉ còn là các bà nội trợ nhẹ dạ, mà gồm cả dân văn phòng trí thức, vì các app lừa đảo hiện tại được thiết kế quá tinh vi, mượt mà và sở hữu lý thuyết "công nghệ" quá phức tạp khiến ai cũng tin sái cổ.

Làm thế nào để không trở thành con thiêu thân cúng tiền cho tụi đa cấp tài chính? Dưới đây là biên bản "Nhận định pháp y" giúp bạn phơi bày ánh sáng bộ mặt thật của chúng.

![Lừa đảo tài chính qua mạng đang bào mòn tài sản của người Việt](/images/blog/inline_cophieu_3.png)

## 1. Bản Chất của App Lừa Đảo: Tại Sao Chơi Vài Lần Đầu Vẫn Thắng Lớn?
Hầu hết nạn nhân đều có tâm lý: "Mình tải App về chơi thử 5 triệu, tự nhiên 1 ngày sau lên 6 triệu, mình rút về thẻ Vietcombank trong 5 phút. App uy tín thế này lừa đảo làm sao được?".

Đây chính là **Kỹ thuật Mồi nhử (Bait-and-Switch)** kinh điển. App được code ra để cố tình cho bạn **Thắng và Rút mượt mà trong 1 - 2 tuần đầu**. Tâm lý con người luôn tham lam và mắc hội chứng "Chắc cú". Khi bạn đã rút được gốc lẫn lãi 6 triệu, bạn hoàn toàn bị mất cảnh giác, mờ mắt vay tín chấp, mượn sổ đỏ của bố mẹ đập vào 500 triệu với hy vọng "Nhân đôi tài khoản trong 1 tháng".
Và BAMMM! Khi bạn đập lệnh 500 triệu, tài khoản của bạn bỗng nhiên bị khóa với hàng tá lý do ngụy biện: "Nghi ngờ rửa tiền", "Cần đóng 20% phí xác minh VIP để rút"... Đến lúc này bạn mới nhận ra mọi thứ chỉ là dối trá. 

---

## 2. Sự Kết Hợp Quái Dị: Công Nghệ Cao + Mô Hình Đa Cấp
Các băng nhóm lừa đảo hiểu rằng nếu chỉ đứng kêu gọi hò hét nộp tiền thì quá rẻ rách. Chúng bọc một lớp vỏ cực xịn sò bằng ngôn ngữ của năm 2026:

### Dấu hiệu 1: Lập lờ Đánh Lận Con Đen về Sản phẩm
*   Chúng không có các đồng Coin công khai trên sàn Binance uy tín, mà bắt bạn lên nền tảng riêng của chúng nạp USDT (Tiền đô điện tử) để mua "Gói tín dụng đào coin", "Robot trí thông minh nhân tạo trade Forex". 
*   **Sự thật:** Không hề có con Robot AI nào đang lấy tiền của bạn đi trade giao dịch. Tiền của bạn chuyển thẳng vào ví cá nhân của chủ sàn. Các con số sinh lời nhảy đỏ xanh mỗi ngày trên app của bạn chỉ là **Code chỉnh sửa giao diện HTML** – Nó là tiền âm phủ!

| Dấu hiệu | Sàn / Quỹ Ủy Thác Chuẩn | Dự Án Lừa Đảo |
| :--- | :--- | :--- |
| **Biến động Lãi** | Phập phù, có ngày ÂM ngày Dương | Dương liên tục không hề có ngày lỗ |
| **Cam kết** | Phân tích rõ rủi ro, Miễn trừ trách nhiệm | "Bảo hiểm vốn 100%, Thua có sảnh đền bù" |
| **Sản phẩm** | Giao dịch chứng chỉ số liệu thật, minh bạch | Chỉ có các "Gói đầu tư" ảo ma |

### Dấu hiệu 2: Chính sách Hoa Hồng Hình Kim Tự Tháp
Dấu hiệu tối thượng! Bất kỳ khi nào một ứng dụng đầu tư thưởng cho bạn số tiền cố định (hoặc theo %) chỉ vì bạn mời thành công người khác (F1, F2 sâu tới hàng chục tầng) nộp tiền vào hệ thống -> CHẠY NGAY ĐI!
Thị trường Forex và Crypto thực thụ (Như Binance, Exness) chỉ trả hoa hồng dựa trên **Phí Giao Dịch** (Vài cent bạc lẻ), chứ không bao giờ có chuyện trích 10% - 20% tiền nạp của người khác tặng bạn!

---

## 3. Mánh Khóe Tâm Lý Tội Phạm "Nuôi Nhốt Gà" (Case Study)
Một chuyên gia AI đã từng bóc trần đường dây App Forex "WinBank 4.0". Chúng lập hẳn một chuỗi Group Telegram 1000 người. Trong nhóm đó, *900 tài khoản là Clone chim mồi do chúng tự lập ra dùng tool tự nhắn tin chém gió hằng ngày*.

Khi "Chuyên gia" (Kẻ lừa đảo) đưa lệnh yêu cầu đánh lên hay đánh xuống, 900 con bot đồng loạt tung ảnh chụp màn hình "Lãi vài ngàn USD", "Cám ơn chuyên gia, đổi đời rồi". 100 con nai vàng ngơ ngác (người dùng thật) nhìn thấy vậy liền bị thôi miên bởi Hội chứng đám đông, hì hục bán nhà lấy tiền đánh theo. Rút cục, mẻ lưới quét, "Chuyên gia" bảo thị trường biến động, cháy sạch tài khoản toàn bộ. Toàn khu phố đều gào thét nhưng không thể kiện được ai vì lệnh do chính tay mình bấm!

---

## 4. Những Câu Hỏi Thường Gặp (FAQs)
**Q: App có giấy phép kinh doanh ở Singapore và Anh Quốc, vậy có an toàn không?**
*A: KHÔNG! Mua một pháp nhân công ty bù nhìn ở Anh hay các đảo quốc như Virgin Islands chỉ tốn 500 USD qua dịch vụ mạng. Giấy phép này không có giá trị bảo vệ bạn khi bạn ở Việt Nam.*

**Q: Tôi đã trót nạp 100 triệu và app báo tài khoản rủi ro, yêu cầu nạp thêm 20 triệu thuế thu nhập cá nhân để giải ngân. Tôi có nên nạp?**
*A: Tuyệt đối dừng lại ngay! Đây là kịch bản "Bào sinh lực lần cuối" của lừa đảo. Bạn hãy xác định mất trắng 100 triệu, nạp thêm 20 triệu cũng bốc hơi hết chứ không bao giờ lấy ra được 1 cắc bông. Nộp đơn tố cáo lên PC02 cơ quan Công An ngay lập tức!*

**Tóm lại:** Lòng tham không kìm hãm chính là miếng mồi ngon nhất của lừa đảo. Hãy cất não vào vùng an toàn, bất cứ cứ kèo rủ rê nào "đảm bảo có lãi to" đều nhắm tới cái ví gầy gò của bạn mà thôi!"""
    },
    {
        "id": "725f0d28-b6cc-4305-8755-1352dc0c31f5", # Chung cư trả góp
        "featured_image": "/images/blog/featured_bds_1.png",
        "content": """👉 **TÓM TẮT NHANH (TL;DR):** 
Có 1 tỷ trong tay năm 2026: Nếu mục đích của bạn là KÊ CAO GỐI NGỦ TẬN HƯỞNG cuộc sống, hãy dùng đòn bẩy vay trả góp mua chung cư để thoát cảnh ở thuê. Tuy nhiên, nếu khát vọng của bạn là BIẾN 1 TỶ THÀNH 3 TỶ sau 5 năm (Đầu cơ siêu lợi nhuận), ôm đất nền ở tỉnh (đã có sổ đỏ phân lô cắm cọc, kiểm tra quy hoạch chặt chẽ) là cánh cửa sinh lời rực rỡ nhất vượt xa việc mua chung cư chung cồn chờ nhích giá từng đồng.

---

Giữa làn sóng đô thị hóa cuồn cuộn và mặt bằng lãi suất đang ở chu kỳ tái cân bằng, cầm 1 tỷ đồng tiền tiết kiệm trong tay thường gây ra hai luồng tâm lý dữ dội: Một bên mong muốn an cư lạc nghiệp ngay lập tức (mua căn hộ trả góp), một bên muốn nhân x3 tài sản với giấc mơ đổi đời (ôm đất nền vùng tỉnh mạo hiểm).

Bài toán này luôn là một cuộc giằng co không lối thoát. Dưới đây là màn phân tích toàn diện, bóc tách dòng chảy đồng vốn để giúp bạn thả trứng vào đúng cái rổ vững chãi nhất.

![Bất động sản Đô thị tích lũy An cư vs Canh bạc lợi nhuận tại đất Tỉnh](/images/blog/featured_bds_1.png)

## 1. Mua Chung cư Trả góp: Đầu tư Tiêu Dưỡng hay Đầu cơ Tích Vốn?
Hãy thẳng thắn với nhau: Mua chung cư cơ bản là **tiêu sản** trong mắt dân buôn bất động sản chuyên nghiệp (Vì nó sẽ mất dần giá trị của bê tông cốt thép sau 10-15 năm). 

Với 1 tỷ đồng, bạn không thể mua đứt chung cư nội thành 3.5 tỷ. Bạn buộc phải sử dụng **Đòn bẩy tài chính** (vay ngân hàng 2.5 tỷ trong 20 năm).

### Những gì bạn Được:
- Trải nghiệm ngay lập tức lối sống đẳng cấp (Gym, hồ bơi, an ninh 24/7). 
- Sự bình yên tâm trí để tập trung tâm lực phát triển công việc cốt lõi kiếm tiền. Không bị chủ trọ đuổi, tự chủ chốn đi về.
- Khả năng miễn nhiễm với lạm phát giá thuê nhà hằng năm (Giá thuê nhà TP.HCM và HN đang leo thang liên tục 15%/năm).

### Bản chất khốc liệt (Những gì bạn Mất):
- **Phố Áp lực Trả nợ:** Bạn vay 2.5 tỷ. Với mức lãi thả nổi 10.5%/năm hiện hành, mỗi tháng mở mắt ra bạn phải nộp cho ngân hàng cỡ **25 - 28 triệu VNĐ** tiền gốc + lãi. 
- Ngay khi công ty cắt giảm nhân sự dội xuống, hoặc có người ốm, dòng tiền gãy đổ, bạn buộc phải bán tháo chung cư dưới giá vốn để cẩu thả thoát thân trước khoản nợ xấu.

---

## 2. Ôm Đất Nền Tỉnh (Vùng Ven Dưới Tỉnh): Sân Chơi Của Sự Lì Lợm
Sức hấp dẫn của phân khúc Đất Nền chưa bao giờ tắt, bởi nó giải quyết một chân lý của kinh tế học hành vi: "Tiền kiếm được ở Đất". Với 1 tỷ, bạn hoàn toàn có thể mua đứt 1 lô 100m2 - 150m2 ngoại ô các tỉnh như Đồng Nai, Bình Phước, Lâm Đồng hoặc ven vùng công nghiệp Bắc Giang, Hưng Yên...

### Tỷ Suất Nghẹt Thở (Lợi Ích)
- Đất đai là loại phòng bị chống lạm phát hoàn mĩ. Lãi vốn biên (Capital Gain) kinh khủng. Lô đất 1 tỷ hôm nay vọt lên 2.5 tỷ vào 3 năm sau là chuyện vô cùng bình thường khi có tin xây cầu vượt hay KCN về quy hoạch.
- Bạn sở hữu 100% bằng nguồn tiền mặt (không có nợ bank hoặc nợ rất nhỏ), hoàn toàn triệt tiêu tâm lý kẹt lãi suất. Vứt quyền sổ đỏ vào két sắt và tiếp tục đi ở trọ thoải mái cày cuốc.

![Chiến lược quy hoạch và nắm bắt chu kì bất động sản đô thị vùng ven](/images/blog/inline_vang_4.png)

### Những lưỡi dao tử thần:
Không có mức lãi 200% nào mà không dính máu. Các cạm bẫy cực sâu:
1. **Thanh khoản Đóng Băng:** Mua được chung cư thì cực dễ bán vì "nhu cầu ở thực" là luôn có. Mua đất rẫy vùng tỉnh 1 tỷ, đến lúc cần tiền con cái ốm đau bán 800 triệu ròng rã 8 tháng trời không cò nào chịu mua! Đất tỉnh phụ thuộc khủng khiếp vào chu kỳ dòng tiền xã hội.
2. **Kẹt pháp lý:** 1 tỷ mua bị vướng giấy tờ lộn xộn, mua dính chung thửa, nằm trọn trong vùng giải tỏa 0 đồng cây xanh công cộng. Coi như trắng tay 100%.

| Tiêu Chí Quyết Định | Mua Chung Cư Trả Góp | Ôm Đất Vùng Tỉnh |
| :--- | :--- | :--- |
| **Mức độ Rủi Ro Vốn** | Thấp (Vì có Tòa Án/Ngân hàng hỗ trợ) | Cực cao (Dính lừa đảo đất ảo) |
| **Áp lực dòng tiền/tháng** | Đòi hỏi Siêu cao (Phải có lương ổn định >40tr) | Cực thấp (Mua tự do vứt đó) |
| **Hấp lực Lợi nhuận** | Chậm dần đều (Hoặc lỗ hao mòn) | Đột phá phi mã (Tăng bằng lần) |

---

## 3. Chuyên Gia Ra Lệnh: Đánh Thế Nào Cho Vừa Đẹp (E-E-A-T)
Sai lầm chí mạng nhất của NĐT cầm 1 tỷ là "All-in" (Tất tay) và ảo tưởng mình khôn ranh. Bài học thực tiễn: 
- Nếu lương tháng đều đặn trên 50 triệu và tự do khỏi các khoản chi gia đình: Bạn mới nên vay dài hạn mua Chung cư chung thân.
- Ngược lại, nếu tiền để dành chắt bóp vừa được 1 tỷ, mà lương tàng tàng 15tr, mua chung cư trả góp là tự thắt cổ chính mình. Hợp lý nhất là vứt 300 triệu vào gửi tiết kiệm Bank để ổn định sinh kế. Cầm 700 triệu cùng bạn bè lùng sục mua đứt sổ đỏ một miếng đất vùng ven sát tuyến cao tốc hoặc Cụm công nghiệp (Đã Check quy hoạch trên Uỷ Ban). Cho thuê lại nhà cấp 4 hoặc làm bãi xe, quên miếng đất đó đi trong 5 năm và chờ lợi nhuận sinh lộc gõ cửa!

---

## 4. Những Câu Hỏi Thường Gặp (FAQs)
**Q: Vay mua chung cư lãi suất ưu đãi năm đầu 6%, có nên lao vào?**
*A: Đây là mồi nhử của Banker! Hết 1 năm ưu đãi, biên độ thả nổi (Lãi suất tiết kiệm + Biên độ 3.5%) sẽ vọt lên 10%-11% đánh sập ngân sách của bạn tơi bời. Hãy lập bảng tính bài toán dòng tiền dựa trên lãi suất 11%, nếu chịu nổi thì mới ấn nút mua.*

**Q: Ở trọ bao lâu nữa, chứ thấy bạn bè ai cũng an cư lập nghiệp tôi sốt ruột quá?**
*A: Đừng để "Hội chứng Áp lực đồng trang lứa" phá vỡ kết cấu tài chính. Ở trọ giúp linh hoạt xoay chuyển vị trí ở gần chỗ làm, linh động giảm chi phí. Không có luật phát nào quy định 30 tuổi thì phải "mang nợ ngân hàng" để làm màu với xã hội cả.* 

Hãy luôn tâm tâm niệm niệm: Bạn mua tài sản để được phục vụ, chứ bạn không làm nô lệ đầm đìa mồ hôi 24/7 để nuôi tài sản đó!"""
    }
]

for update in updates:
    req = urllib.request.Request(f"{url}/rest/v1/posts?id=eq.{update['id']}", data=json.dumps(update).encode("utf-8"), method="PATCH")
    req.add_header("apikey", key)
    req.add_header("Authorization", f"Bearer {access_token}")
    req.add_header("Content-Type", "application/json")
    req.add_header("Prefer", "return=minimal")
    try:
        urllib.request.urlopen(req, context=ctx)
        print(f"✅ Đã Rewrite thành công Post ID: {update['id']}")
    except urllib.error.HTTPError as e:
        print(f"❌ Lỗi HTTP ở {update['id']}: {e.read().decode('utf-8')}")
    except Exception as e:
        print(f"❌ Lỗi {update['id']}: {e}")
