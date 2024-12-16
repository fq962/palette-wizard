// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from "@/lib/supabase/server-client";
import type { NextApiRequest, NextApiResponse } from "next";

export const dynamic = "force-dynamic";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return GET(req, res);
}

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createClient(req, res);

  const { code } = req.query as {
    code: string;
  };

  if (code) {
    const {
      data: { session, user },
      error,
    } = await supabase.auth.exchangeCodeForSession(code);

    console.log({ error });
    console.log({ session, user });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }

    console.log({ user, session });
  }

  res.redirect("/");
}
