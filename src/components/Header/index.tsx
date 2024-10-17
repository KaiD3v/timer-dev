"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { IoEnterOutline } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";

export function Header() {
  const { data, status } = useSession();

  async function handleLogin() {
    await signIn();
  }

  async function handleExit() {
    await signOut();
  }
  return (
    <header className="flex items-center w-full justify-center h-20 shadow-lg">
      <section className="flex pl-4 lg:pl-0 items-center justify-between w-full max-w-[1080px]">
        <div className="flex items-center hover:tracking-widest duration-300">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold">
              Timer<span className="text-blue-500">DEV</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          {status === "authenticated" && (
            <>
              <div className="flex items-end cursor-pointer">
                <MdDashboardCustomize size={32} />
                <Link
                  className="text-lg font-semibold  hover:tracking-widest duration-300"
                  href={"/dashboard"}
                >
                  Dashboard
                </Link>
              </div>
              <div className="flex pr-4 lg:pr-0 items-end cursor-pointer hover:text-red-600 duration-300 ease-in-out">
                <BiExit size={32} />
                <button onClick={handleExit}>Sair</button>
              </div>
            </>
          )}
          {status === "unauthenticated" && (
            <>
              <div className="flex pr-4 lg:pr-0 items-end cursor-pointer hover:text-green-600 duration-300 ease-in-out">
                <IoEnterOutline size={32} />
                <button onClick={handleLogin}>Entrar</button>
              </div>
            </>
          )}
          {status === "loading" && (
            <>
              <div className="flex pr-4 lg:pr-0 items-center cursor-pointer duration-300 ease-in-out">
                <AiOutlineLoading className="animate-spin" size={32} />
              </div>
            </>
          )}
        </div>
      </section>
    </header>
  );
}
