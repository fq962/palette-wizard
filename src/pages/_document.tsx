import FlyonuiScript from "@/components/FlyonuiScript";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const mesActual = new Date().getMonth() + 1;
  return (
    <Html lang="en" className="bg-transparent" data-theme="light">
      <Head>
        {(mesActual === 11 || mesActual === 12) && (
          <>
            <script defer src="https://app.embed.im/snow.js"></script>
            <style>
              {`body {background: radial-gradient(circle, rgba(55, 132, 183, 0.7), rgba(9, 29, 56, 0.9));`}
            </style>
          </>
        )}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <FlyonuiScript />
      </body>
    </Html>
  );
}
