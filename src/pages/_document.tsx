import FlyonuiScript from "@/components/FlyonuiScript";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-transparent" data-theme="light">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <FlyonuiScript />
      </body>
    </Html>
  );
}
