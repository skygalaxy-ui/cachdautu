import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Vietnamese diacritics removal
function removeVietnameseDiacritics(str) {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')  // Remove combining diacritical marks
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .replace(/ơ/g, 'o').replace(/Ơ/g, 'O')
        .replace(/ư/g, 'u').replace(/Ư/g, 'U')
        .toLowerCase();
}

function hasVietnameseDiacritics(str) {
    const clean = removeVietnameseDiacritics(str);
    return clean !== str.toLowerCase();
}

// 1. Fix category slugs
console.log('=== Fixing CATEGORY slugs ===\n');
const { data: cats } = await s.from('categories').select('id, name, slug');
let catFixed = 0;
for (const cat of cats || []) {
    if (cat.slug && hasVietnameseDiacritics(cat.slug)) {
        const newSlug = removeVietnameseDiacritics(cat.slug);
        console.log(`  "${cat.slug}" → "${newSlug}" (${cat.name})`);
        const { error } = await s.from('categories').update({ slug: newSlug }).eq('id', cat.id);
        if (error) console.log(`  ❌ ${error.message}`);
        else { console.log(`  ✅ Fixed`); catFixed++; }
    }
}
console.log(`\nCategories fixed: ${catFixed}\n`);

// 2. Fix post slugs  
console.log('=== Fixing POST slugs ===\n');
const { data: posts } = await s.from('posts').select('id, title, slug, category');
let postFixed = 0;
for (const p of posts || []) {
    let changed = false;
    const updates = {};

    // Fix slug
    if (p.slug && hasVietnameseDiacritics(p.slug)) {
        updates.slug = removeVietnameseDiacritics(p.slug);
        console.log(`  slug: "${p.slug}" → "${updates.slug}"`);
        changed = true;
    }

    // Fix category reference
    if (p.category && hasVietnameseDiacritics(p.category)) {
        updates.category = removeVietnameseDiacritics(p.category);
        console.log(`  category: "${p.category}" → "${updates.category}"`);
        changed = true;
    }

    if (changed) {
        const { error } = await s.from('posts').update(updates).eq('id', p.id);
        if (error) console.log(`  ❌ ${p.title}: ${error.message}`);
        else { console.log(`  ✅ ${p.title}`); postFixed++; }
    }
}
console.log(`\nPosts fixed: ${postFixed}`);
