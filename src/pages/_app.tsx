import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { AnimatePresence } from "motion/react";
import type { AppProps } from "next/app";

import localFont from "next/font/local";
import { Toaster } from "sonner";

const sfDisplayRegular = localFont({
  src: "./fonts/SFProDisplay-Regular.woff2",
  variable: "--font-sf-display",
  weight: "100 900",
});

const sfDisplayBold = localFont({
  src: "./fonts/SFProDisplay-Bold.woff2",
  variable: "--font-sf-display-bold",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <main
          className={`${sfDisplayRegular.variable} ${sfDisplayBold.variable}`}
        >
          <Component {...pageProps} />
          <Toaster />
        </main>
      </Layout>
    </AnimatePresence>
  );
}
