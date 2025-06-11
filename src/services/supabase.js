import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ywipdwyvwyrqejrfdahl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3aXBkd3l2d3lycWVqcmZkYWhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NTIyODEsImV4cCI6MjA2NTIyODI4MX0.567zoi08X4FoJnpGmJ58Xfu6VAH_V25TwXERoz4DcVQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
