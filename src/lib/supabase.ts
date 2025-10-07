import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    headers: {
      'x-client-info': 'supabase-js/2.39.3'
    }
  }
});

// Test the connection
supabase.from('customers').select('count', { count: 'exact', head: true })
  .then(() => {
    console.log('Successfully connected to Supabase');
  })
  .catch((error) => {
    console.error('Error connecting to Supabase:', error.message);
  });