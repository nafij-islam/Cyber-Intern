import React from 'react'
import Navber from './components/menu/Navber';
import Banner from './components/banenr/Banner';
import Neon from './components/neon/Neon';
import Dive from './components/dive/Dive';
import Universe from './components/universe/Universe';
import Future from './components/future/Future';
import Questions from './components/questions/Questions';
import Footer from './components/footer/Footer';

const Page = () => {
  return (
    <div className='max-w-[1500px] bg-black border-[#E03609] m-auto border-x'>
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