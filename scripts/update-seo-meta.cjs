const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// Format: id, title (SEO-optimized with keyword), excerpt (meta description ~160 chars with keyword)
const seoUpdates = [
    {
        id: 'e5a65a58-9fc7-4cc7-a14e-a0a1e9ccd033',
        slug: 'dau-tu-chung-khoan-cho-nguoi-moi',
        title: 'Đầu Tư Chứng Khoán Cho Người Mới Bắt Đầu 2026 — Hướng Dẫn Từ A-Z',
        excerpt: 'Hướng dẫn đầu tư chứng khoán cho người mới từ A-Z: cách mở tài khoản, chọn cổ phiếu, chiến lược DCA và quản lý rủi ro hiệu quả năm 2026.'
    },
    {
        id: '1e235983-33d7-4db2-869d-2a3364b7334b',
        slug: 'dau-tu-bitcoin-crypto-cho-nguoi-moi',
        title: 'Đầu Tư Bitcoin Crypto Cho Người Mới 2026 — Hướng Dẫn Chi Tiết',
        excerpt: 'Hướng dẫn đầu tư Bitcoin và Crypto cho người mới bắt đầu: cách mua BTC, chọn sàn uy tín, quản lý rủi ro và chiến lược DCA hiệu quả.'
    },
    {
        id: 'a58b0c08-957e-4543-aaea-4d227323984b',
        slug: 'so-sanh-kenh-dau-tu-pho-bien',
        title: 'So Sánh Kênh Đầu Tư Phổ Biến 2026: Chứng Khoán, Vàng, Crypto, BĐS',
        excerpt: 'So sánh chi tiết các kênh đầu tư phổ biến nhất 2026: chứng khoán, vàng, crypto, bất động sản và tiết kiệm. Kênh nào phù hợp với bạn?'
    },
    {
        id: '5f7bf1ba-1184-4c66-afd0-a107bd3e93dc',
        slug: 'phan-tich-ky-thuat-chung-khoan',
        title: 'Phân Tích Kỹ Thuật Chứng Khoán Cho Người Mới 2026 — Hướng Dẫn Đầy Đủ',
        excerpt: 'Học phân tích kỹ thuật chứng khoán từ cơ bản đến nâng cao: đọc nến Nhật, chỉ báo RSI, MACD, MA và cách áp dụng vào giao dịch thực tế.'
    },
    {
        id: '959bfde0-9c08-40ea-a731-2bd45bf3bdbf',
        slug: 'chien-luoc-dca-binh-quan-gia',
        title: 'Chiến Lược DCA Bình Quân Giá — Cách Đầu Tư An Toàn Nhất Cho Người Mới',
        excerpt: 'Chiến lược DCA (bình quân giá) là gì? Cách áp dụng DCA vào chứng khoán, crypto, vàng để giảm rủi ro và tối ưu lợi nhuận dài hạn.'
    },
    {
        id: '10828612-3535-47bf-b7c5-bcc5035e6838',
        slug: 'rui-ro-dau-tu-crypto-cach-phong-tranh',
        title: 'Rủi Ro Đầu Tư Crypto Và Cách Phòng Tránh 2026 — Hướng Dẫn Chi Tiết',
        excerpt: 'Phân tích 6 rủi ro đầu tư crypto phổ biến nhất: biến động giá, lừa đảo rug pull, hack bảo mật. Kèm cách phòng tránh hiệu quả cho 2026.'
    },
    {
        id: '3fce249e-648c-411c-ab69-a77af0dc9941',
        slug: 'xu-huong-gia-vang-chien-luoc-dau-tu',
        title: 'Xu Hướng Giá Vàng 2026 Và Chiến Lược Đầu Tư Vàng Hiệu Quả',
        excerpt: 'Phân tích xu hướng giá vàng 2026: dự báo chuyên gia, 3 yếu tố tác động chính và chiến lược đầu tư vàng thông minh nhất cho nhà đầu tư.'
    },
    {
        id: '77b9f910-6a34-43e6-805e-eb18c154ca9c',
        slug: 'xay-dung-danh-muc-dau-tu-da-dang-hoa',
        title: 'Xây Dựng Danh Mục Đầu Tư Đa Dạng Hóa 2026 — Nguyên Tắc Và Mẫu Thực Tế',
        excerpt: 'Hướng dẫn xây dựng danh mục đầu tư đa dạng hóa: 3 mẫu danh mục theo mức rủi ro, cách rebalance và nguyên tắc phân bổ tài sản hiệu quả.'
    },
    {
        id: '8fdd1f37-6eab-4523-ab81-4f93cc6b9f45',
        slug: 'dau-tu-bat-dong-san-2026-uu-nhuoc-diem',
        title: 'Đầu Tư Bất Động Sản 2026: Ưu Nhược Điểm Và Phân Khúc Tiềm Năng',
        excerpt: 'Đầu tư bất động sản 2026 có nên không? Phân tích ưu nhược điểm, phân khúc tiềm năng và chiến lược đầu tư BĐS hiệu quả cho nhà đầu tư.'
    },
    {
        id: '68b15397-13e5-4d82-b0b2-d0d7a27e3bb2',
        slug: 'nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh',
        title: 'Nên Đầu Tư Gì Năm 2026? So Sánh Các Kênh Đầu Tư Tốt Nhất',
        excerpt: 'Nên đầu tư gì năm 2026? So sánh chi tiết chứng khoán, vàng, crypto, bất động sản. Kèm danh mục gợi ý theo độ tuổi và mức vốn cụ thể.'
    },
    {
        id: '291008eb-9ebe-4dc4-9df2-75e439a26f7b',
        slug: 'lai-kep-la-gi-suc-manh-lai-kep-dau-tu',
        title: 'Lãi Kép Là Gì? Sức Mạnh Lãi Kép Trong Đầu Tư — Ví Dụ Thực Tế',
        excerpt: 'Lãi kép là gì và tại sao Einstein gọi nó là kỳ quan thứ 8? Giải thích sức mạnh lãi kép kèm ví dụ thực tế và quy tắc 72 dễ hiểu.'
    },
    {
        id: '13a3ea2c-5e00-4dd2-83e6-b2e35a41420b',
        slug: 'quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan',
        title: 'Quy Tắc 50/30/20 Quản Lý Tài Chính Cá Nhân — Hướng Dẫn Áp Dụng',
        excerpt: 'Quy tắc 50/30/20 quản lý tài chính cá nhân: cách chia thu nhập thành 3 phần hợp lý để tiết kiệm, đầu tư và tận hưởng cuộc sống.'
    },
    {
        id: '34dd0ffd-6e1d-4a34-9050-4b64200b7b2a',
        slug: '10-sai-lam-pho-bien-khi-dau-tu-cach-tranh',
        title: '10 Sai Lầm Phổ Biến Khi Đầu Tư Và Cách Tránh — Bài Học Xương Máu',
        excerpt: '10 sai lầm phổ biến khiến nhà đầu tư mới mất tiền: FOMO, thiếu quỹ khẩn cấp, bán hoảng loạn. Kèm cách tránh cụ thể cho từng sai lầm.'
    },
    {
        id: '4e6ac273-a1c7-4a6b-8bc9-0bb0a0ae3def',
        slug: 'cach-dau-tu-chung-khoan-nguoi-moi-2026',
        title: 'Cách Đầu Tư Chứng Khoán Cho Người Mới 2026 — Từ Mở TK Đến Chiến Lược',
        excerpt: 'Cách đầu tư chứng khoán cho người mới 2026: hướng dẫn từ mở tài khoản, chọn cổ phiếu, phân tích cơ bản đến xây dựng chiến lược DCA.'
    },
    {
        id: '4b99b279-d12b-4c2f-b99e-2e3dcf970aa1',
        slug: 'so-sanh-gui-tiet-kiem-vs-dau-tu-2026',
        title: 'So Sánh Gửi Tiết Kiệm vs Đầu Tư 2026: Khi Nào Nên Tiết Kiệm, Khi Nào Nên Đầu Tư?',
        excerpt: 'So sánh gửi tiết kiệm và đầu tư: bảng tính lợi nhuận thực tế sau 10 năm. Khi nào nên gửi tiết kiệm, khi nào nên chuyển sang đầu tư?'
    },
    {
        id: 'f63b6267-3b83-4cc6-9a0e-2d4318abb4a3',
        slug: 'top-5-sai-lam-dau-tu-chung-khoan',
        title: 'Top 5 Sai Lầm Đầu Tư Chứng Khoán Phổ Biến Nhất — Bài Học Từ Thực Tế',
        excerpt: 'Top 5 sai lầm đầu tư chứng khoán khiến 80% nhà đầu tư thua lỗ: tin nội bộ, margin quá tay, không cắt lỗ. Kèm giải pháp cụ thể.'
    },
    {
        id: 'ed96aba8-1c77-4eb1-9fa1-fa0b450497d8',
        slug: 'dau-tu-la-gi-huong-dan-toan-dien',
        title: 'Đầu Tư Là Gì? Hướng Dẫn Toàn Diện Cho Người Mới Bắt Đầu 2026',
        excerpt: 'Đầu tư là gì? Hướng dẫn toàn diện cho người mới: 5 kênh đầu tư phổ biến, 5 nguyên tắc cơ bản và cách bắt đầu với vốn nhỏ từ 2 triệu.'
    },
    {
        id: 'f5ef1cc5-3cc7-46e1-ac4e-7278a67402a8',
        slug: 'dau-tu-vang-kenh-tru-an-an-toan',
        title: 'Đầu Tư Vàng — Kênh Trú Ẩn An Toàn 2026: Hướng Dẫn Mua Vàng Hiệu Quả',
        excerpt: 'Hướng dẫn đầu tư vàng cho người mới: so sánh vàng nhẫn vs SJC, chiến lược mua vàng DCA và vai trò của vàng trong danh mục đầu tư 2026.'
    },
    {
        id: '10bf90f3-51a8-4d91-86a3-dd9ff8aff5e0',
        slug: 'top-10-kenh-dau-tu-pho-bien-viet-nam-2026',
        title: 'Top 10 Kênh Đầu Tư Phổ Biến Việt Nam 2026 — Xếp Hạng Và So Sánh',
        excerpt: 'Top 10 kênh đầu tư phổ biến nhất Việt Nam 2026: xếp hạng theo lợi nhuận, rủi ro và vốn tối thiểu. ETF, vàng, crypto, BĐS và nhiều hơn.'
    }
];

async function updateSEO() {
    console.log('🔍 Cập nhật SEO metadata (title, excerpt) cho 19 bài...\n');

    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com', password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Auth:', authError.message); return; }

    let success = 0;
    for (const u of seoUpdates) {
        // Verify excerpt length
        const len = u.excerpt.length;
        const status = len > 170 ? '⚠️ LONG' : len < 120 ? '⚠️ SHORT' : '✅';

        const { error } = await supabase
            .from('posts')
            .update({ title: u.title, excerpt: u.excerpt })
            .eq('id', u.id);

        if (error) {
            console.log(`❌ ${u.slug}: ${error.message}`);
        } else {
            console.log(`${status} ${u.slug} (title: ${u.title.length}ch, desc: ${len}ch)`);
            success++;
        }
    }
    console.log(`\n🎉 Updated ${success}/19 posts SEO metadata!`);
}

updateSEO();
