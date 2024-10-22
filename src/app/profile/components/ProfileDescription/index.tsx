"use client";

import { BiEdit } from "react-icons/bi";
import { ProfileProps } from "../../../../utils/profile.type";

interface ProfileDescriptionProps {
  profile: ProfileProps;
}

export function ProfileDescription({ profile }: ProfileDescriptionProps) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-600 mt-2">
        {profile?.description || "Sem Descrição..."}
      </p>
      <BiEdit className="cursor-pointer hover:text-green-500" size={26} />
    </div>
  );
}
