import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

// Load .env.local manually
const envContent = readFileSync('.env.local', 'utf-8');
envContent.split('\n').forEach(line => {
    const [key, ...vals] = line.split('=');
    if (key && vals.length) process.env[key.trim()] = vals.join('=').trim();
});

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function addColumn() {
    console.log('Adding focus_keyword column to posts...\n');

    // Check if column already exists by trying to select it
    const { data, error } = await s.from('posts').select('focus_keyword').limit(1);

    if (!error) {
        console.log('✅ Column focus_keyword already exists!');
        return;
    }

    // Column doesn't exist, add via RPC or raw SQL
    console.log('Column not found, adding...');

    // Try using rpc
    const { error: rpcErr } = await s.rpc('exec_sql', {
        sql: 'ALTER TABLE posts ADD COLUMN IF NOT EXISTS focus_keyword TEXT;'
    });

    if (rpcErr) {
        console.log('\n⚠️ Cannot add column via RPC.');
        console.log('Please add the column manually in Supabase Dashboard:');
        console.log('');
        console.log('1. Go to Table Editor → posts');
        console.log('2. Click "+" to add column');
        console.log('3. Name: focus_keyword');
        console.log('4. Type: text');
        console.log('5. Default: (leave empty)');
        console.log('6. Click Save');
        console.log('');
        console.log('Or run this SQL in SQL Editor:');
        console.log('ALTER TABLE posts ADD COLUMN IF NOT EXISTS focus_keyword TEXT;');
    } else {
        console.log('✅ Column added successfully!');
    }
}

addColumn();
