import React from "react";
import { FaTools } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

const whyChooseUs = [
  {
    id: 1,
    title: "Expert Craftsmanship",
    description:
      "Our team brings years of experience in restoring and refurbishing couches with attention to detail. We ensure each piece is carefully inspected and refined to meet our high standards.",
    icon: FaTools,
  },
  {
    id: 2,
    title: "Affordable Luxury",
    description:
      "Enjoy premium-quality couches at a fraction of the cost. We offer a wide range of styles and designs, making it easy to find something you love without breaking the bank.",
    icon: FaDollarSign,
  },
  {
    id: 3,
    title: "Eco-Friendly Choice",
    description:
      "By choosing second-hand furniture, you’re helping reduce waste and carbon footprint. Our sustainable approach supports a greener planet, making your purchase an environmentally conscious choice.",
    icon: FaLeaf,
  },
];

type Props = {};

const WhyChooseUs = (props: Props) => {
  return (
    <div className="my-24">
      <h1 className="text-rust-orange text-3xl font-bold text-center mb-4">
        Why Choose Us
      </h1>

      <div className="border-t-2 border-rust-orange mx-auto w-20 mb-8"></div>

      <div className="flex justify-center gap-6">
        {whyChooseUs.map((item) => (
          <div key={item.id} className="flex flex-col items-center space-y-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-rust-orange text-light-grey">
              <item.icon size={32} />
            </div>
            <h2 className="text-lg font-semibold text-center">{item.title}</h2>
            <p className="text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
