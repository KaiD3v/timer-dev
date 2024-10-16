import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <main className="w-full max-w-[1080px] mx-auto px-2">{children}</main>;
}
