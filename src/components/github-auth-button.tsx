import { createClient } from "@/lib/supabase/browser-client";
import { Session } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function GitHubAuthButton() {
  const [session, setSession] = useState<Session | null>(null);

  const supabase = createClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/api/auth/callback",
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    handleSession();
  };

  const handleSession = async () => {
    const { data } = await supabase.auth.getSession();
    console.log({ session: data.session });

    setSession(data.session);
  };

  useEffect(() => {
    handleSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !session ? (
    <button
      onClick={handleSignIn}
      className="btn btn-soft bg-[#2b3137]/15 text-[#2b3137] hover:bg-[#2b3137]/25"
    >
      <span className="icon-[tabler--brand-github]"></span> Github
    </button>
  ) : (
    <button
      onClick={handleSignOut}
      className="btn btn-outline text-[#2b3137] hover:border-[#2b3137] hover:bg-[#2b3137]/10"
    >
      Sign Out
    </button>
  );
}
