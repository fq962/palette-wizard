// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
import GitHubAuthButton from "@/components/github-auth-button";
import { Hero } from "@/components/layout/Hero";
import { Title } from "@/components/Title";
import { motion } from "motion/react";

export default function JoinUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Hero>
        <Title />
        <main className="mx-auto max-w-full xl:max-w-screen-xl grid place-content-center font-sf-display">
          {/* Page for the SignUp */}
          <h1 className="font-sf-display-bold text-4xl">Create Your Account</h1>
          <p>
            Your personal wizard for discovering and crafting stunning color
            palettes.
          </p>
          <footer className="mt-2">
            <GitHubAuthButton />
          </footer>
        </main>
      </Hero>
    </motion.div>
  );
}
