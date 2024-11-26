import { type GithubUser } from "@/types/github-user";
import Image from "next/image";

interface CollaboratorProps {
  gitUser: GithubUser;
}

export default function Collaborator({
  gitUser: { avatar_url, name, login, html_url },
}: CollaboratorProps) {
  if (!avatar_url) {
    return null;
  }

  return (
    <>
      <a
        className="size-10 relative group opacity-50"
        href={html_url}
        target="_blank"
      >
        <Image
          src={avatar_url ? `${avatar_url}.webp` : "/src/assets/haide.jpeg"}
          alt="haide"
          title={name ?? login}
          width={128}
          height={128}
          className="border rounded-full"
        ></Image>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 bg-black/75 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">
          {name ?? login}
        </div>
      </a>
    </>
  );
}
