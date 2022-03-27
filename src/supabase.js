import { createClient } from "@supabase/supabase-js";
const SupabaseUrl = "https://hslxmdqbpkwjhvrbbxbn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzbHhtZHFicGt3amh2cmJieGJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0ODM5OTE5MywiZXhwIjoxOTYzOTc1MTkzfQ.plA79OQmU4FN5JrtXTlySeRN_cGtXZ3O7L48mjKIEeE";

export const supabase = createClient(SupabaseUrl, supabaseKey);