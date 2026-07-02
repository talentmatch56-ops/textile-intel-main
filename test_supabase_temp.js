import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key length:', supabaseKey ? supabaseKey.length : 0);

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing URL or Key in env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log('Testing connection...');
  try {
    const { data, error } = await supabase.auth.signUp({
      email: 'test@gmintel.ai',
      password: 'Password123!',
    });
    if (error) {
      console.log('Supabase Error:', error);
      console.log('Error Type/Constructor:', error.constructor.name);
      console.log('JSON Stringified Error:', JSON.stringify(error, null, 2));
    } else {
      console.log('Signup Successful:', data);
    }
  } catch (err) {
    console.error('Caught Exception:', err);
  }
}

test();
