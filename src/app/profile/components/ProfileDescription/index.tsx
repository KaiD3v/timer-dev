"use client";

import { BiEdit } from "react-icons/bi";
import { ProfileProps } from "../../../../utils/profile.type";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { api } from "../../../../lib/api";
import { useState } from "react";
import { LuCheckCheck } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface ProfileDescriptionProps {
  profile: ProfileProps;
}

// Validação do formulário usando Zod
const schema = z.object({
  description: z.string().min(1, "É obrigatório fornecer a descrição!"),
});

type FormData = z.infer<typeof schema>;

export function ProfileDescription({ profile }: ProfileDescriptionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: { description: profile?.description || "" },
  });

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleForm() {
    setIsOpen(!isOpen);
  }

  async function handleUpdateDescription(data: FormData) {
    try {
      await api.patch(`/api/v1/profile`, {
        description: data.description,
      });
      handleToggleForm();
      toast.success("Descrição atualizada com sucesso!", {
        style: { background: "lime", color: "white" },
      });
      reset({ description: data.description });
      return router.refresh();
    } catch (error) {
      toast.error(errors.description?.message as string, {
        style: { background: "red", color: "white" },
      });
      console.error("Erro ao atualizar descrição:", error);
    }
  }

  return (
    <div className="flex justify-between items-center">
      {!isOpen ? (
        <p className="text-gray-600 mt-2">
          {`"${profile?.description || "Sem Descrição..."}"`}
        </p>
      ) : (
        <form
          className="flex flex-col sm:flex-row items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-md w-full"
          onSubmit={handleSubmit(handleUpdateDescription)}
        >
          <textarea
            {...register("description")}
            className="border border-gray-300 rounded-lg p-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            rows={3}
            placeholder="Digite a descrição..."
          />
          <button
            type="submit"
            className="p-2 bg-green-500 hover:bg-green-600 rounded-full transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <LuCheckCheck size={26} className="text-white" />
          </button>
        </form>
      )}

      <BiEdit
        onClick={handleToggleForm}
        className={`cursor-pointer hover:text-green-500 ${
          isOpen ? "text-green-500" : ""
        }`}
        size={26}
      />
    </div>
  );
}
