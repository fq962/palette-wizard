// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase-client";

export const dynamic = "force-dynamic";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return GET(req, res);
}

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query as { code: string };

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  res.redirect(req.headers.origin || "/");
}
