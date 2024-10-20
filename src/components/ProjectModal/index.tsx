"use client";

import { useContext } from "react";
import { ModalContext } from "../../providers/modal";
import { FaTimes } from "react-icons/fa"; // Importando ícone de fechar

export function ProjectModal() {
  const { handleModalVisible, project } = useContext(ModalContext);

  return (
    <section className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 space-y-6">
        <header className="flex justify-between items-center border-b pb-4">
          <h1 className="text-xl font-semibold text-gray-800">
            {project?.name || "Projeto Sem Nome"}
          </h1>
          <button
            onClick={handleModalVisible}
            className="text-gray-500 hover:text-red-600 transition"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </header>

        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-lg font-medium text-gray-700">Timer</h2>
          <p className="text-4xl font-mono text-gray-800">00:00</p>

          <div className="flex gap-4 mt-4">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition">
              Reset
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
              Iniciar
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
              Cancelar
            </button>
          </div>
        </div>

        <footer className="text-center pt-4 border-t text-sm text-gray-500">
          <p>Gerencie seu projeto com eficiência!</p>
        </footer>
      </div>
    </section>
  );
}
