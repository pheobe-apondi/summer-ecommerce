"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface CategoryCardProps {
  icon: IconDefinition;
  label: string;
}

export default function CategoryCard({ icon, label }: CategoryCardProps) {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      className={`
        w-50 h-50 flex flex-col items-center justify-center rounded-lg border transition-colors
        ${active ? "bg-red-500 text-white" : "bg-white text-black border-gray-300 hover:bg-red-500 hover:text-white"}
      `}
    >
      <FontAwesomeIcon icon={icon} className="text-5xl mb-10" />
      <span className="font-medium ">{label}</span>
    </button>
  );
}
