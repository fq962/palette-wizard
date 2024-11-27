import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CreditsAndLinks() {
  const pathname = usePathname();

  return (
    <small className="flex font-sf-display gap-2 opacity-75">
      <a href="https://openai.com/">Powered by OpenAI&apos;s GPT-4o</a>
      <span>|</span>
      <a href="https://creativecommons.org/licenses/by/4.0/">
        Creative Commons
      </a>
      <span>|</span>
      {pathname === "/about" ? (
        <Link href="/">Home</Link>
      ) : (
        <Link href="/about">About</Link>
      )}
    </small>
  );
}
