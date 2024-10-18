"use client";

import { ProjectProps } from "../../../../utils/project.type";

interface ProjectCardProps {
  project: ProjectProps;
}

export function DashboardCard() {
  return (
    <main className="flex items-center justify-center bg-blue-600 rounded-lg max-w-sm min-h-40 shadow-lg p-6">
      <section className="flex flex-col bg-white rounded-lg p-4 w-full justify-center items-center shadow-md">
        <h1 className="text-2xl font-bold mb-2">
          Programação Python
        </h1>
        <p className="text-lg text-gray-700 font-medium">1000h</p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
            Saiba Mais
          </button>
        </div>
      </section>
    </main>
  );
}
