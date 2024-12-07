import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <main className="w-full max-w-[1080px] mx-auto md:px-2 px-6">{children}</main>;
}
