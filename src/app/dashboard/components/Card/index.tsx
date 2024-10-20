"use client";

import { useContext } from "react";
import { formatTime } from "../../../../functions/formatTime";
import { ProjectProps } from "../../../../utils/project.type";
import { ModalContext } from "../../../../providers/modal";

interface ProjectCardProps {
  project: ProjectProps;
}

export function DashboardCard({ project }: ProjectCardProps) {
  const { handleModalVisible, visible, setProjectDetail } =
    useContext(ModalContext);

  function toggleModal() {
    setProjectDetail(project);
    handleModalVisible();
  }

  return (
    <main className="flex w-full items-center justify-center bg-blue-600 rounded-lg max-w-sm min-h-40 shadow-lg p-6">
      <section className="flex flex-col bg-white rounded-lg p-4 w-full text-center justify-center items-center shadow-md">
        <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
        <p className="text-lg text-gray-700 font-medium">
          {" "}
          {formatTime(project.timer || 0)}h
        </p>
        <div className="mt-4">
          <button
            onClick={toggleModal}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Saiba Mais
          </button>
        </div>
      </section>
    </main>
  );
}
