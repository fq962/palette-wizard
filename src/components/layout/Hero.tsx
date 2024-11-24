import { PropsWithChildren } from "react";

export const Hero = ({ children }: PropsWithChildren) => (
  <main className="mx-auto max-w-screen-lg mt-12 flex flex-col gap-12 px-4">
    {children}
  </main>
);
