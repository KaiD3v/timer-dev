import { getServerSession } from "next-auth";
import Image from "next/image";
import prismaClient from "@/lib/prisma";
import { formatTime } from "../../../functions/formatTime";

export default async function ProfilePublicPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = await prismaClient.user.findUnique({ where: { id } });

  const userProfile = await prismaClient.profile.findUnique({
    where: { userId: id },
  });

  const userProjects = await prismaClient.project.findMany({
    where: { userId: id },
    include: { category: true },
  });

  const userCategories = await prismaClient.category.findMany({
    where: { userId: id },
  });

  const totalHours = userProjects.reduce((acc, project) => {
    return acc + (project.timer || 0);
  }, 0);
  return (
    <main className="min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] overflow-auto bg-gray-100 text-gray-900 p-8">
      <article className="flex items-center gap-6 mb-8 p-6 bg-white rounded-lg shadow-md">
        <Image
          src={user?.image as string}
          alt="user profile"
          width={125}
          height={125}
          className="rounded-full border-4 border-blue-400"
        />
        <div>
          <h1 className="text-xl sm:text-3xl font-bold">{user?.name}</h1>
          <p>"{userProfile?.description}"</p>
        </div>
      </article>

      <hr className="my-6 border-gray-300" />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-xl font-semibold">Projetos Atuais</p>
          <p className="text-4xl font-bold mt-2 text-blue-500">
            {userProjects.length || 0}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-xl font-semibold">Categorias Totais</p>
          <p className="text-4xl font-bold mt-2 text-green-500">
            {userCategories.length || 0}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-xl font-semibold">Tempo Dedicado</p>
          <p className="text-4xl font-bold mt-2 text-purple-500">
            {formatTime(totalHours)}
          </p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg overflow-auto shadow-md max-h-full">
        <h1 className="text-2xl font-bold mb-4">Projetos</h1>
        {userProjects.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="p-3 text-sm font-semibold text-gray-700">
                  Projeto
                </th>
                <th className="p-3 text-sm font-semibold text-gray-700">
                  Categoria
                </th>
                <th className="p-3 text-sm font-semibold text-gray-700">
                  Tempo Dedicado
                </th>
                <th className="p-3 hidden sm:block  text-sm font-semibold text-gray-700">
                  Atualizado
                </th>
              </tr>
            </thead>
            <tbody>
              {userProjects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-gray-100 transition-colors"
                >
                  <td className="p-3 text-sm">{project.name || "Sem Nome"}</td>
                  <td className="p-3 text-sm">
                    {project.category?.name || "Sem Categoria"}
                  </td>
                  <td className="p-3  text-sm">
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
          <p className="text-center text-gray-500 mt-4">
            Não há projetos cadastrados.
          </p>
        )}
      </section>
    </main>
  );
}
