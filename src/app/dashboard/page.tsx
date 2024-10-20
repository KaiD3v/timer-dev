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
      <section className="grid grid-cols-1 justify-items-center gap-5 mt-5 sm:justify-items-stretch sm:grid-cols-2 md:grid-cols-3">
       
      </section>
    </main>
  );
}
