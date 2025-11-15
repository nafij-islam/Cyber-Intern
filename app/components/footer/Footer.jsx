import React from "react";
import Image from "next/image";
import animateone from "../../../public/animateone.png";
import animatetwo from "../../../public/animatetwo.png";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="pt-30 pb-10">
      <div className="max-w-[1320px] relative m-auto">
        <div>
          <Image
            className="absolute -top-38  -left-30"
            src={animateone}
            alt=""
          />
          <Image
            className="absolute -top-38  -right-30"
            src={animatetwo}
            alt=""
          />
        </div>
        <div>
          <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="col-span-2 row-span-5">
              <div>
                <h2 className="text-[22px] font-semibold pb-[30px]">
                  Cyber.AI - Cyber Punk Website
                </h2>
                <p className="text-[18px] font-medium w-[420px] leading-8 text-[#CBCBCB]">
                  Explore the high-tech, low-life world where the lines between
                  humanity{" "}
                </p>
              </div>
            </div>
            <div className="row-span-5 col-start-3">
              <div>
                <h3 className="text-[18px] font-medium pb-[9px]">
                  Information
                </h3>
                <ul className="flex flex-col gap-1">
                  <li className="text-[15px] font-normal text-[#CBCBCB]">
                    Press Centre
                  </li>
                  <li className="text-[15px] font-normal text-[#CBCBCB]">
                    Our Blog
                  </li>
                  <li className="text-[15px] font-normal text-[#CBCBCB]">
                    Term and Condition
                  </li>
                </ul>
              </div>
            </div>
            <div className="row-span-5 col-start-4">
              <div>
                <h3 className="text-[18px] font-medium pb-[9px]">Menu</h3>
                <ul className="flex flex-col gap-1">
                  <li className="text-[15px] font-normal text-[#CBCBCB]">
                    About
                  </li>
                  <li className="text-[15px] font-normal text-[#CBCBCB]">
                    Services{" "}
                  </li>
                  <li className="text-[15px] font-normal text-[#CBCBCB]">
                    Blog
                  </li>
                </ul>
              </div>
            </div>
            <div className="row-span-5 col-start-5">
              <div>
                <h3 className="text-[18px] font-medium pb-[9px] ">Contact</h3>
                <ul className="flex flex-col gap-1">
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
        <footer className="bg-black pt-20">
          <div className="max-w-[1320px] mx-auto flex items-center justify-between text-white">
            <p className="text-[14px] text-gray-300">
              © Cyber.AI – Cyber Punk 2024. All rights reserved.
            </p>

            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-gray-300 hover:text-[#e06609] transition"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#e06609] transition"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#e06609] transition"
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
