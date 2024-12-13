import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL, // Replace with your Supabase URL
  process.env.REACT_APP_SUPABASE_ANON_KEY // Replace with your Supabase anon key
);

export default supabase;
