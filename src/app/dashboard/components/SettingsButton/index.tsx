"use client";

import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FiEdit, FiTrash } from "react-icons/fi";

export function SettingsButton() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => setIsMenuOpened((prev) => !prev);

  return (
    <div className="absolute inline-block right-0">
      <CiSettings
        className="cursor-pointer text-gray-600 hover:text-gray-800 transition-transform duration-150 ease-in-out hover:scale-110"
        size={28}
        onClick={toggleMenu}
      />
      {isMenuOpened && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-10 animate-fade-in">
          <ul className="space-y-2">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
              <FiTrash size={20} className="text-red-500" />
              <span>Deletar</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
              <FiEdit size={20} className="text-blue-500" />
              <span>Editar</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
