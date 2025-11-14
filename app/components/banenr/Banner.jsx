import React from "react";
import inimateone from "../../../public/animateone.png";
import inimatetwo from "../../../public/animatetwo.png";
import animatethree from "../../../public/animatethree.png";
import Image from "next/image";
import bannermini from "../../../public/miniimg.png";
import bannermainimg from '../../../public/bannaermainimg.png'


const Banner = () => {
  return (
    <section className="pb-[60px] border-b border-[#E03609]">
      <div className="max-w-[1320px] mx-auto relative group">
        <Image className="absolute -left-30 -top-8" src={inimateone} alt="s" />
        <Image className="absolute -right-30 -top-8" src={inimatetwo} alt="s" />
        <div className="absolute top-[250px] right-65">
           <Image width={820} src={bannermainimg} alt=""/>
        </div>
        <div>
          <h1 className="text-white text-[197px] font-bold text-center pt-[116px] font-orbi">
            Cyber Punk
          </h1>
        </div>

        <div className="pt-[157px] relative">
          <div className="flex justify-between">
            <div className="text-white">
              <h3 className="text-[24px] font-semibold">Stories & Lore</h3>
              <p className="tetx-[18px] font-semibold w-[250px] pt-[18px]">
                Dive into compelling narratives set in a dystopian future.
              </p>
            </div>
            <div className="text-white  uppercase">
              <h3 className="text-[36px] text-end">Events and</h3>
              <span className="flex text-[36px] justify-end font-semibold">
                Updates
              </span>
              <p className="pt-11 text-end  w-[320px] leading-8 pb-[58px]">
                Explore the high-tech, low-life world where the lines between
                humanity and machinery blur.
              </p>
              <button className="flex ms-auto py-3 cursor-pointer rounded-[7px] px-[23px] bg-linear-to-r from-[#F0B71F] to-[#E03609] text-[17px] font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div className="absolute text-linear-to-r from-[#F0B71F] to-[#E03609] top-[175px] left-50">
            <Image src={animatethree} alt="s" />
          </div>
        </div>

        <div className="flex z-100 flex-col md:flex-row justify-between items-center gap-6 pt-[100px] bg-black text-white">
          <div className="flex  flex-col md:flex-row items-center bg-[#ffffff18] border border-gradient-to-r from-[#E03609] to-[#F0B71F] p-4 rounded-lg">
            <Image
              src={bannermini}
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
                Explore the high-tech, low-life world where the lines between
              </p>
            </div>
          </div>

          <div className="flex flex-col pt-10 text-center md:text-left">
            <h2 className="text-[36px] leading-[120%] font-bold">
              ART AND <span className="text-[#FF6F3C] block">DESIGN</span>
            </h2>
            <p className="text-gray-300 w-[254px] mt-2">
              Feast your eyes on stunning visuals and concept art that bring the
              cyberpunk
            </p>
          </div>

          <div className="flex flex-col pb-3 px-8 pt-2 pr-20 mt-auto bg-black border border-gradient-to-r from-[#E03609] to-[#F0B71F] rounded-lg">
            <h2 className="text-[83px] font-bold text-[#FF6F3C]">17+</h2>
            <p className="text-[27px] w-30 pl-3  font-semibold">
              Years of Experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
