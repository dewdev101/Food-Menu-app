import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sxddnhmxkykalgdjvyku.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4ZGRuaG14a3lrYWxnZGp2eWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMDg5ODMsImV4cCI6MTk5NjY4NDk4M30.4NQfNE8AiK_6D4wXUXoyTITpxMydot0TMSm_SxXJ13c");

export default  supabase;