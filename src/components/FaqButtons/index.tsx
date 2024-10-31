"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface FaqButtonProps {
  title: string;
  description: string;
}

export function FaqButton({ title, description }: FaqButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleButton() {
    setIsOpen(!isOpen);
  }
  return (
    <div id="faq" className="dark:text-white flex flex-col w-full gap-1">
      <hr className="w-full border-gray-300" />
      <button
        onClick={handleToggleButton}
        className="flex w-full rounded justify-between items-center p-4 hover:bg-slate-300/50 ease-out duration-100"
      >
        <span className="font-bold dark:text-white text-gray-700 text-xl">
          {title}
        </span>
        {!isOpen && <IoIosArrowDown size={26} />}
        {isOpen && <IoIosArrowUp size={26} />}
      </button>
      {isOpen && (
        <section className="ml-4">
          <p className="dark:text-white text-gray-600">{description}</p>
        </section>
      )}
    </div>
  );
}
