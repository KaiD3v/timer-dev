import Link from "next/link";
import { AiFillDashboard } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";

export function Header() {
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
            <Link className="text-lg font-semibold" href={"/dashboard"}>
              Sair
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
}
