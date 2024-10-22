"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { api } from "../../../../../lib/api";
import { CategoryProps } from "../../../../../utils/category.props";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(1, "O nome é obrigatório!"),
  category: z.string().min(1, "A categoria é obrigatória!"),
});

type FormData = z.infer<typeof schema>;

interface CategoryFormProps {
  categories: CategoryProps[];
}

export function NewProjectForm({ categories }: CategoryFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  async function handleRegisterProject(data: FormData) {
    const response = await api.post("/api/v1/projects", {
      name: data.name,
      category: data.category,
    });

    router.refresh();
    toast.success("Projeto criado com sucesso!", { style: { background: "lime", color: "white" } });
    router.replace(`/dashboard/category/${data.category}`);
  }

  return (
    <form
      onSubmit={handleSubmit(handleRegisterProject)}
      className="flex flex-col bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mt-11"
    >
      <header className="mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Novo Projeto</h1>
        <p className="text-gray-600">
          Adicione um novo projeto para se dedicar!
        </p>
      </header>
      <main className="flex flex-col space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome do Projeto
          </label>
          <input
            type="text"
            placeholder="Digite o nome do seu projeto"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name")}
            required
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="category" className="block font-semibold text-sm">
            Categoria do Projeto
          </label>
          {categories.length === 0 && (
            <p>
              Nenhuma categoria encontrada,{" "}
              <Link
                className="text-blue-600 hover:underline"
                href="/dashboard/category/new"
              >
                cadastre uma.
              </Link>
            </p>
          )}
          {categories.length > 0 && (
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("category")}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          )}
          {errors.category && (
            <span className="text-red-500 text-sm">
              {errors.category.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Criar
        </button>
      </main>
    </form>
  );
}
