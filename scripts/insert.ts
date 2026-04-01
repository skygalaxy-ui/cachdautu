import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "../.env.local") });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function run() {
  const { data: cats } = await supabase.from("categories").select("id, slug");
  const chungKhoanId = cats?.find(c => c.slug === "chung-khoan")?.id;

  if (!chungKhoanId) {
    console.log("No chung-khoan category!");
    return;
  }

  const art1 = fs.readFileSync(path.join(__dirname, "article1.md"), "utf-8");
  const art2 = fs.readFileSync(path.join(__dirname, "article2.md"), "utf-8");

  const { error: err1 } = await supabase.from("posts").insert({
    title: "Hướng Dẫn Toàn Tập: Mở Và Sử Dụng Tài Khoản Demo Chứng Khoán Việt Nam 2026",
    slug: "huong-dan-mo-su-dung-tai-khoan-demo-chung-khoan",
    excerpt: "Bạn muốn thử nghiệm chiến lược chứng khoán với 0 rủi ro tài chính? Học cách tự tạo tài khoản giao dịch demo chứng khoán và quản trị vốn giả lập hiệu quả nhất.",
    content: art1,
    cover_image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2670&auto=format&fit=crop",
    category_id: chungKhoanId,
    is_published: true,
    scheduled_at: new Date().toISOString(),
    view_count: 0
  });

  console.log("Art1:", err1 ? err1 : "OK");

  const { error: err2 } = await supabase.from("posts").insert({
    title: "Đánh Giá Sàn Plus500 (2026): Ưu Nhược Điểm, Phí Giao Dịch Và Loại Tài Khoản",
    slug: "danh-gia-uu-nhuoc-diem-phi-giao-dich-san-plus500",
    excerpt: "Review trung thực ưu nhược điểm sàn Plus500 qua phí giao dịch và các loại mô hình tài khoản (tài khoản demo, pro, CFD) cho cộng đồng chứng quyền Việt Nam năm 2026.",
    content: art2,
    cover_image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2670&auto=format&fit=crop",
    category_id: chungKhoanId,
    is_published: true,
    scheduled_at: new Date().toISOString(),
    view_count: 0
  });

  console.log("Art2:", err2 ? err2 : "OK");
}

run();
