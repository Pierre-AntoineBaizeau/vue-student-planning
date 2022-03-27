import { createClient } from "@supabase/supabase-js";
const SupabaseUrl = "https://hslxmdqbpkwjhvrbbxbn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzbHhtZHFicGt3amh2cmJieGJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0ODAyOTY4MSwiZXhwIjoxOTYzNjA1NjgxfQ.Wnd-ssc1XHrM7cIfWkIntvh7jyBWZyLa4FkRRW-K3-E";

export const supabase = createClient(SupabaseUrl, supabaseKey);