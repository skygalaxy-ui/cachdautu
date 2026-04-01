require("dotenv").config({ path: require("path").join(__dirname, "../.env.local") });
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function run() {
  // Update Article 1
  await supabase.from("posts")
    .update({ featured_image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a1?q=80&w=2000&auto=format&fit=crop" })
    .eq("slug", "huong-dan-mo-su-dung-tai-khoan-demo-chung-khoan");

  // Update Article 2
  await supabase.from("posts")
    .update({ featured_image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000&auto=format&fit=crop" })
    .eq("slug", "danh-gia-uu-nhuoc-diem-phi-giao-dich-san-plus500");

  console.log("Images updated successfully!");
}

run();
