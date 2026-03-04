import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const keywords = ['crypto', 'forex', 'bitcoin', 'blockchain', 'ngoai-hoi', 'tien-ao', 'altcoin', 'defi', 'binance', 'ethereum', 'solana', 'cardano', 'ripple'];

async function cleanStorage() {
    console.log("--- ĐANG QUÉT SUPABASE STORAGE ---");

    const { data, error } = await s.storage.from('images').list('posts', { limit: 1000 });

    if (error) {
        console.log("Lỗi list storage:", error.message);
        return;
    }

    const filesToDelete = data?.filter(file =>
        keywords.some(k => file.name.toLowerCase().includes(k))
    ) || [];

    if (filesToDelete.length > 0) {
        console.log(`Tìm thấy ${filesToDelete.length} ảnh liên quan đến Crypto/Forex:`);
        filesToDelete.forEach(f => console.log(`- ${f.name}`));

        const filePaths = filesToDelete.map(f => `posts/${f.name}`);
        const { error: deleteError } = await s.storage.from('images').remove(filePaths);

        if (deleteError) console.log("Lỗi xóa ảnh:", deleteError.message);
        else console.log("OK: Đã xóa toàn bộ ảnh liên quan trong Storage.");
    } else {
        console.log("Không tìm thấy ảnh nào liên quan đến Crypto/Forex trong Storage.");
    }
}

cleanStorage();
