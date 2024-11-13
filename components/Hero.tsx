import Image from "next/image";
import React from "react";
import heroImage from "@/public/assets/hero_imagee.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex items-center justify-between h-screen">
      <div className="space-y-9 text-center lg:text-start w-2/3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:leading-[66px] text-dark-grey">
          Your Number One <br /> Second Hand <br />Couch Shop
        </h1>
        <p className="text-dark-grey font-normal text-lg md:text-xl md:leading-[22px]">
          Discover top-quality, gently used couches at unbeatable prices. <br /> We’re
          your go-to shop for comfortable, stylish second-hand couches, <br />perfect
          for any home. Shop our curated selection <br /> and find your ideal couch
          today!
        </p>
        <div className="flex items-center gap-6">
          <button className="px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 py-2 sm:py-2 md:py-3 lg:py-3 xl:py-3 rounded-2xl bg-rust-orange text-light-grey">
            Learn More
          </button>
          <button className="px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 py-2 sm:py-2 md:py-3 lg:py-3 xl:py-3 rounded-2xl border border-rust-orange text-rust-orange bg-transparent">
            Discover More
          </button>
        </div>
      </div>
      <div className="w-1/3">
        <Image src={heroImage} width={500} height={500} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
