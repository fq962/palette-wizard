import { createClientComponentClient as createClientComponentClientIntern } from "@supabase/auth-helpers-nextjs";

export const createClientComponentClient = () =>
  createClientComponentClientIntern({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  });
