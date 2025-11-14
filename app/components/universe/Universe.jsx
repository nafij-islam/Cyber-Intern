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
      id: 1,
      url: Universeimg,
      title: "Discover the Future",
      pera: "Explore the high-tech, low-life world where the lines between humanity ",
    },
    {
      id: 1,
      url: Universeimg,
      title: "Discover the Future",
      pera: "Explore the high-tech, low-life world where the lines between humanity ",
    },
  ];
  return (
    <section className="py-20 border-t border-[#E03609]">
      <div className="max-w-[1320px] relative m-auto">
         <div>
           <Image className="absolute -top-28 -left-30" src={animateone} alt=""/>
           <Image className="absolute -top-28 -right-30" src={animatetwo} alt=""/>
        </div>
        <div className="pt-[150px] pb-30">
          <h2 className="text-[55px] font-bold text-center ">
            Dive into the Cybernetics
            <samp className="block text-[#ea741a]">Universe</samp>
          </h2>
        </div>
        <div>
          <div className="grid gap-x-[50px] grid-cols-3">
            {data.map((item) => (
              <div className="flex gap-5" key={item}>
                <div>
                  <Image src={item.url} alt="" />
                </div>
                <div>
                  <h2 className="font-medium text-[28px] pb-4">{item.title}</h2>
                  <p className="font-medium text-[18px]">{item.pera}</p>
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
