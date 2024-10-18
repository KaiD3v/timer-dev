import Link from "next/link";
import { FiPlus } from "react-icons/fi";

export function DashboardHeader() {
  return (
    <header className="flex justify-between h-14 bg-blue-500 mt-10 rounded shadow-2xlg">
      <nav className="flex justify-center items-center ml-3">
        <ul className="flex font-semibold text-white gap-6">
          <li>
            <Link
              href={`/dashboard/:id`}
              className="relative underline-animation"
            >
              Python
            </Link>
          </li>
          <li>
            <Link
              href={`/dashboard/:id`}
              className="relative underline-animation"
            >
              Javascript
            </Link>
          </li>
          <li>
            <Link
              href={`/dashboard/:id`}
              className="relative underline-animation"
            >
              Go Lang
            </Link>
          </li>
        </ul>
      </nav>
      <section className="flex justify-center items-center mr-3">
        <div className="bg-blue-600 p-1 rounded cursor-pointer hover:bg-gray-700/80 ease-in duration-300 shadow-2xl">
          <FiPlus color="#ffff" size={28} />
        </div>
      </section>
    </header>
  );
}
