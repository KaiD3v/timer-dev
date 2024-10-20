import prismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { redirect } from "next/navigation";

export default async function CategoryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  const projectAuthor = await prismaClient.user.findUnique({
    where: { id: session?.user.id },
  });

  if (!session || !session.user || session.user.id !== projectAuthor?.id) {
    redirect("/");
  }

  const categoryProjects = await prismaClient.project.findMany({
    where: { userId: session.user.id },
  });
  console.log(categoryProjects);

  return (
    <div>
      <h1>ID: {id}</h1>
    </div>
  );
}
