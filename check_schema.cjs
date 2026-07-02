const { createClient } = require('@supabase/supabase-js');

const url = 'https://ilcrawcvsuscenolcdyo.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsY3Jhd2N2c3VzY2Vub2xjZHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MDY2NTAsImV4cCI6MjA5ODQ4MjY1MH0.Ze2igwzg0V4TcgPWe5sH1aF4Iw52kjNbWxHRJPM1Jfg';

const supabase = createClient(url, key);

async function check() {
  const { data, error } = await supabase.from('profiles').select('*').eq('email', 'test@gmintel.ai');
  if (error) {
    console.log('Error querying profiles:', error.message);
  } else {
    console.log('Profiles for test@gmintel.ai:', data);
  }
}

check();
