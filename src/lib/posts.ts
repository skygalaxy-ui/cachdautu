// Blog data and utilities
export interface Category {
    slug: string;
    name: string;
    description: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readingTime: string;
    tags: string[];
    featured?: boolean;
}

export const categories: Category[] = [
    { slug: "chung-khoan", name: "Chứng khoán", description: "Cổ phiếu, ETF, phân tích kỹ thuật & cơ bản" },
    { slug: "crypto", name: "Crypto", description: "Bitcoin, Ethereum, DeFi, staking" },
    { slug: "bat-dong-san", name: "Bất động sản", description: "Mua để cho thuê, REITs, đầu tư đất" },
    { slug: "vang", name: "Vàng", description: "Vàng vật chất, vàng tài khoản, bạc" },
    { slug: "forex", name: "Forex", description: "Giao dịch cặp tiền tệ, phân tích thị trường" },
    { slug: "trai-phieu", name: "Trái phiếu", description: "Trái phiếu chính phủ & doanh nghiệp" },
    { slug: "quy-dau-tu", name: "Quỹ đầu tư", description: "Quỹ mở, quỹ ETF, quỹ hưu trí" },
    { slug: "khoi-nghiep", name: "Khởi nghiệp", description: "Angel investing, crowdfunding, ESOP" },
    { slug: "dau-tu-thay-the", name: "Đầu tư thay thế", description: "Nghệ thuật, NFT, collectibles, rượu vang" },
    { slug: "tai-chinh-ca-nhan", name: "Tài chính cá nhân", description: "Tiết kiệm, ngân sách, quỹ khẩn cấp" },
];

export const blogPosts: BlogPost[] = [
    {
        slug: "huong-dan-doc-bao-cao-tai-chinh",
        title: "Hướng dẫn đọc báo cáo tài chính cho người mới bắt đầu",
        excerpt: "Học cách phân tích báo cáo tài chính để đánh giá sức khỏe doanh nghiệp trước khi đầu tư vào cổ phiếu.",
        category: "chung-khoan",
        date: "2026-02-01",
        readingTime: "8 phút",
        tags: ["phân tích cơ bản", "người mới"],
        featured: true,
    },
    {
        slug: "bitcoin-la-gi-huong-dan-cho-nguoi-moi",
        title: "Bitcoin là gì? Hướng dẫn toàn diện cho người mới bắt đầu",
        excerpt: "Tìm hiểu về Bitcoin, công nghệ blockchain và cách bắt đầu đầu tư crypto một cách an toàn.",
        category: "crypto",
        date: "2026-01-28",
        readingTime: "12 phút",
        tags: ["bitcoin", "người mới", "blockchain"],
        featured: true,
    },
    {
        slug: "5-cach-dau-tu-bat-dong-san-2026",
        title: "5 cách đầu tư bất động sản hiệu quả năm 2026",
        excerpt: "Khám phá các phương thức đầu tư bất động sản phù hợp với mọi mức vốn từ vài triệu đến vài tỷ.",
        category: "bat-dong-san",
        date: "2026-01-25",
        readingTime: "10 phút",
        tags: ["bất động sản", "chiến lược"],
        featured: true,
    },
    {
        slug: "gia-vang-va-yeu-to-tac-dong",
        title: "Giá vàng và những yếu tố tác động: Phân tích chi tiết",
        excerpt: "Hiểu các yếu tố kinh tế vĩ mô ảnh hưởng đến giá vàng để đưa ra quyết định đầu tư thông minh.",
        category: "vang",
        date: "2026-01-22",
        readingTime: "7 phút",
        tags: ["vàng", "phân tích"],
    },
    {
        slug: "forex-co-ban-cap-tien-te",
        title: "Forex cơ bản: Hiểu về cặp tiền tệ và cách giao dịch",
        excerpt: "Bắt đầu hành trình giao dịch forex với những kiến thức nền tảng về cặp tiền tệ chính.",
        category: "forex",
        date: "2026-01-20",
        readingTime: "9 phút",
        tags: ["forex", "người mới"],
    },
    {
        slug: "lap-quy-khan-cap-trong-3-thang",
        title: "Cách lập quỹ khẩn cấp trong 3 tháng",
        excerpt: "Hướng dẫn từng bước xây dựng quỹ dự phòng 3-6 tháng chi tiêu để bảo vệ tài chính gia đình.",
        category: "tai-chinh-ca-nhan",
        date: "2026-01-18",
        readingTime: "6 phút",
        tags: ["tiết kiệm", "người mới"],
    },
];

export function getPostsByCategory(categorySlug: string): BlogPost[] {
    return blogPosts.filter(post => post.category === categorySlug);
}

export function getFeaturedPosts(): BlogPost[] {
    return blogPosts.filter(post => post.featured);
}

export function getPostBySlug(categorySlug: string, postSlug: string): BlogPost | undefined {
    return blogPosts.find(post => post.category === categorySlug && post.slug === postSlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find(cat => cat.slug === slug);
}

export function searchPosts(query: string): BlogPost[] {
    const lowerQuery = query.toLowerCase();
    return blogPosts.filter(post =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
}
