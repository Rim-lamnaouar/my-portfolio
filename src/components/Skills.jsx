import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import PHP from '../assets/PHP.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import MYSQL from '../assets/My-Sql.png';
import ORACLE from '../assets/ORACLE.png';
import Bootstrap from '../assets/Bootstrap.png';
import JAVA from '../assets/JAVA.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen bg-[#fff] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center '>
            <div>
               <p className='text-[#8892b0] text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
               <p className='py-4 text-xl'>These are the technologies I've worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#b7b9f0] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#b7b9f0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#b7b9f0] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JAVSCRIPT icon" />
                    <p className='my-4'>JAVSCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#b7b9f0] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="REACT icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#b7b9f0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="GITHUB icon" />
                  <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#b7b9f0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="TAILWIND icon" />
                  <p className='my-4'>TAILWINDCSS</p>
                </div>
                <div className='shadow-md shadow-[#b7b9f0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MYSQL} alt="MYSQL icon" />
                  <p className='my-4'>MySQL</p>
                </div>
                <div className='shadow-md shadow-[#b7b9f0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                  <p className='my-4'>Bootstrap</p>
                </div> 
                <div className='shadow-md shadow-[#b7b9f0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={PHP} alt="PHP icon" />
                  <p className='my-4'>PHP</p>
                </div> 
                <div className='shadow-md shadow-[#b7b9f0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ORACLE} alt="ORACLE icon" />
                  <p className='my-4'>ORACLE</p>
                </div> 
                <div className='shadow-md shadow-[#b7b9f0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="firebase icon" />
                  <p className='my-4'>FireBase</p>
                </div>
                <div className='shadow-md shadow-[#b7b9f0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JAVA} alt="JAVA icon" />
                  <p className='my-4'>JAVA</p>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default Skills;