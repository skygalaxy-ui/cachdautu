require("dotenv").config({ path: require("path").join(__dirname, "../.env.local") });
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function run() {
  const { data: cats } = await supabase.from("categories").select("id, slug");
  const chungKhoanId = cats?.find(c => c.slug === "chung-khoan")?.id;

  if (!chungKhoanId) {
    console.log("No chung-khoan category!");
    return;
  }

  const art3 = fs.readFileSync(path.join(__dirname, "article3.md"), "utf-8");
  const art4 = fs.readFileSync(path.join(__dirname, "article4.md"), "utf-8");

  const { error: err3 } = await supabase.from("posts").insert({
    title: "So Sánh Exness Với Plus500 Chi Tiết 2026: Sàn Nào Thực Sự Tốt Hơn Cho Nhà Đầu Tư Việt?",
    slug: "so-sanh-exness-voi-plus500-chi-tiet-san-nao-tot-hon",
    excerpt: "Bạn phân vân giữa hai gã khổng lồ Forex/CFD? Đọc ngay bài phân tích so sánh sàn Exness với Plus500 chuyên sâu nhất 2026 từ góc độ Spread, đòn bẩy và phí qua đêm.",
    content: art3,
    featured_image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?q=80&w=2000&auto=format&fit=crop",
    category_id: chungKhoanId,
    is_published: true,
    scheduled_at: new Date().toISOString()
  });

  console.log("Art3:", err3 ? err3 : "OK");

  const { error: err4 } = await supabase.from("posts").insert({
    title: "Cách Đầu Tư Vào Quỹ ETF Từ A Đến Z: Làm Thế Nào Để Sinh Lời Bền Vững 2026?",
    slug: "cach-dau-tu-vao-quy-etf-tu-a-z-lam-the-nao-mua",
    excerpt: "Đầu tư etf như thế nào an toàn? Giải mã tuyệt đỉnh làm thế nào để mua quỹ ETF VN30, VNFIN Diamond với bí kíp bình quân giá (DCA) sinh lời bền vững 15%/năm.",
    content: art4,
    featured_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    category_id: chungKhoanId,
    is_published: true,
    scheduled_at: new Date().toISOString()
  });

  console.log("Art4:", err4 ? err4 : "OK");
}

run();
