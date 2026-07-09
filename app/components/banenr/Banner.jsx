import React from "react";
import inimateone from "../../../public/animateone.png";
import inimatetwo from "../../../public/animatetwo.png";
import animatetwo from "../../../public/animatetwo.png"; // reusing or matching existing imports
import animatethree from "../../../public/animatethree.png";
import Image from "next/image";
import bannermini from "../../../public/miniimg.png";
import bannermainimg from '../../../public/bannaermainimg.png'

const Banner = () => {
  return (
    <section className="pb-[60px] border-b border-[#E03609] overflow-hidden">
      <div className="max-w-[1320px] mx-auto relative group px-4 md:px-6 xl:px-0">
        {/* Floating background animations - hidden on mobile/tablet to avoid overflow */}
        <Image className="absolute -left-30 -top-8 hidden xl:block pointer-events-none" src={inimateone} alt="s" />
        <Image className="absolute -right-30 -top-8 hidden xl:block pointer-events-none" src={inimatetwo} alt="s" />
        
        {/* Main Banner Image - Responsive placement */}
        <div className="lg:absolute lg:top-[250px] lg:right-10 xl:right-65 w-full lg:w-[500px] xl:w-[820px] mx-auto mt-6 lg:mt-0 z-0 pointer-events-none">
          <Image src={bannermainimg} alt="Cyberpunk Cityscape" className="w-full h-auto object-contain" />
        </div>

        <div>
          <h1 className="text-white text-[50px] sm:text-[90px] md:text-[140px] lg:text-[197px] font-bold text-center pt-8 md:pt-[116px] font-orbi leading-none">
            Cyber Punk
          </h1>
        </div>

        {/* Stories & Lore / Events Section */}
        <div className="pt-12 md:pt-[157px] relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Left Block */}
            <div className="text-white text-center md:text-left flex flex-col items-center md:items-start">
              <h3 className="text-[24px] font-semibold">Stories & Lore</h3>
              <p className="text-[18px] font-medium w-full max-w-[250px] pt-[18px]">
                Dive into compelling narratives set in a dystopian future.
              </p>
            </div>
            
            {/* Right Block */}
            <div className="text-white uppercase text-center md:text-end flex flex-col items-center md:items-end">
              <h3 className="text-[28px] md:text-[36px]">Events and</h3>
              <span className="flex text-[28px] md:text-[36px] justify-center md:justify-end font-semibold">
                Updates
              </span>
              <p className="pt-6 md:pt-11 text-center md:text-end w-full max-w-[320px] leading-8 pb-6 md:pb-[58px] normal-case">
                Explore the high-tech, low-life world where the lines between
                humanity and machinery blur.
              </p>
              <button className="flex mx-auto md:ms-auto py-3 cursor-pointer rounded-[7px] px-[23px] bg-linear-to-r from-[#F0B71F] to-[#E03609] text-[17px] font-semibold hover:shadow-[0_0_15px_rgba(224,54,9,0.5)] transition-all duration-300">
                Read More
              </button>
            </div>
          </div>

          {/* Decorative element - Hidden on smaller screens */}
          <div className="absolute text-linear-to-r from-[#F0B71F] to-[#E03609] top-[175px] left-50 hidden lg:block pointer-events-none">
            <Image src={animatethree} alt="s" />
          </div>
        </div>

        {/* Bottom Information Row */}
        <div className="flex z-10 flex-col lg:flex-row justify-between items-stretch gap-6 pt-16 md:pt-[100px] bg-black text-white">
          {/* Experience Card */}
          <div className="flex flex-col sm:flex-row items-center bg-[#ffffff18] border border-gradient-to-r from-[#E03609] to-[#F0B71F] p-5 rounded-lg flex-1">
            <Image
              src={bannermini}
              alt="Scenery"
              className="rounded-lg object-cover w-full sm:w-[150px] h-auto"
            />
            <div className="sm:pl-6 mt-4 sm:mt-0 text-center sm:text-left">
              <h2 className="text-[40px] sm:text-[57px] pb-2 font-bold text-[#FF6F3C] leading-none">
                76,285K+
              </h2>
              <p className="text-[20px] sm:text-[28px] font-semibold">
                Experience the Future
              </p>
              <p className="text-sm mt-1 text-gray-300">
                Explore the high-tech, low-life world where the lines between
              </p>
            </div>
          </div>

          {/* Art & Design Block */}
          <div className="flex flex-col justify-center py-6 px-4 text-center lg:text-left lg:pl-6">
            <h2 className="text-[30px] md:text-[36px] leading-[120%] font-bold">
              ART AND <span className="text-[#FF6F3C] block lg:inline">DESIGN</span>
            </h2>
            <p className="text-gray-300 w-full max-w-[254px] mx-auto lg:mx-0 mt-2">
              Feast your eyes on stunning visuals and concept art that bring the
              cyberpunk
            </p>
          </div>

          {/* Years of Experience Card */}
          <div className="flex flex-col justify-center items-center lg:items-start p-6 bg-black border border-gradient-to-r from-[#E03609] to-[#F0B71F] rounded-lg min-w-[200px]">
            <h2 className="text-[60px] md:text-[83px] font-bold text-[#FF6F3C] leading-none">17+</h2>
            <p className="text-[20px] md:text-[27px] font-semibold text-center lg:text-left mt-2">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
