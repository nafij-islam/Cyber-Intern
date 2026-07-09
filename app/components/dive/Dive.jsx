import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import animateone from '../../../public/animateone.png'
import animatetwo from '../../../public/animatetwo.png'
import  Image  from 'next/image';

const Dive = () => {
  return (
    <section className="overflow-hidden">
      <div className='max-w-[1320px] relative mx-auto px-4 md:px-6 xl:px-0'>
         <div>
           <Image className="absolute -top-8 -left-30 hidden xl:block pointer-events-none" src={animateone} alt=""/>
           <Image className="absolute -top-8 -right-30 hidden xl:block pointer-events-none" src={animatetwo} alt=""/>
        </div>
        <div className="divebgimg rounded-2xl overflow-hidden">
          <div className='px-6 md:pl-[45px] md:pr-[20px] pb-12 md:pb-[90px] pt-12 md:pt-[170px] flex flex-col lg:flex-row items-stretch justify-between gap-10'>
            <div className="flex-1 flex flex-col justify-center">
              <h2 className='text-[32px] md:text-[50px] lg:text-[68px] leading-tight lg:leading-20 w-full lg:w-[670px] font-bold text-white'>
                Greetings! Dive into the Cybernetic Universe
              </h2>
              <p className='w-full lg:w-[640px] leading-relaxed md:leading-9 pt-6 md:pt-[52px] text-[16px] md:text-[18px] text-gray-300'>
                Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.
              </p>
            </div>
            
            <div className='pt-6 lg:pt-20 lg:pl-10 flex items-center justify-center lg:justify-end w-full lg:w-auto'> 
               <div className='border py-8 md:py-14 px-6 md:px-[50px] bg-[#ffffff10] backdrop-blur-md border-[#F0B71F] rounded-[5px] w-full max-w-[450px]'>
                 <ul className='flex flex-col gap-y-6 md:gap-y-7'>
                   <li className='flex justify-between items-center gap-5 text-[18px] md:text-[25px] text-white font-medium hover:text-[#E03609] transition duration-200 cursor-pointer'>
                     <span className="flex items-center gap-4">
                       <div className='h-5 w-5 bg-amber-500 rounded-sm shrink-0'></div>
                       Join the Revolution
                     </span>
                     <FaArrowRightLong className="shrink-0" />
                   </li>
                   <li className='flex justify-between items-center gap-5 text-[18px] md:text-[25px] text-white font-medium hover:text-[#E03609] transition duration-200 cursor-pointer'>
                     <span className="flex items-center gap-4">
                       <div className='h-5 w-5 bg-red-500 rounded-sm shrink-0'></div>
                       Art and Design
                     </span>
                     <FaArrowRightLong className="shrink-0" />
                   </li>
                   <li className='flex justify-between items-center gap-5 text-[18px] md:text-[25px] text-white font-medium hover:text-[#E03609] transition duration-200 cursor-pointer'>
                     <span className="flex items-center gap-4">
                       <div className='h-5 w-5 bg-amber-500 rounded-sm shrink-0'></div>
                       Tech and Gear
                     </span>
                     <FaArrowRightLong className="shrink-0" />
                   </li>
                   <li className='flex justify-between items-center gap-5 text-[18px] md:text-[25px] text-white font-medium hover:text-[#E03609] transition duration-200 cursor-pointer'>
                     <span className="flex items-center gap-4">
                       <div className='h-5 w-5 bg-red-500 rounded-sm shrink-0'></div>
                       Stories and Lore
                     </span>
                     <FaArrowRightLong className="shrink-0" />
                   </li>
                 </ul>
               </div>
            </div>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dive