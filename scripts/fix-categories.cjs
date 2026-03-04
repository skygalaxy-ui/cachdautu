const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const env = fs.readFileSync('.env.local', 'utf-8');
env.split('\n').forEach(l => {
    const [k, ...v] = l.split('=');
    if (k && v.length) process.env[k.trim()] = v.join('=').trim();
});

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// Manual mapping: assign each post to the most relevant category based on title
const TITLE_TO_CATEGORY = {
    'dau tu la gi': 'tai-chinh-ca-nhan',
    'chung khoan': 'chung-khoan',
    'crypto': 'crypto',
    'bitcoin': 'crypto',
    'bat dong san': 'bat-dong-san',
    'forex': 'forex',
    'vang': 'vang',
    'trai phieu': 'trai-phieu',
    'quy dau tu': 'quy-dau-tu',
    'quy mo': 'quy-dau-tu',
    'etf': 'quy-dau-tu',
    'khoi nghiep': 'khoi-nghiep',
    'startup': 'khoi-nghiep',
    'nft': 'dau-tu-thay-the',
    'nghe thuat': 'dau-tu-thay-the',
    'tiet kiem': 'tai-chinh-ca-nhan',
    'ngan sach': 'tai-chinh-ca-nhan',
    'lai suat': 'trai-phieu',
    'pepperstone': 'forex',
    'exness': 'forex',
    'san giao dich': 'forex',
    'trend': 'forex',
    'trendline': 'forex',
    'rsi': 'chung-khoan',
    'macd': 'chung-khoan',
    'nen nhat': 'chung-khoan',
    'fibonacci': 'chung-khoan',
    'phan tich': 'chung-khoan',
    'defi': 'crypto',
    'blockchain': 'crypto',
    'staking': 'crypto',
};

function normalizeVN(str) {
    return str.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D')
        .replace(/[^a-z0-9 ]/g, ' ');
}

(async () => {
    const { data: cats } = await s.from('categories').select('id, name, slug');
    const { data: posts } = await s.from('posts').select('id, title, category_id').order('created_at');

    const slugToId = {};
    cats.forEach(c => { slugToId[c.slug] = c.id; });
    const idToName = {};
    cats.forEach(c => { idToName[c.id] = c.name; });

    console.log('Total posts: ' + posts.length);

    // Count per category
    const counts = {};
    cats.forEach(c => { counts[c.slug] = 0; });

    // First pass: assign by keyword matching
    const assignments = [];

    for (const post of posts) {
        const norm = normalizeVN(post.title);
        let bestCat = null;
        let bestLen = 0;

        for (const [keyword, catSlug] of Object.entries(TITLE_TO_CATEGORY)) {
            if (norm.includes(keyword) && keyword.length > bestLen) {
                bestCat = catSlug;
                bestLen = keyword.length;
            }
        }

        assignments.push({
            id: post.id,
            title: post.title,
            oldCat: idToName[post.category_id] || '?',
            newSlug: bestCat,
        });
    }

    // Second pass: for posts without a match or over-represented categories, 
    // spread to empty categories
    const emptyCats = cats.map(c => c.slug).filter(slug => {
        const assigned = assignments.filter(a => a.newSlug === slug).length;
        return assigned === 0;
    });

    // Redistribute unmatched posts to empty categories
    let emptyIdx = 0;
    for (const a of assignments) {
        if (!a.newSlug && emptyIdx < emptyCats.length) {
            a.newSlug = emptyCats[emptyIdx++];
        } else if (!a.newSlug) {
            // Find least populated
            const catCounts = {};
            cats.forEach(c => { catCounts[c.slug] = 0; });
            assignments.forEach(x => { if (x.newSlug) catCounts[x.newSlug]++; });
            const least = Object.entries(catCounts).sort((a, b) => a[1] - b[1])[0][0];
            a.newSlug = least;
        }
    }

    // Also check if any category still has 0 posts - steal from over-populated ones
    const finalCounts = {};
    cats.forEach(c => { finalCounts[c.slug] = 0; });
    assignments.forEach(a => { if (a.newSlug) finalCounts[a.newSlug]++; });

    const stillEmpty = Object.entries(finalCounts).filter(([, c]) => c === 0).map(([s]) => s);
    if (stillEmpty.length > 0) {
        // Find most populated categories and steal one post each
        const sorted = Object.entries(finalCounts).sort((a, b) => b[1] - a[1]);
        for (const emptyCat of stillEmpty) {
            for (const [overSlug, overCount] of sorted) {
                if (overCount > 1) {
                    // Find a post from this over-populated category to reassign
                    const victim = assignments.find(a => a.newSlug === overSlug);
                    if (victim) {
                        victim.newSlug = emptyCat;
                        finalCounts[overSlug]--;
                        finalCounts[emptyCat]++;
                        break;
                    }
                }
            }
        }
    }

    // Execute updates
    let updated = 0;
    for (const a of assignments) {
        const newId = slugToId[a.newSlug];
        if (!newId) continue;

        const { error } = await s.from('posts').update({ category_id: newId }).eq('id', a.id);
        if (error) {
            console.log('FAIL: ' + a.title.substring(0, 40) + ' => ' + error.message);
        } else {
            const newName = idToName[newId];
            if (a.oldCat !== newName) {
                console.log(a.oldCat + ' => ' + newName + ' | ' + a.title.substring(0, 50));
            }
            updated++;
        }
    }

    console.log('\nUpdated: ' + updated + ' posts');

    // Verify
    const { data: verify } = await s.from('posts').select('category_id, categories(name)');
    const dist = {};
    verify.forEach(p => {
        const name = p.categories?.name || '?';
        dist[name] = (dist[name] || 0) + 1;
    });

    console.log('\nFINAL DISTRIBUTION:');
    Object.entries(dist).sort((a, b) => b[1] - a[1]).forEach(([name, count]) => {
        console.log('  ' + name + ': ' + count);
    });
})();
