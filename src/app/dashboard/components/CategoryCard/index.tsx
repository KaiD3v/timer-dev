"use client";

import Link from "next/link";
import { formatTime } from "../../../../functions/formatTime";
import { CategoryProps } from "../../../../utils/category.props";

interface CategoryCardProps {
  category: CategoryProps;
  totalHours: number;
}

export function CategoryCard({ category, totalHours }: CategoryCardProps) {
  return (
    <main className="flex w-full items-center justify-center bg-blue-600 rounded-lg max-w-sm min-h-40 shadow-lg p-6">
      <Link className="w-full" href={`/dashboard/category/${category.id}`}>
        <section className="flex flex-col bg-white rounded-lg p-4 w-full text-center justify-center items-center shadow-md">
          <h1 className="text-2xl font-bold mb-2">{category.name}</h1>
          <p className="text-lg text-gray-700 font-medium">
            {formatTime(totalHours)}
          </p>
        </section>
      </Link>
    </main>
  );
}
