import { Hero } from "@/components/layout/Hero";
import { Title } from "@/components/Title";
import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Hero>
        <Title />
        <main className="mx-auto max-w-full xl:max-w-[600px]">
          <h1 className="text-4xl font-sf-display-bold opacity-90 leading-snug mb-6">
            About
          </h1>
          <div className="flex flex-col xl:flex-row gap-2">
            <p className="text-lg font-sf-display text-balance opacity-80 leading-relaxed mb-6">
              This project began as a collaborative idea from developers{" "}
              <strong className="font-sf-display-bold bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
                haide
              </strong>{" "}
              and{" "}
              <strong className="font-sf-display-bold bg-gradient-to-r from-blue-800 to-purple-700 bg-clip-text text-transparent">
                crywhat
              </strong>
              , who wanted to create a unique tool inspired by the simplicity
              and creativity of platforms like{" "}
              <a
                target="_blank"
                href="https://coolors.co/"
                className="font-sf-display-bold underline"
              >
                coolors.co
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://www.tints.dev/"
                className="font-sf-display-bold underline"
              >
                tints.dev
              </a>
              . Their vision was to craft something that could seamlessly
              generate{" "}
              <strong className="font-sf-display-bold">
                stunning color palettes
              </strong>{" "}
              based on user-defined themes, pushing the boundaries of{" "}
              <em>creativity</em> and <em>technology</em>.
            </p>
            <span className="flex xl:flex-col gap-2 w-full items-center justify-center mb-6">
              <Image
                src="/haide.webp"
                alt="Haide's avatar"
                className="size-24 object-cover rounded-md"
                width={256}
                height={256}
              />
              <Image
                src="/crywhat.webp"
                alt="Crywhat's avatar"
                className="size-24 object-cover rounded-md"
                width={256}
                height={256}
              />
            </span>
          </div>
          <p className="text-lg font-sf-display opacity-80 leading-relaxed mb-6">
            To bring this idea to life, we harnessed the power of{" "}
            <strong className="font-sf-display-bold">
              OpenAI&apos;s GPT-4
            </strong>
            , leveraging its advanced AI capabilities to craft palettes that are
            not only{" "}
            <strong className="font-sf-display-bold">visually appealing</strong>{" "}
            but also contextually aligned with your chosen theme. By integrating
            machine intelligence into this project, we&apos;ve unlocked{" "}
            <strong className="font-sf-display-bold">
              endless possibilities
            </strong>{" "}
            for designers, developers, and creatives alike.
          </p>
          <p className="text-lg font-sf-display opacity-80 leading-relaxed mb-6">
            Built on a foundation of modern web technologies like{" "}
            <strong className="font-sf-display-bold">Next.js</strong> and{" "}
            <a
              target="_blank"
              href="https://flyonui.com/"
              className="font-sf-display-bold underline"
            >
              FlyonUI
            </a>
            , this project reflects our commitment to{" "}
            <strong className="font-sf-display-bold">performance</strong>,{" "}
            <strong className="font-sf-display-bold">scalability</strong>, and{" "}
            <strong className="font-sf-display-bold">clean code</strong>. Our
            design philosophy is inspired by the meticulous attention to detail
            of companies like{" "}
            <strong className="font-sf-display-bold">Apple</strong> and other
            industry leaders who create <em>intuitive</em> and{" "}
            <em>aesthetically pleasing</em> user experiences. We set out to
            build a tool that not only works seamlessly but also feels{" "}
            <strong className="font-sf-display-bold">delightful</strong> to use.
          </p>
          <p className="text-lg font-sf-display opacity-80 leading-relaxed mb-6">
            This is more than just a{" "}
            <strong className="font-sf-display-bold">
              color palette generator
            </strong>
            ; it&apos;s a bridge between{" "}
            <strong className="font-sf-display-bold">art</strong> and{" "}
            <strong className="font-sf-display-bold">technology</strong>,
            empowering users to explore their creativity without limitations.
            Whether you&apos;re designing for <em>web</em>, <em>mobile</em>, or{" "}
            <em>print</em>, we hope this platform becomes a trusted companion in
            your creative journey.
          </p>
          <p className="text-lg font-sf-display opacity-80 leading-relaxed">
            By blending{" "}
            <strong className="font-sf-display-bold">innovation</strong>,{" "}
            <strong className="font-sf-display-bold">inspiration</strong>, and a
            deep appreciation for <em>design excellence</em>, we&apos;ve crafted
            something we&apos;re truly proud of—and we&apos;re excited to share
            it with you.
          </p>
        </main>
      </Hero>
    </motion.div>
  );
}
