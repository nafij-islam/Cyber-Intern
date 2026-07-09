import React from "react";
import Image from "next/image";
import futureimg from "../../../public/futureimg.png";
import animateone from '../../../public/animateone.png'
import animatetwo from '../../../public/animatetwo.png'

const Future = () => {
  return (
    <section className="py-12 md:py-30 border-t border-[#E03609] overflow-hidden">
      <div className="max-w-[1320px] relative mx-auto px-4 md:px-6 xl:px-0">
        <div>
           <Image className="absolute -top-38 -left-30 hidden xl:block pointer-events-none" src={animateone} alt=""/>
           <Image className="absolute -top-38 -right-30 hidden xl:block pointer-events-none" src={animatetwo} alt=""/>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-[50%] flex justify-center">
            <Image src={futureimg} alt="Gritty tech future" className="w-full max-w-[500px] h-auto object-cover rounded-lg" />
          </div>
          <div className="w-full lg:w-[50%]">
            <div className="lg:pl-20 text-center lg:text-left">
              <h3 className="font-bold text-[32px] md:text-[45px] lg:text-[55px] leading-tight text-white">
                Your<span className="text-[#e05409]"> Portal to a Gritty,</span>
                Tech-Driven Future.
              </h3>
              <p className="pt-6 lg:pt-[63px] w-full lg:w-[480px] mx-auto lg:mx-0 text-gray-300 leading-relaxed">
                A realm where advanced technology meets dystopian reality. Our
                website is your gateway to a universe of neon lights, gritty
                streets, and cybernetic enhancements.{" "}
              </p>
              <div className="pt-8 lg:pt-15 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8">
                <button className="text-white border border-[#E03609] rounded-lg py-[13px] px-[21px] font-medium bg-linear-to-r from-[#F0B71F] to-[#E03609]
                  hover:shadow-[0_0_15px_rgba(224,54,9,0.5)] transition-all cursor-pointer duration-300 ease-in-out">
                  Read More
                </button>
                 <button className="text-white bg-[#ffffff20] border border-gray-600 rounded-lg py-[13px] px-[21px] font-medium hover:bg-linear-to-r from-[#F0B71F] to-[#E03609] hover:border-transparent
                  transition-all cursor-pointer duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
