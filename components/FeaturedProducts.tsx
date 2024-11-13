import React from "react";
import firstCoach from "@/public/assets/firstCoach.jpg";
import secondCoach from "@/public/assets/secondCoach.jpg";
import thirdCoach from "@/public/assets/thirdCoach.jpg";
import Image from "next/image";

type Props = {};

const couches = [
  {
    id: 1,
    title: "Mid-Century Modern Velvet Sofa",
    price: 350,
    image: firstCoach,
  },
  {
    id: 2,
    title: "Rustic Leather Chesterfield Couch",
    price: 500,
    image: secondCoach,
  },
  {
    id: 3,
    title: "Compact Scandinavian Sleeper Sofa",
    price: 275,
    image: thirdCoach,
  },
];

const FeaturedProducts = (props: Props) => {
  return (
    <div className="mb-12">
      <h1 className="text-rust-orange text-3xl font-bold text-center mb-4">
        Our Featured Products
      </h1>
      <div className="border-t-2 border-rust-orange mx-auto w-20 mb-8"></div>

      <div className="flex items-center gap-4">
        {couches.map((couch) => (
          <div
            key={couch.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <Image src={couch.image} alt="couch" />
            <div className="my-6 space-y-3 flex flex-col justify-center items-center">
              <h2 className="text-lg font-semibold">
                {couch.title}
              </h2>
              <p className="">${couch.price}</p>
              <button className="px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 py-2 sm:py-2 md:py-3 lg:py-3 xl:py-3 rounded-2xl bg-rust-orange text-light-grey">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
