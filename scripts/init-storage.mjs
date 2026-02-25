import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function initStorage() {
    console.log('Initializing storage...');

    // 1. Create bucket if not exists
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();
    if (listError) {
        console.error('Error listing buckets:', listError);
        return;
    }

    const hasImages = buckets.some(b => b.name === 'images');
    if (!hasImages) {
        console.log('Creating "images" bucket...');
        const { error: createError } = await supabase.storage.createBucket('images', {
            public: true,
            allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml'],
            fileSizeLimit: 5242880 // 5MB
        });

        if (createError) {
            console.error('Error creating bucket:', createError);
        } else {
            console.log('Bucket "images" created successfully.');
        }
    } else {
        console.log('Bucket "images" already exists.');
        // Ensure it's public
        await supabase.storage.updateBucket('images', { public: true });
    }

    console.log('Storage initialization complete.');
}

initStorage();
