"use client";

import { FaShareFromSquare } from "react-icons/fa6";

export function ShareComponent({ id }: { id: string }) {
  const copyLink = `${process.env.NEXT_PUBLIC_HOST_URL}/profile/${id}`;
  function handleShare() {
    navigator.clipboard.writeText(copyLink);
    alert("Link do perfil copiado para a área de transferência!");
  }
  return (
    <button onClick={handleShare}>
      <FaShareFromSquare className="cursor-pointer" size={26} />
    </button>
  );
}
