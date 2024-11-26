import { PropsWithChildren } from "react";
import Collab from "../Collab";
import GitHubRepo from "../GitHubRepo";

export const Hero = ({ children }: PropsWithChildren) => (
  <main className="mx-auto max-w-screen-lg mt-12 flex flex-col gap-12 px-4">
    {children}
    <div className="absolute bottom-0 right-0 m-4 hidden xl:inline">
      <Collab></Collab>
    </div>
    <div className="absolute bottom-0 left-0 m-4 hidden xl:inline">
      <GitHubRepo></GitHubRepo>
    </div>
  </main>
);
