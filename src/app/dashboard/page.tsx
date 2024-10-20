import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";

import prismaClient from "@/lib/prisma";
import { CategoryCard } from "./components/CategoryCard";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  const categories = await prismaClient.category.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
    include: { projects: true },
  });

  const categoriesWithTotalHours = categories.map((category) => {
    const totalHours = category.projects.reduce((sum, project) => {
      const projectHours = project.timer ? Number(project.timer) : 0;
      return sum + projectHours;
    }, 0);

    return { ...category, totalHours };
  });

  return (
    <main className="flex flex-col">
      <section className="flex flex-col items-center justify-center sm:mx-0 sm:grid gap-5 mt-5 sm:justify-items-stretch sm:grid-cols-2 md:grid-cols-3">
        {categories.length > 0 &&
          categoriesWithTotalHours.map((category) => (
            <CategoryCard
              key={category.id}
              totalHours={category.totalHours}
              category={category}
            />
          ))}
      </section>
    </main>
  );
}
