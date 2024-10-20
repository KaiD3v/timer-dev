import prismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { redirect } from "next/navigation";
import { DashboardCard } from "../../components/Card";
import Link from "next/link";

export default async function CategoryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    redirect("/");
  }

  const projectAuthor = await prismaClient.user.findUnique({
    where: { id: session.user.id },
  });

  if (!projectAuthor) {
    redirect("/");
  }

  const categoryProjects = await prismaClient.project.findMany({
    where: { userId: session.user.id, categoryId: id },
  });
  console.log(categoryProjects);

  return (
    <main className="flex flex-col">
      <section className="grid grid-cols-1 justify-items-center gap-5 mt-5 sm:justify-items-stretch sm:grid-cols-2 md:grid-cols-3">
        {categoryProjects.length > 0 &&
          categoryProjects.map((project) => (
            <DashboardCard project={project} />
          ))}
      </section>
      {categoryProjects.length === 0 && (
        <p>
          Você ainda não possui nenhum projeto nesta categoria,{" "}
          <Link
            className="text-blue-600 hover:underline"
            href={"/dashboard/project/new"}
          >
            clique aqui para adicionar
          </Link>
        </p>
      )}
    </main>
  );
}
