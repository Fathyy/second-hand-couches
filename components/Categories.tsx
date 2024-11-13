import React from "react";
import modernSofa from "@/public/assets/categoryOne.jpg";
import vintageSofa from "@/public/assets/categoryTwo.jpg";
import leatherSofa from "@/public/assets/categoryThree.jpg";
import Image from "next/image";

const categories = [
  { id: 1, title: "Modern & Contemporary", image: modernSofa },
  { id: 2, title: "Mid-Century Modern", image: vintageSofa },
  { id: 3, title: "Leather Sofas", image: leatherSofa },
];

const Categories = () => {
  return (
    <div className="my-12">
      <h1 className="text-rust-orange text-3xl font-bold text-center mb-4">
        Choose by Categories
      </h1>
      <div className="border-t-2 border-rust-orange mx-auto w-20 mb-8"></div>

      <div className="flex justify-center gap-6">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center space-y-3">
            <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md transition-transform transform hover:scale-105">
              <Image src={category.image} alt="couch" layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-gray-200 opacity-20 rounded-full" />
            </div>
            <h2 className="text-lg font-semibold text-center">{category.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
