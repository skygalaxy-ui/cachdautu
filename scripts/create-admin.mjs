// Script to create an admin user in Supabase
// Run with: node scripts/create-admin.mjs

const SUPABASE_URL = "https://njchsjhdkcfaouqwyutc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable__uhKBoyqEVq-BOyEje9EAg_kjTRWpCF";

// ============================================
// ⚠️  SET YOUR ADMIN CREDENTIALS HERE  ⚠️
// ============================================
const ADMIN_EMAIL = "admin@cachdautu.com";
const ADMIN_PASSWORD = "CachDauTu@2026!";
// ============================================

async function createAdmin() {
    console.log("🔐 Creating admin user...");
    console.log(`   Email: ${ADMIN_EMAIL}`);
    console.log("");

    const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({
            email: ADMIN_EMAIL,
            password: ADMIN_PASSWORD,
        }),
    });

    const data = await response.json();

    if (response.ok) {
        if (data.id) {
            console.log("✅ Admin user created successfully!");
            console.log(`   User ID: ${data.id}`);
            console.log(`   Email: ${data.email}`);

            if (data.confirmation_sent_at) {
                console.log("");
                console.log("📧 A confirmation email has been sent.");
                console.log("   You need to confirm the email before you can log in.");
                console.log("");
                console.log("   💡 TIP: If you don't want to confirm email,");
                console.log("   go to Supabase Dashboard > Authentication > Users");
                console.log("   and manually confirm the user.");
            }

            if (data.session) {
                console.log("");
                console.log("🎉 User is already confirmed and ready to use!");
            }
        } else {
            console.log("⚠️  User may already exist. Response:", JSON.stringify(data, null, 2));
        }
    } else {
        console.error("❌ Failed to create user:");
        console.error(`   Status: ${response.status}`);
        console.error(`   Error: ${JSON.stringify(data, null, 2)}`);

        if (data.msg?.includes("already registered") || data.message?.includes("already registered")) {
            console.log("");
            console.log("ℹ️  This email is already registered. You can use it to log in.");
        }
    }
}

createAdmin().catch(console.error);
