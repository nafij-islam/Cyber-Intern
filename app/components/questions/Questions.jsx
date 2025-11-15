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
    <section className="py-20 border-[#E03609] border-b">
      <div className="max-w-[1320px] m-auto">
        <div>
          <h3 className="text-[55px] font-bold text-center">
            Frequently Asked{" "}
            <span className="block text-[#e06609]">Questions</span>
          </h3>
          <p className="m-auto text-center w-[740px] pt-[37px]">
            A realm where advanced technology meets dystopian reality. Our
            website is your gateway to a universe of neon lights, gritty
            streets, and cybernetic enhancements.
          </p>
        </div>

        <div className="pt-30">
          <div className="grid grid-cols-2 gap-x-5  gap-y-20">
            {data.map((item) => (
              <div className="flex gap-4" key={item.id}>
                <div className="pt-5">
                  <Image src={item.url} alt="" />
                </div>
                <div className="border-b border-[#e06609] pb-10">
                  <h3 className="text-[24px] font-semibold w-[500px]">
                    {item.title}
                  </h3>
                  <p className="text-[18px] font-medium text-[#DDDDDD] pt-[26px] w-[450px]">
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
