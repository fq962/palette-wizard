import GitHubAuthButton from "@/components/github-auth-button";
import { Hero } from "@/components/layout/Hero";
import { Title } from "@/components/Title";
import { motion } from "motion/react";

export default function Login() {
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
          <section className="mb-4">
            <h1>Sign in with GitHub to get started with Palette Wizard</h1>
          </section>
          <GitHubAuthButton />
        </main>
      </Hero>
    </motion.div>
  );
}
