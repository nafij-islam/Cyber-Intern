import React from "react";
import Image from "next/image";
import imgone from "../../../public/01..png";
import imgtwo from "../../../public/02..png";
import imgthree from "../../../public/03..png";
import imgfour from "../../../public/04..png";

const Questions = () => {
  const data = [
    {
      id: 1,
      url: imgone,
      title: "How do I stay updated on new content and events?",
      pera: "A realm where advanced technology meets dystopian reality. Our website is your gateway....",
    },
    {
      id: 2,
      url: imgtwo,
      title: "How can I contact customer cyber punk support?",
      pera: "A realm where advanced technology meets dystopian reality. Our website is your gateway....",
    },
    {
      id: 3,
      url: imgthree,
      title: "Can I purchase cyberpunk-themed merchandise?",
      pera: "A realm where advanced technology meets dystopian reality. Our website is your gateway....",
    },
    {
      id: 4,
      url: imgfour,
      title:
        "Are there any rules or guidelines for participating in the community?",
      pera: "A realm where advanced technology meets dystopian reality. Our website is your gateway....",
    },
  ];

  return (
    <section className="py-12 md:py-20 border-[#E03609] border-b overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 xl:px-0">
        <div>
          <h3 className="text-[32px] md:text-[45px] lg:text-[55px] font-bold text-center leading-tight">
            Frequently Asked{" "}
            <span className="block text-[#e06609]">Questions</span>
          </h3>
          <p className="mx-auto text-center w-full max-w-[740px] pt-6 md:pt-[37px] text-[15px] md:text-[18px] text-gray-300 leading-relaxed">
            A realm where advanced technology meets dystopian reality. Our
            website is your gateway to a universe of neon lights, gritty
            streets, and cybernetic enhancements.
          </p>
        </div>

        <div className="pt-12 md:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 md:gap-y-16">
            {data.map((item) => (
              <div className="flex gap-4 items-start" key={item.id}>
                <div className="pt-2 md:pt-4 shrink-0">
                  <Image src={item.url} alt="" className="w-[30px] md:w-[40px] h-auto" />
                </div>
                <div className="border-b border-[#e06609] pb-6 md:pb-10 flex-1">
                  <h3 className="text-[18px] md:text-[24px] font-semibold w-full max-w-[500px] text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[15px] md:text-[18px] font-medium text-[#DDDDDD] pt-3 md:pt-[26px] w-full max-w-[450px] leading-relaxed">
                    {item.pera}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Questions;
