import { createClient } from '@supabase/supabase-js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Tìm file .env.local trong thư mục gốc của dự án
const rootDir = join(__dirname, '../../');
const envPath = join(rootDir, '.env.local');

/**
 * Manual Env Loader (No dependency required)
 * Đọc file .env.local và nạp vào process.env
 */
function loadEnv() {
    if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        content.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split('=');
            if (key && valueParts.length > 0) {
                const value = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
                process.env[key.trim()] = value;
            }
        });
        console.log('✅ Đã nạp cấu hình từ .env.local');
    } else {
        console.warn('⚠️  Cảnh báo: Không tìm thấy file .env.local');
    }
}

loadEnv();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Lỗi: Thiếu cấu hình Supabase trong .env.local');
    process.exit(1);
}

export const supabase = createClient(supabaseUrl, supabaseKey);

console.log('🔗 Đã kết nối Supabase:', supabaseUrl);
