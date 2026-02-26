import { supabase } from './utils/db.mjs';

const missingCategories = [
    { name: "Khởi nghiệp", slug: "khoi-nghiep", description: "Kiến thức về khởi nghiệp và đầu tư startup", icon: "🚀" },
    { name: "Trái phiếu", slug: "trai-phieu", description: "Tìm hiểu về đầu tư trái phiếu an toàn", icon: "📈" },
    { name: "Quỹ đầu tư", slug: "quy-dau-tu", description: "Đầu tư thông qua các quỹ mở, ETF", icon: "🏦" },
    { name: "Đầu tư thay thế", slug: "dau-tu-thay-the", description: "NFT, nghệ thuật, vang và các tài sản khác", icon: "💎" }
];

const missingPosts = [
    { cat: "khoi-nghiep", slug: "danh-gia-startup-truoc-dau-tu", title: "Cách đánh giá startup trước khi đầu tư", excerpt: "Các tiêu chí đánh giá tiềm năng startup.", content: "Đầu tư startup rủi ro cao nhưng có thể sinh lời lớn. Bài viết hướng dẫn đánh giá team, sản phẩm, thị trường và mô hình kinh doanh.", reading_time: "9 phút" },
    { cat: "khoi-nghiep", slug: "angel-investing-la-gi", title: "Angel Investing: Đầu tư vào startup giai đoạn sớm", excerpt: "Tìm hiểu về đầu tư thiên thần và cơ hội.", content: "Angel investor là những người đầu tư vốn vào startup ở giai đoạn sớm. Bài viết giới thiệu cách tiếp cận và đánh giá cơ hội đầu tư startup.", reading_time: "10 phút" },
    { cat: "khoi-nghiep", slug: "crowdfunding-goi-von-cong-dong", title: "Crowdfunding: Gọi vốn cộng đồng", excerpt: "Các nền tảng crowdfunding và cơ hội đầu tư.", content: "Crowdfunding cho phép nhiều người đầu tư số tiền nhỏ vào dự án hoặc startup. Bài viết giới thiệu các nền tảng và cách đánh giá dự án.", reading_time: "8 phút" },
    { cat: "khoi-nghiep", slug: "esop-co-phieu-nhan-vien", title: "ESOP: Cổ phiếu ưu đãi cho nhân viên", excerpt: "Hiểu về Employee Stock Option Plan.", content: "ESOP là chương trình cho nhân viên mua cổ phiếu công ty với giá ưu đãi. Đây là cơ hội làm giàu nếu công ty phát triển tốt.", reading_time: "7 phút" },
    { cat: "khoi-nghiep", slug: "rui-ro-dau-tu-startup", title: "Rủi ro khi đầu tư vào startup", excerpt: "Những rủi ro thường gặp và cách giảm thiểu.", content: "Hầu hết startup thất bại, nên đầu tư startup cần đa dạng hóa và chấp nhận mất vốn. Bài viết phân tích các rủi ro chính.", reading_time: "8 phút" },
    { cat: "trai-phieu", slug: "trai-phieu-la-gi-huong-dan", title: "Trái phiếu là gì? Hướng dẫn cho người mới", excerpt: "Tìm hiểu về trái phiếu và cách đầu tư.", content: "Trái phiếu là công cụ nợ cho phép nhà đầu tư cho vay tiền và nhận lãi định kỳ. Đây là kênh đầu tư an toàn hơn cổ phiếu.", reading_time: "8 phút" },
    { cat: "tai-chinh-ca-nhan", slug: "thoi-quen-tai-chinh", title: "Thói quen tài chính tốt cần rèn luyện", excerpt: "Những thói quen giúp cải thiện sức khỏe tài chính.", content: "Theo dõi chi tiêu, tự động hóa tiết kiệm, tránh nợ xấu là những thói quen quan trọng giúp xây dựng nền tảng tài chính vững chắc.", reading_time: "8 phút" }
];

async function restore() {
    console.log('🚀 Đang khôi phục danh mục thiếu...');
    for (const cat of missingCategories) {
        const { data, error } = await supabase
            .from('categories')
            .upsert({ name: cat.name, slug: cat.slug, description: cat.description, icon: cat.icon }, { onConflict: 'slug' })
            .select();

        if (error) console.error(`  ❌ Lỗi tạo danh mục ${cat.slug}:`, error.message);
        else console.log(`  ✅ Đã tạo/cập nhật danh mục: ${cat.slug}`);
    }

    // Get all categories to map IDs
    const { data: categories } = await supabase.from('categories').select('id, slug');
    const catMap = new Map(categories?.map(c => [c.slug, c.id]) || []);

    console.log('\n📝 Đang tạo bài viết thiếu...');
    for (const post of missingPosts) {
        const categoryId = catMap.get(post.cat);
        if (!categoryId) {
            console.log(`  ⚠️ Không tìm thấy category: ${post.cat}`);
            continue;
        }

        const { error } = await supabase.from('posts').upsert({
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            category_id: categoryId,
            reading_time: post.reading_time,
            is_published: true
        }, { onConflict: 'slug' });

        if (error) console.error(`  ❌ Lỗi tạo bài viết ${post.slug}:`, error.message);
        else console.log(`  ✅ Đã khôi phục bài viết: ${post.slug}`);
    }

    console.log('\n🎉 Hoàn tất khôi phục!');
}

restore().catch(console.error);
