import Link from "next/link";

export default function CreditsAndLinks(
  { className }: { className?: string } = { className: "" }
) {
  return (
    <small className={`flex font-sf-display gap-2 ${className}`}>
      <a
        className="opacity-75 hover:opacity-90 transition-all duration-150 ease-in-out"
        target="_blank"
        href="https://openai.com/"
      >
        Powered by OpenAI&apos;s GPT-4o
      </a>
      <span className="opacity-25">|</span>
      <a
        className="opacity-75 hover:opacity-90 transition-all duration-150 ease-in-out"
        target="_blank"
        href="https://creativecommons.org/licenses/by/4.0/"
      >
        Creative Commons
      </a>
      <span className="opacity-25">|</span>
      <Link
        className="opacity-75 hover:opacity-90 transition-all duration-150 ease-in-out"
        href="/"
      >
        Home
      </Link>
      <span className="opacity-25">|</span>
      <Link
        className="opacity-75 hover:opacity-90 transition-all duration-150 ease-in-out"
        href="/about"
      >
        About
      </Link>
      <span className="opacity-25">|</span>
      <Link
        className="opacity-75 hover:opacity-90 transition-all duration-150 ease-in-out"
        href="/my-creations"
      >
        My Creations
      </Link>
      {/* <span className="opacity-25">|</span>
      <Link
        className="opacity-75 hover:opacity-90 transition-all duration-150 ease-in-out"
        href="/join-us"
      ></Link> */}
    </small>
  );
}
