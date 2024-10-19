import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { redirect } from "next/navigation";
import { NewCategoryForm } from "../Form";

export default async function NewCategoryPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center w-full h-full my-auto">
      <NewCategoryForm />
    </div>
  );
}
