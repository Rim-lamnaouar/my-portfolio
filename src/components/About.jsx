import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#fff] text-[#8892b0]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Rim, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves the lives of those around me.
                 My primary focus is on building Front End Web Applications."I build things for the web" <br></br>
                 My skillsets include languages like HTML5, CSS3, React, JavaScript, PHP, Java.
                 I do this because I love the process of turning dreams into reality by converting ideas into code.
                 I am a personne who enjoys building beautiful web applications that delivers a better user experience.
                 What would you do if you had a Web Developer available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About;