import React from "react";
import Image from "next/image";
import animateone from "../../../public/animateone.png";
import animatetwo from "../../../public/animatetwo.png";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="pt-16 md:pt-30 pb-10 overflow-hidden border-t border-[#E03609]/20">
      <div className="max-w-[1320px] relative mx-auto px-4 md:px-6 xl:px-0">
        <div>
          <Image
            className="absolute -top-38 -left-30 hidden xl:block pointer-events-none"
            src={animateone}
            alt=""
          />
          <Image
            className="absolute -top-38 -right-30 hidden xl:block pointer-events-none"
            src={animatetwo}
            alt=""
          />
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
            <div className="col-span-1 sm:col-span-2">
              <div>
                <h2 className="text-[20px] md:text-[22px] font-bold pb-4 md:pb-[30px] text-white">
                  Cyber.AI - Cyber Punk Website
                </h2>
                <p className="text-[16px] md:text-[18px] font-medium w-full max-w-[420px] leading-8 text-[#CBCBCB]">
                  Explore the high-tech, low-life world where the lines between
                  humanity{" "}
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-[18px] font-semibold pb-4 text-white">
                  Information
                </h3>
                <ul className="flex flex-col gap-2">
                  <li className="text-[15px] font-normal text-[#CBCBCB] hover:text-[#e06609] transition cursor-pointer">
                    Press Centre
                  </li>
                  <li className="text-[15px] font-normal text-[#CBCBCB] hover:text-[#e06609] transition cursor-pointer">
                    Our Blog
                  </li>
                  <li className="text-[15px] font-normal text-[#CBCBCB] hover:text-[#e06609] transition cursor-pointer">
                    Term and Condition
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-[18px] font-semibold pb-4 text-white">Menu</h3>
                <ul className="flex flex-col gap-2">
                  <li className="text-[15px] font-normal text-[#CBCBCB] hover:text-[#e06609] transition cursor-pointer">
                    About
                  </li>
                  <li className="text-[15px] font-normal text-[#CBCBCB] hover:text-[#e06609] transition cursor-pointer">
                    Services{" "}
                  </li>
                  <li className="text-[15px] font-normal text-[#CBCBCB] hover:text-[#e06609] transition cursor-pointer">
                    Blog
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-[18px] font-semibold pb-4 text-white">Contact</h3>
                <ul className="flex flex-col gap-2">
                  <li className="text-[15px] font-normal text-[#CBCBCB]">
                    Phone : +123 456 789
                  </li>
                  <li className="text-[15px] font-normal text-[#CBCBCB]">
                    Email : @example.com
                  </li>
                  <li className="text-[15px] font-normal text-[#CBCBCB]">
                    Address Line 01
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-black pt-12 md:pt-20">
          <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white text-center md:text-left">
            <p className="text-[14px] text-gray-400">
              © Cyber.AI – Cyber Punk 2024. All rights reserved.
            </p>

            <div className="flex items-center gap-6 md:gap-8">
              <a
                href="#"
                className="text-gray-400 hover:text-[#e06609] transition text-sm font-medium"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#e06609] transition text-sm font-medium"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#e06609] transition text-sm font-medium"
              >
                Cookies
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="
            w-10 h-10 rounded-full border border-gray-600 
            flex items-center justify-center text-gray-300
            hover:border-[#e06609] hover:text-[#e06609] 
            hover:shadow-[0_0_10px_#e06609] 
            transition duration-300 cursor-pointer
          "
              >
                <FaLinkedinIn size={16} />
              </div>

              <div
                className="
            w-10 h-10 rounded-full border border-gray-600 
            flex items-center justify-center text-gray-300
            hover:border-[#e06609] hover:text-[#e06609] 
            hover:shadow-[0_0_10px_#e06609] 
            transition duration-300 cursor-pointer
          "
              >
                <FaFacebookF size={16} />
              </div>

              <div
                className="
            w-10 h-10 rounded-full border border-gray-600 
            flex items-center justify-center text-gray-300
            hover:border-[#e06609] hover:text-[#e06609] 
            hover:shadow-[0_0_10px_#e06609] 
            transition duration-300 cursor-pointer
          "
              >
                <FaTwitter size={16} />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
