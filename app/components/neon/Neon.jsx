import React from "react";
import Image from "next/image";
import neonimhmian from "../../../public/neonimgmain.png";
import neonimhmiantwo from "../../../public/neonimgmaintwo.png";
import nionmini from '../../../public/neon mini.png'
import animateone from '../../../public/animateone.png'
import animatetwo from '../../../public/animatetwo.png'


const Neon = () => {
  return (
    <section className="py-20 border-b border-[#E03609]">
      <div className="max-w-[1320px] relative mx-auto">
        <div>
           <Image className="absolute -top-28  -left-30" src={animateone} alt=""/>
           <Image className="absolute -top-28  -right-30" src={animatetwo} alt=""/>
        </div>
        <div className="flex justify-between">
          <div className="w-[46%]">
            <div>
              <h2 className="text-white pb-[68px] text-[56px] font-bold">
                Where{" "}
                <span className="text-[#E03609]">Neon Dreams & Digital </span>
                Nightmares Converge.
              </h2>
              <p className="text-[18px] font-medium text-white">
                A realm where advanced technology meets dystopian reality. Our
                website is your gateway to a universe of neon lights, gritty
                streets, and cybernetic enhancements. Explore the high-tech,
                low-life world where the lines between humanity and machinery
                blur.
              </p>
            </div>
            <div className="flex justify-between pt-[69px]">
              <div>
                <h4 className="text-[47px] font-semibold text-[#E03609]">
                  89,2K+
                </h4>
                <p className="text-white text-[17px] font-medium pt-[8px]">
                  Discover the Future
                </p>
              </div>
              <div>
                <h4 className="text-[47px] font-semibold text-[#E03609]">
                  7001+
                </h4>
                <p className="text-white text-[17px] font-medium pt-[8px]">
                  Stories and Lore
                </p>
              </div>
              <div>
                <h4 className="text-[47px] font-semibold text-[#E03609]">
                  3,124+
                </h4>
                <p className="text-white text-[17px] font-medium pt-[8px]">
                  Art and Design
                </p>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <Image src={neonimhmian} alt="" />
          </div>
        </div>
        <div className="flex justify-between pt-20">
          <div className=" w-[45%] pl-10 rounded-2xl">
            <Image src={neonimhmiantwo} alt="" />
          </div>
          <div className="w-[55%]">
            <div className="pl-18 pt-8">
              <h2 className="text-[55px] font-bold text-white  leading-[130%]">
                Unveil{" "}
                <span className="text-[#E03609]">the Secrets of the</span>
                Cybernetic Underworld
              </h2>
              <p className="text-[18px] pb-[60px] text-white pt-[63px] w-[540px] leading-[160%] font-medium">
                A realm where advanced technology meets dystopian reality. Our
                website is your gateway to a universe of neon lights, gritty
                streets, and cybernetic enhancements.{" "}
              </p>
              <div className="flex flex-col md:flex-row items-center bg-[#ffffff18] border border-gradient-to-r from-[#E03609] to-[#F0B71F] p-4 rounded-lg">
                <Image
                  src={nionmini}
                  alt="Scenery"
                  className="rounded-lg object-cover"
                />
                <div className="md:pl-6 mt-4 md:mt-0 text-center md:text-left">
                  <h2 className="text-[57px] pb-[22px] font-bold text-[#FF6F3C]">
                    76,285K+
                  </h2>
                  <p className="text-[28px] font-semibold ">
                    Experience the Future
                  </p>
                  <p className="text-sm mt-1 text-gray-300">
                    Explore the high-tech, low-life world where the lines
                    between
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Neon;
