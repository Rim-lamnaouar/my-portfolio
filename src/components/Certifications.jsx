import React from 'react'
import Certif2 from '../assets/certif2.png';
import Certif1 from '../assets/certif1.png';
import Certif3 from '../assets/certif3.png';
import Certif4 from '../assets/certif4.png';
import Certif5 from '../assets/certif5.png';
import Certif6 from '../assets/certif6.png';

const Certifications  = () => {
  return (
    <div name='certification' className='w-full md:h-screen text-gray-300 bg-[#fff]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-[#8892b0] border-pink-600'>
            Certifications
          </p>
          <p className='py-6 text-xl'>Check out some of my recent certifications</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Certif1})`}}
            className='shadow-lg shadow-[#171835] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 hover:scale-110 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
               Basics of React.js
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.linkedin.com/learning/certificates/b4dd029ae73b994fc0fcbacc3748cbd2ec36c6fe8217315e1145502c0c1c0b5d'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    View my certification
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Certif2})` }}
            className='shadow-lg shadow-[#171835] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 hover:scale-110 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Learn JS Course
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.codecademy.com/profiles/Reemenas/certificates/705dcb15de0da4dd9d9fc4f3274b430e'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    View my certification
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Certif3})` }}
            className='shadow-lg shadow-[#171835] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 hover:scale-110 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Git and GitHub
              </span>
              <div className='pt-8 text-center'>
                <a href='https://openclassrooms.com/fr/course-certificates/7013846422'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                   View my certification
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Certif4})` }}
            className='shadow-lg shadow-[#171835] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 hover:scale-110 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Basics of CSS3
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.sololearn.com/certificates/CT-5YXK1NC7'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                   View my certification
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Certif5})` }}
            className='shadow-lg shadow-[#171835] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 hover:scale-110 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Preparation for job
              </span>
              <div className='pt-8 text-center'>
                <a href='https://coursera.org/share/b4a39e74a091f91cc3642d7050a0ca6e'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    View my certification
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Certif6})` }}
            className='shadow-lg shadow-[#171835] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 hover:scale-110 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Salesforce Certif
              </span>
              <div className='pt-8 text-center'>
                <a href='https://courses.salesforceben.com/certificates/salesforce-associate-practice-exams/?course_id=18820&cert-nonce=8f14107bea'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    View my certification
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications;