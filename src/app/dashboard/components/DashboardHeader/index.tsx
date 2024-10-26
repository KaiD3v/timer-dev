import { getServerSession } from "next-auth";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { authOptions } from "../../../../lib/auth";
import prismaClient from "@/lib/prisma";

export async function DashboardHeader() {
  const session = await getServerSession(authOptions);

  const categories = await prismaClient.category.findMany({
    where: { userId: session?.user.id },
  });
  return (
    <header className="flex justify-between h-14 bg-blue-500 mt-10 scroll-bar rounded shadow-2xlg">
      <nav className="flex justify-center items-center ml-3 overflow-auto">
        {categories.length > 0 && (
          <ul className="flex font-semibold max-w-full text-white gap-6">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  className="relative underline-animation"
                  href={`/dashboard/category/${category.id}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {categories.length === 0 && (
          <p className="text-white font-semibold">
            Você ainda não criou nenhuma categoria, clique no ícone a direita
            para adicionar uma nova.
          </p>
        )}
      </nav>
      <section className="flex justify-center items-center mr-3">
        <div className="bg-cyan-500 p-1 rounded cursor-pointer hover:bg-cyan-400/60 ease-in duration-100 shadow-2xl">
          <Link href="/dashboard/category/new">
            <FiPlus color="#ffff" size={28} />
          </Link>
        </div>
      </section>
    </header>
  );
}
