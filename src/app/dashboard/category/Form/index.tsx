"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../../../lib/api";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(1, "O nome é obrigatório!"),
});

type FormData = z.infer<typeof schema>;

export function NewCategoryForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  async function handleRegisterCategory(data: FormData) {
    try {
      const response = await api.post("/api/v1/categories", {
        name: data.name,
      });

      router.refresh();
      setInterval(() => {
        router.replace("/dashboard");
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleRegisterCategory)}
      className="flex flex-col bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mt-11"
    >
      <header className="mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Novo Catagoria</h1>
        <p className="text-gray-600">Adicione uma nova categoria!</p>
      </header>
      <main className="flex flex-col space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome da Categoria
          </label>
          <input
            type="text"
            placeholder="Digite o nome da categoria"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name")}
            required
          />
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
