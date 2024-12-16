import { createClient } from "@/lib/supabase/browser-client";
import { Session } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import GitHubAuthButton from "./github-auth-button";

export default function Header() {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  const supabase = createClient();

  const handleSession = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
  };

  useEffect(() => {
    handleSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="flex flex-col xl:flex-row justify-end w-dvw px-6 py-2 gap-6 items-center">
      {session ? (
        router.pathname === "/me" ? (
          <GitHubAuthButton
            logout={() => {
              handleSession();
              router.push("/");
            }}
          />
        ) : (
          <MeButton session={session} />
        )
      ) : (
        <GoToSignInButton />
      )}
    </header>
  );
}

const GoToSignInButton = () => {
  return (
    <Link
      href="/login"
      className="btn btn-soft bg-[#2b3137]/15 text-[#2b3137] hover:bg-[#2b3137]/25 font-sf-display"
    >
      Sign In
    </Link>
  );
};

const MeButton = ({ session }: { session: Session }) => {
  return (
    <Link
      href="/me"
      className="flex gap-2 p-2 bg-[#2b3137]/5 font-sf-display rounded-md hover:opacity-90 transition-all duration-150 ease-in-out"
    >
      <Image
        src={session.user?.user_metadata?.avatar_url}
        alt={session.user?.user_metadata?.full_name}
        width={512}
        height={512}
        className="rounded-full size-6"
      ></Image>
      {session.user?.user_metadata?.full_name}
    </Link>
  );
};
