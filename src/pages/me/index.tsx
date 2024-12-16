import { Hero } from "@/components/layout/Hero";
import { createClient } from "@/lib/supabase/browser-client";
import { Session } from "@supabase/auth-helpers-nextjs";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Me() {
  const [session, setSession] = useState<Session | null>(null);

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
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Hero>
        <main className="mx-auto max-w-full xl:max-w-screen-xl grid place-content-center font-sf-display">
          {session ? (
            MainContent({ session })
          ) : (
            <h1 className="font-sf-display-bold text-4xl">
              Welcome to Palette Wizard
            </h1>
          )}
        </main>
      </Hero>
    </motion.div>
  );
}

const MainContent = ({ session }: { session: Session }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        className="inline size-64 rounded-full"
        src={session.user.user_metadata.avatar_url}
        alt={session.user.user_metadata.full_name}
        width={512}
        height={512}
      ></Image>
      <h1 className="font-sf-display-bold text-4xl flex items-center gap-4">
        Welcome {session.user.user_metadata.full_name}{" "}
        <Image
          className="inline size-12"
          src="https://em-content.zobj.net/source/apple/391/waving-hand_1f44b.png"
          alt={session.user.user_metadata.full_name}
          width={64}
          height={64}
        ></Image>
      </h1>
      <p>
        Your personal wizard for discovering and crafting stunning color
        palettes.
      </p>
    </div>
  );
};
