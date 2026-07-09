import React from "react";
import Image from "next/image";
import univerce from "../../../public/univerceimg.png";
import animateone from '../../../public/animateone.png'
import animatetwo from '../../../public/animatetwo.png'

const Universeimg = univerce;

const Universe = () => {
  const data = [
    {
      id: 1,
      url: Universeimg,
      title: "Discover the Future",
      pera: "Explore the high-tech, low-life world where the lines between humanity ",
    },
    {
      id: 2,
      url: Universeimg,
      title: "Stories & Lore",
      pera: "Explore the high-tech, low-life world where the lines between humanity ",
    },
    {
      id: 3,
      url: Universeimg,
      title: "Art & Design",
      pera: "Explore the high-tech, low-life world where the lines between humanity ",
    },
  ];
  return (
    <section className="py-12 md:py-20 border-t border-[#E03609] overflow-hidden">
      <div className="max-w-[1320px] relative mx-auto px-4 md:px-6 xl:px-0">
         <div>
           <Image className="absolute -top-28 -left-30 hidden xl:block pointer-events-none" src={animateone} alt=""/>
           <Image className="absolute -top-28 -right-30 hidden xl:block pointer-events-none" src={animatetwo} alt=""/>
        </div>
        <div className="pt-10 md:pt-[150px] pb-12 md:pb-20">
          <h2 className="text-[32px] md:text-[45px] lg:text-[55px] font-bold text-center leading-tight">
            Dive into the Cybernetics
            <samp className="block text-[#ea741a]">Universe</samp>
          </h2>
        </div>
        <div>
          <div className="grid gap-x-[50px] gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left" key={item.id}>
                <div className="shrink-0">
                  <Image src={item.url} alt={item.title} className="w-[80px] h-auto" />
                </div>
                <div>
                  <h3 className="font-medium text-[22px] md:text-[28px] pb-2 md:pb-4 text-white">{item.title}</h3>
                  <p className="font-normal text-[15px] md:text-[18px] text-gray-300 leading-relaxed">{item.pera}</p>
                </div>
              </div>    
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universe;
