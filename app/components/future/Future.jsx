import React from "react";
import Image from "next/image";
import futureimg from "../../../public/futureimg.png";
import animateone from '../../../public/animateone.png'
import animatetwo from '../../../public/animatetwo.png'
const Future = () => {
  return (
    <section className="py-30 border-t border-[#E03609]">
      <div className="max-w-[1320px] relative m-auto">
                <div>
           <Image className="absolute -top-38  -left-30" src={animateone} alt=""/>
           <Image className="absolute -top-38  -right-30" src={animatetwo} alt=""/>
        </div>
        <div className="flex">
          <div className="w-[50%] p-4">
            <Image src={futureimg} alt="" />
          </div>
          <div className="w-[50%]">
            <div className="pl-20 pt-10">
              <h3 className="font-bold text-[55px]">
                Your<span className="text-[#e05409]"> Portal to a Gritty,</span>
                Tech-Driven Future.
              </h3>
              <p className="pt-[63px] w-[480px]">
                A realm where advanced technology meets dystopian reality. Our
                website is your gateway to a universe of neon lights, gritty
                streets, and cybernetic enhancements.{" "}
              </p>
              <div className="pt-15 flex gap-8">
                <button className="text-white hover:bg-[#ffffff57] border rounded-lg py-[13px] px-[21px] font-medium bg-linear-to-r from-[#F0B71F] to-[#E03609]
                  transition-all cursor-pointer duration-300 ease-in-out">
                  Read More
                </button>
                 <button className="text-white bg-[#ffffff57] border rounded-lg py-[13px] px-[21px] font-medium hover:bg-linear-to-r from-[#F0B71F] to-[#E03609]
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
