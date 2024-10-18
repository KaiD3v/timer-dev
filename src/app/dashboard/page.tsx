import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";

import prismaClient from "@/lib/prisma";
import { DashboardCard } from "./components/Card";
import Link from "next/link";
import { ProjectProps } from "../../utils/project.type";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  const projects: ProjectProps[] = await prismaClient.project.findMany({
    where: { userId: session.user.id },
  });

  return (
    <main className="flex flex-col">
      <header className="flex justify-between pt-2">
        <h1 className="text-2xl font-semibold">Projetos</h1>
        <button className="bg-blue-500 text-white font-semibold hover:bg-blue-500/80 ease-in duration-100 shadow-2xl py-1 px-6 rounded">
          Adicionar
        </button>
      </header>
      <section className="grid grid-cols-1 justify-items-center gap-5 mt-5 sm:justify-items-stretch sm:grid-cols-2 md:grid-cols-3">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </section>
    </main>
  );
}
