import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import prismaClient from "../../lib/prisma";
import { formatTime } from "../../functions/formatTime";
import { BiEdit } from "react-icons/bi";
import { ProfileDescription } from "./components/ProfileDescription";
import { ProfileProps } from "../../utils/profile.type";
import { ShareComponent } from "./components/Share";

export default async function ProfilePrivatePage() {
  const session = await getServerSession(authOptions);
  if (!session || !session?.user) {
    redirect("/");
  }

  const userProfile = await prismaClient.profile.findUnique({
    where: { userId: session?.user.id },
  });

  const userProjects = await prismaClient.project.findMany({
    where: { userId: session?.user?.id },
    include: { category: true },
  });

  const userCategories = await prismaClient.category.findMany({
    where: { userId: session?.user?.id },
  });

  const totalHours = userProjects.reduce((acc, project) => {
    return acc + (project.timer || 0);
  }, 0);

  return (
    <main className="dark:bg-gray-900 min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] overflow-auto bg-gray-100 text-gray-900 dark:text-gray-100 p-8 transition-colors duration-300">
      <article className="flex items-center gap-6 mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <Image
          src={session?.user?.image as string}
          alt="user profile"
          width={125}
          height={125}
          className="rounded-full border-4 border-blue-400"
        />
        <div>
          <h1 className="flex items-center justify-between text-xl sm:text-3xl font-bold">
            <span>{session?.user?.name}</span>
            <ShareComponent id={session?.user?.id as string} />
          </h1>
          <ProfileDescription profile={userProfile as ProfileProps} />
        </div>
      </article>

      <hr className="my-6 border-gray-300 dark:border-gray-700" />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <p className="text-xl font-semibold">Projetos Atuais</p>
          <p className="text-4xl font-bold mt-2 text-blue-500 dark:text-blue-400">
            {userProjects.length || 0}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <p className="text-xl font-semibold">Categorias Totais</p>
          <p className="text-4xl font-bold mt-2 text-green-500 dark:text-green-400">
            {userCategories.length || 0}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <p className="text-xl font-semibold">Tempo Dedicado</p>
          <p className="text-4xl font-bold mt-2 text-purple-500 dark:text-purple-400">
            {formatTime(totalHours)}
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 p-8 rounded-lg overflow-auto shadow-md max-h-full">
        <h1 className="text-2xl font-bold mb-4">Projetos</h1>
        {userProjects.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-400">
                  Projeto
                </th>
                <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-400">
                  Categoria
                </th>
                <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-400">
                  Tempo Dedicado
                </th>
                <th className="p-3 hidden sm:block text-sm font-semibold text-gray-700 dark:text-gray-400">
                  Atualizado
                </th>
              </tr>
            </thead>
            <tbody>
              {userProjects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="p-3 text-sm">{project.name || "Sem Nome"}</td>
                  <td className="p-3 text-sm">
                    {project.category?.name || "Sem Categoria"}
                  </td>
                  <td className="p-3 text-sm">
                    {formatTime(project.timer || 0)}
                  </td>
                  <td className="p-3 text-sm hidden sm:block">
                    {new Date(project.updatedAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
            Não há projetos cadastrados.
          </p>
        )}
      </section>
    </main>
  );
}
