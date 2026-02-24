import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data } = await s.from('posts').select('id,content').eq('slug', 'top-5-quy-etf-tot-nhat-viet-nam-2026').single();

// Replace markdown table with HTML table
const mdTable = `| Tiêu chí | VN30 ETF | VNFIN Lead | Diamond ETF | VNX50 ETF | MAFM VN30 |
|---|---|---|---|---|---|
| Chỉ số theo dõi | VN30 | VNFIN Lead | VNDiamond | VNX50 | VN30 |
| Số cổ phiếu | 30 | ~20 | ~30 | 50 | 30 |
| Phí quản lý/năm | 0,55% | 0,65% | 0,60% | 0,55% | 0,45% |
| Thanh khoản | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Rủi ro | Trung bình | Cao | Trung bình | Trung bình | Trung bình |
| Phù hợp | Mọi NĐT | Thích ngành TC | Thích blue-chip | Dài hạn | Tiết kiệm phí |`;

const htmlTable = `<table>
<thead>
<tr><th>Tiêu chí</th><th>VN30 ETF</th><th>VNFIN Lead</th><th>Diamond ETF</th><th>VNX50 ETF</th><th>MAFM VN30</th></tr>
</thead>
<tbody>
<tr><td>Chỉ số theo dõi</td><td>VN30</td><td>VNFIN Lead</td><td>VNDiamond</td><td>VNX50</td><td>VN30</td></tr>
<tr><td>Số cổ phiếu</td><td>30</td><td>~20</td><td>~30</td><td>50</td><td>30</td></tr>
<tr><td>Phí quản lý/năm</td><td>0,55%</td><td>0,65%</td><td>0,60%</td><td>0,55%</td><td>0,45%</td></tr>
<tr><td>Thanh khoản</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐</td></tr>
<tr><td>Rủi ro</td><td>Trung bình</td><td>Cao</td><td>Trung bình</td><td>Trung bình</td><td>Trung bình</td></tr>
<tr><td>Phù hợp</td><td>Mọi NĐT</td><td>Thích ngành TC</td><td>Thích blue-chip</td><td>Dài hạn</td><td>Tiết kiệm phí</td></tr>
</tbody>
</table>`;

const newContent = data.content.replace(mdTable, htmlTable);

if (newContent === data.content) {
    console.log('❌ Không tìm thấy bảng markdown để thay thế');
    // Try line by line to find
    const lines = data.content.split('\n');
    let tableStart = -1, tableEnd = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim().startsWith('| Tiêu chí')) tableStart = i;
        if (tableStart >= 0 && lines[i].trim().startsWith('| Phù hợp')) { tableEnd = i; break; }
    }
    if (tableStart >= 0 && tableEnd >= 0) {
        console.log(`Found table lines ${tableStart}-${tableEnd}`);
        lines.splice(tableStart, tableEnd - tableStart + 1, htmlTable);
        const fixedContent = lines.join('\n');
        const { error } = await s.from('posts').update({ content: fixedContent, updated_at: new Date().toISOString() }).eq('id', data.id);
        if (error) console.log('❌', error.message);
        else console.log('✅ Bảng đã được chuyển từ Markdown sang HTML!');
    }
} else {
    const { error } = await s.from('posts').update({ content: newContent, updated_at: new Date().toISOString() }).eq('id', data.id);
    if (error) console.log('❌', error.message);
    else console.log('✅ Bảng đã được chuyển từ Markdown sang HTML!');
}
