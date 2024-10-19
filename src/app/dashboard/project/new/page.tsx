import { useEffect } from "react";
import { api } from "../../../../lib/api";
import { NewProjectForm } from "../components/Form";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { redirect } from "next/navigation";
import prismaClient from "@/lib/prisma";

export default async function NewProjectPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  const categories = await prismaClient.category.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return (
    <div className="flex justify-center items-center w-full h-full my-auto">
      <NewProjectForm categories={categories} />
    </div>
  );
}
