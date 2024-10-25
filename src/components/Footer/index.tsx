import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex flex-col w-full h-24 border-t items-center justify-center bg-gray-100">
      <h1 className="text-xl font-semibold">
        Timer<span className="text-blue-500">DEV</span>
      </h1>
      <div className="flex items-center gap-6 mt-2">
        <a
          href="https://github.com/kaid3v/timer-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
        <Link
          href="/license"
          className="text-gray-600 text-sm hover:text-blue-500 hover:underline"
        >
          MIT License © 2024
        </Link>
      </div>
    </footer>
  );
}
