import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if(!supabaseUrl || !supabaseKey)
    throw new Error("Please provide SUPABASE_URL and SUPABASE_KEY in .env file");

export const supabase = createClient(supabaseUrl, supabaseKey);
