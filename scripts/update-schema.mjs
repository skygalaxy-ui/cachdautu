import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function updateSchema() {
    console.log('Updating database schema...');

    // Check if column exists
    const { data: posts, error: fetchError } = await supabase
        .from('posts')
        .select('*')
        .limit(1);

    if (fetchError) {
        console.error('Error fetching posts:', fetchError);
        return;
    }

    const columns = posts && posts.length > 0 ? Object.keys(posts[0]) : [];

    if (!columns.includes('meta_description')) {
        console.log('Adding "meta_description" column via SQL...');
        // Note: Supabase JS client cannot run arbitrary SQL like ALTER TABLE.
        // We usually need the SQL Editor for this, but I'll try to check if I can use a RPC or similar.
        // Since I can't run ALTER TABLE directly via JS client, I will inform the user or check if there is an alternative.
        // However, I can try to use the system generated logs to see if there's a better way.
        console.warn('Manual Action Required: Please run "ALTER TABLE posts ADD COLUMN meta_description TEXT;" in your Supabase SQL Editor.');
    } else {
        console.log('Column "meta_description" already exists.');
    }
}

updateSchema();
