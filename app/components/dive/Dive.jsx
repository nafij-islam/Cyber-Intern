import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import animateone from '../../../public/animateone.png'
import animatetwo from '../../../public/animatetwo.png'
import  Image  from 'next/image';


const Dive = () => {
  return (
    <section >
      <div className='max-w-[1320px] relative m-auto'>
         <div>
           <Image className="absolute -top-8  -left-30" src={animateone} alt=""/>
           <Image className="absolute -top-8  -right-30" src={animatetwo} alt=""/>
        </div>
        <div className="divebgimg">
          <div className='pl-[45px] pb-[90px]  pt-[170px] flex'>
            <div >
              <h2 className='text-[68px] leading-20 w-[670px]  font-bold'>Greetings! Dive into the Cybernetic Universe</h2>
              <p className='w-[640px] leading-9 pt-[52px] text-[18px]'>Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
            </div>
            <div className='pt-20 pl-20'> 
               <div className='border py-14 px-[50px] bg-[#ffffff49] border-[#F0B71F] rounded-[5px]'>
                 <ul className='flex flex-col gap-y-7'>
                   <li className='flex gap-5 text-[25px] items-center'><div className='h-5 w-5 bg-amber-500'></div>Join the Revolution <FaArrowRightLong/></li>
                   <li className='flex gap-5 text-[25px] items-center'><div className='h-5 w-5 bg-red-500'></div>Art and Design<FaArrowRightLong/></li>
                   <li className='flex gap-5 text-[25px] items-center'><div className='h-5 w-5 bg-amber-500'></div>Tech and Gear<FaArrowRightLong/></li>
                   <li className='flex gap-5 text-[25px] items-center'><div className='h-5 w-5 bg-red-500'></div>Stories and Lore<FaArrowRightLong/></li>
            
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