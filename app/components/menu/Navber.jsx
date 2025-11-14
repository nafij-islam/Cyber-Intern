import React from "react";
import Image from "next/image";
import logo from "../../../public/logomenu.png";

const Navber = () => {
  const menuitem = [
    { id: 1, url: "/", title: "Home" },
    { id: 2, url: "/pages", title: "Pages" },
    { id: 3, url: "/support", title: "Support" },
    { id: 4, url: "/contact", title: "Contact" },
  ];

  return (
    <section className="py-7 border-b border-[#E03609] bg-[#0B0B0B]">
      <div className="max-w-[1320px] mx-auto ">
        <div className="flex items-center justify-between">
          <div>
            <Image src={logo} alt="Logo" className="w-[120px] h-auto" />
          </div>
          <ul className="text-white flex gap-10">
            {menuitem.map((item) => (
              <li key={item.id}>
                <a href={item.url} className="hover:text-[#E03609] transition-colors duration-200">{item.title}
                </a>
              </li>
            ))}
          </ul>

          <div>
            <button className="text-white rounded-lg bg-linear-to-r from-[#F0B71F] to-[#E03609] py-[13px] px-[21px] font-medium">
              Get started free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navber;
