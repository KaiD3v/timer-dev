import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bottom-0 flex flex-col w-full h-24 border-t border-gray-300 dark:border-gray-700 items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        Timer<span className="text-blue-500 dark:text-blue-400">DEV</span>
      </h1>
      <div className="flex items-center gap-6 mt-2">
        <a
          href="https://github.com/kaid3v/timer-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"
        >
          <FaGithub size={28} />
        </a>
        <Link
          href="/license"
          className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
        >
          MIT License © 2024
        </Link>
      </div>
    </footer>
  );
}
