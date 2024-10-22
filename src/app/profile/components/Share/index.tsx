"use client";

import { FaShareFromSquare } from "react-icons/fa6";
import { toast } from "sonner";

export function ShareComponent({ id }: { id: string }) {
  const copyLink = `${process.env.NEXT_PUBLIC_HOST_URL}/profile/${id}`;
  function handleShare() {
    navigator.clipboard.writeText(copyLink);
    toast.success("Link do perfil copiado para a área de transferência!", {
      style: { background: "lime", color: "white" },
    });
  }
  return (
    <button onClick={handleShare}>
      <FaShareFromSquare className="cursor-pointer" size={26} />
    </button>
  );
}
