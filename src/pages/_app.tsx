import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "next/font/local";

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
    <main className={`${sfDisplayRegular.variable} ${sfDisplayBold.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
