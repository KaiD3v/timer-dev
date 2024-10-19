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
    <header className="flex justify-between h-14 bg-blue-500 mt-10 rounded shadow-2xlg">
      <nav className="flex justify-center items-center ml-3">
        {categories.length > 0 && (
          <ul className="flex font-semibold text-white gap-6">
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
          <p>
            Você ainda não criou nenhum categoria, clique no ícone a direita
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
