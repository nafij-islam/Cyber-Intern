"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logomenu.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuitem = [
    { id: 1, url: "/", title: "Home" },
    { id: 2, url: "/pages", title: "Pages" },
    { id: 3, url: "/support", title: "Support" },
    { id: 4, url: "/contact", title: "Contact" },
  ];

  return (
    <section className="py-5 md:py-7 border-b border-[#E03609] bg-[#0B0B0B] sticky top-0 z-50">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 xl:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="z-50">
            <Image src={logo} alt="Logo" className="w-[100px] md:w-[120px] h-auto" />
          </div>

          {/* Desktop Menu */}
          <ul className="text-white hidden md:flex items-center gap-10">
            {menuitem.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="hover:text-[#E03609] transition-colors duration-200 font-medium"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="text-white rounded-lg bg-linear-to-r from-[#F0B71F] to-[#E03609] py-[13px] px-[21px] font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(224,54,9,0.5)] transition-all duration-300">
              Get started free
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-[#0b0b0be8] backdrop-blur-md z-45 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <ul className="text-white flex flex-col items-center gap-8 text-xl">
            {menuitem.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#E03609] transition-colors duration-200 font-semibold tracking-wider"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <button className="text-white rounded-lg bg-linear-to-r from-[#F0B71F] to-[#E03609] py-[13px] px-[28px] font-semibold text-lg cursor-pointer">
              Get started free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navber;
