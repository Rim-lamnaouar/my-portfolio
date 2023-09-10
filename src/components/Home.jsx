import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ffffff]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ff65ab]'>
          Rim Lamnaouar<span className='full_stop'>.</span>
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          I'm a Web Developer
        </h2>
        <p className='text-[#ffffff] py-4 max-w-[700px]'>
          I am an IT engineering student & Web Developer My primary focus is on building Front End Web Applications.
          "I build things for the web."
        </p>
        <div>
          <Link to="work">
            <button className='text-white hover:text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-black 
            bg-pink-600 border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;