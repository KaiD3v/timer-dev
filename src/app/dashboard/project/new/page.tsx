import { useEffect } from "react";
import { api } from "../../../../lib/api";
import { NewProjectForm } from "../components/Form";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { redirect } from "next/navigation";

export default async function NewProjectPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center w-full h-full my-auto">
      <NewProjectForm />
    </div>
  );
}
