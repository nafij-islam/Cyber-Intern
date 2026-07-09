import React from 'react'
import Navber from './components/menu/Navber';
import Banner from './components/banenr/Banner';
import Neon from './components/neon/Neon';
import Dive from './components/dive/Dive';
import Universe from './components/universe/Universe';
import Future from './components/future/Future';
import Questions from './components/questions/Questions';
import Footer from './components/footer/Footer';
import CyberLines from './components/ver';

const Page = () => {
  return (
    <div className='relative h-full overflow-x-hidden'>
      <div className='h-full absolute w-full max-w-[1320px] border-x border-[#E03609]/40 left-1/2 -translate-x-1/2 pointer-events-none hidden lg:block'></div>
      <Navber/>
      <Banner/>
      <Neon/>
      <Dive/>
      <Universe/>
      <Future/>
      <Questions/>
      <Footer/>
    </div>
  )
}

export default Page