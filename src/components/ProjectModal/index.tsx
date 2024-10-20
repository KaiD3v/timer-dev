"use client";

import { useContext, useState, useEffect, useRef } from "react";
import { ModalContext } from "../../providers/modal";
import { FaTimes } from "react-icons/fa";
import { formatTime } from "../../functions/formatTime";
import { BiCheck } from "react-icons/bi";

export function ProjectModal() {
  const { handleModalVisible, project } = useContext(ModalContext);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      console.log(time);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, time]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

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
          <h2 className="text-lg font-medium text-gray-700">Sessão</h2>
          <p className="text-4xl font-mono text-gray-800">{formatTime(time)}</p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleReset}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition"
            >
              Reset
            </button>
            {isRunning ? (
              <button
                onClick={handlePause}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
              >
                Pausar
              </button>
            ) : (
              <button
                onClick={handleStart}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
              >
                Iniciar
              </button>
            )}
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
              <BiCheck size={24} />
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
