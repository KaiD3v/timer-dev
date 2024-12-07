"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { IoEnterOutline } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { ThemeButton } from "../ThemeButton";
import { CgProfile } from "react-icons/cg";

export function Header() {
  const { data, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  async function handleLogin() {
    await signIn();
  }

  async function handleExit() {
    await signOut();
  }

  return (
    <header className="flex items-center justify-center h-20 shadow-lg">
      <section className="flex items-center mx-4 justify-between w-full max-w-[1080px]">
        <div className="flex items-center hover:tracking-widest duration-300">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold">
              Timer<span className="text-blue-500">DEV</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 relative">
          {status === "authenticated" && (
            <>
              <Link
                className="text-lg font-semibold hover:tracking-widest duration-300 flex items-center gap-2"
                href={"/dashboard"}
              >
                <MdDashboardCustomize size={32} /> Dashboard
              </Link>

              <div className="relative">
                <Image
                  className="rounded-full cursor-pointer"
                  src={data?.user?.image as string}
                  alt="profile picture"
                  width={38}
                  height={38}
                  onClick={toggleDropdown}
                />

                {isDropdownOpen && (
                  <div className={`menu absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg`}>
                    <Link
                      href="/profile"
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <CgProfile size={20} />
                      <span>
                      Perfil
                      </span>
                    </Link>
                    <ThemeButton />
                    <button
                      onClick={handleExit}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <BiExit size={20} /> Sair
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

          {status === "unauthenticated" && (
            <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 duration-300 ease-in-out">
              <button onClick={handleLogin}>Entrar</button>
              <IoEnterOutline size={32} />
            </div>
          )}

          {status === "loading" && (
            <div className="cursor-pointer duration-300 ease-in-out">
              <AiOutlineLoading className="animate-spin" size={32} />
            </div>
          )}
        </div>
      </section>
    </header>
  );
}
