import React from "react";
import Image from "next/image";
import neonimhmian from "../../../public/neonimgmain.png";
import neonimhmiantwo from "../../../public/neonimgmaintwo.png";
import nionmini from '../../../public/neon mini.png'
import animateone from '../../../public/animateone.png'
import animatetwo from '../../../public/animatetwo.png'

const Neon = () => {
  return (
    <section className="py-12 md:py-20 border-b border-[#E03609] overflow-hidden">
      <div className="max-w-[1320px] relative mx-auto px-4 md:px-6 xl:px-0">
        {/* Floating Background Images */}
        <div>
           <Image className="absolute -top-28 -left-30 hidden xl:block pointer-events-none" src={animateone} alt=""/>
           <Image className="absolute -top-28 -right-30 hidden xl:block pointer-events-none" src={animatetwo} alt=""/>
        </div>

        {/* First Flex Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
          <div className="w-full lg:w-[46%]">
            <div>
              <h2 className="text-white pb-6 md:pb-[68px] text-[32px] md:text-[45px] lg:text-[56px] font-bold leading-tight">
                Where{" "}
                <span className="text-[#E03609]">Neon Dreams & Digital </span>
                Nightmares Converge.
              </h2>
              <p className="text-[16px] md:text-[18px] font-medium text-gray-300 leading-relaxed">
                A realm where advanced technology meets dystopian reality. Our
                website is your gateway to a universe of neon lights, gritty
                streets, and cybernetic enhancements. Explore the high-tech,
                low-life world where the lines between humanity and machinery
                blur.
              </p>
            </div>
            
            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row justify-between gap-6 pt-8 md:pt-[69px]">
              <div>
                <h4 className="text-[36px] md:text-[47px] font-semibold text-[#E03609] leading-none">
                  89.2K+
                </h4>
                <p className="text-white text-[15px] md:text-[17px] font-medium pt-2">
                  Discover the Future
                </p>
              </div>
              <div>
                <h4 className="text-[36px] md:text-[47px] font-semibold text-[#E03609] leading-none">
                  7001+
                </h4>
                <p className="text-white text-[15px] md:text-[17px] font-medium pt-2">
                  Stories and Lore
                </p>
              </div>
              <div>
                <h4 className="text-[36px] md:text-[47px] font-semibold text-[#E03609] leading-none">
                  3,124+
                </h4>
                <p className="text-white text-[15px] md:text-[17px] font-medium pt-2">
                  Art and Design
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[50%] flex justify-center">
            <Image src={neonimhmian} alt="Neon dreams" className="w-full max-w-[600px] h-auto object-cover rounded-lg" />
          </div>
        </div>

        {/* Second Flex Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-center pt-16 md:pt-20">
          <div className="w-full lg:w-[45%] flex justify-center lg:pl-10">
            <Image src={neonimhmiantwo} alt="Cybernetic underworld" className="w-full max-w-[500px] h-auto object-cover rounded-lg" />
          </div>
          
          <div className="w-full lg:w-[55%]">
            <div className="lg:pl-18">
              <h2 className="text-[32px] md:text-[45px] lg:text-[55px] font-bold text-white leading-tight">
                Unveil{" "}
                <span className="text-[#E03609]">the Secrets of the</span>
                Cybernetic Underworld
              </h2>
              <p className="text-[16px] md:text-[18px] pb-8 md:pb-[60px] text-gray-300 pt-6 md:pt-[63px] w-full lg:w-[540px] leading-relaxed font-medium">
                A realm where advanced technology meets dystopian reality. Our
                website is your gateway to a universe of neon lights, gritty
                streets, and cybernetic enhancements.{" "}
              </p>
              
              {/* Mini Stats Card */}
              <div className="flex flex-col sm:flex-row items-center bg-[#ffffff18] border border-gradient-to-r from-[#E03609] to-[#F0B71F] p-5 rounded-lg">
                <Image
                  src={nionmini}
                  alt="Scenery"
                  className="rounded-lg object-cover w-full sm:w-[130px] h-auto"
                />
                <div className="sm:pl-6 mt-4 sm:mt-0 text-center sm:text-left">
                  <h2 className="text-[40px] sm:text-[57px] pb-2 font-bold text-[#FF6F3C] leading-none">
                    76,285K+
                  </h2>
                  <p className="text-[20px] sm:text-[28px] font-semibold text-white">
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
