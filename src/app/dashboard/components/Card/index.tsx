"use client";

import { useContext } from "react";
import { formatTime } from "../../../../functions/formatTime";
import { ProjectProps } from "../../../../utils/project.type";
import { ModalContext } from "../../../../providers/modal";
import { SettingsButton } from "../SettingsButton";

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
    <main className="card flex w-full items-center justify-center bg-blue-600 rounded-lg max-w-sm min-h-40 shadow-lg p-6">
      <section className="flex flex-col bg-white rounded-lg p-4 w-full text-center justify-center items-center shadow-md">
        <header className="flex relative w-full justify-center items-center">
          <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
          <SettingsButton project={project} />
        </header>
        <p className="text-lg text-gray-700 font-medium">
          {" "}
          {formatTime(project.timer || 0)}
        </p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={toggleModal}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Iniciar
          </button>
        </div>
      </section>
    </main>
  );
}
