import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "next/font/local";

const sfDisplay = localFont({
  src: "./fonts/SFProDisplay-Regular.woff2",
  variable: "--font-sf-display",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={sfDisplay.variable}>
      <Component {...pageProps} />
    </main>
  );
}
