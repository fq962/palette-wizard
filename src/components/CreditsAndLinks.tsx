import Link from "next/link";

export default function CreditsAndLinks(
  { className }: { className?: string } = { className: "" }
) {
  return (
    <small className={`flex font-sf-display gap-2 opacity-75 ${className}`}>
      <a href="https://openai.com/">Powered by OpenAI&apos;s GPT-4o</a>
      <span>|</span>
      <a href="https://creativecommons.org/licenses/by/4.0/">
        Creative Commons
      </a>
      <span>|</span>
      <Link href="/">Home</Link>
      <span>|</span>
      <Link href="/about">About</Link>
      <span>|</span>
      <Link href="/my-creations">My Creations</Link>
    </small>
  );
}
