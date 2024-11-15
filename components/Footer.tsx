import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="py-12 text-light-grey">
      <div className="flex items-center justify-between gap-6">
        <div className="mb-6 md:mb-0 flex-[3]">
          <h2 className="text-2xl font-bold">Coach Tub</h2>
          <p className="mt-2">
            Discover comfort and style with <br /> our premium collection of
            sofas and couches, <br /> crafted to elevate your living space.
          </p>
        </div>
        <div className="mb-6 md:mb-0 flex-1">
          <h3 className="text-xl font-semibold">CONTACT US</h3>
          <p className="mt-2">hello@coachset.co</p>
          <p>Nairobi, Kenya</p>
          <p>Coach Sets</p>
          <p>+123 456 789 90</p>
        </div>

        <div className="mb-6 md:mb-0 flex-1">
          <h3 className="text-xl font-semibold">LINKS</h3>
          <div className="mt-2 space-y-2">
            <p>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </p>
            <p>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </p>
            <p>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </p>
            <p>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">FOLLOW US</h3>
          <p className="mt-2">Yes, we are social!</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-light-grey">
              <FaFacebookF />
            </a>
            <a href="#" className="text-light-grey">
              <FaTwitter />
            </a>
            <a href="#" className="text-light-grey">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 mt-6" />
      <div className="text-center mt-8">
        <p className="text-light-grey">
          © 2016 Dreamy Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
