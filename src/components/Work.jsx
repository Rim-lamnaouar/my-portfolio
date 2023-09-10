import React from 'react'
import ComingSoon from '../assets/Coming-Soon.png';
import TicTac from '../assets/TicTac.png';
import TodoList from '../assets/todoList.png';
import Hotel from '../assets/hotel.png';
import TechnoWebsite from '../assets/techno-website.png';
import Rimaphotography from '../assets/rimaphotography.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#fff]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-[#8892b0] border-pink-600'>
            My Work
          </p>
          <p className='py-6 text-xl'>Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${TicTac})` , backgroundSize: '400px'}}
            className='shadow-lg shadow-[#171835] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 hover:scale-110 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://tictactoa.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Rim-lamnaouar/JavaScript-Tic-Tac-Toe'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Hotel})` , backgroundSize: '355px 250px'}}
            className='shadow-lg shadow-[#171835] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 hover:scale-110 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://rim-lamnaouar.github.io/hotel-management-web-app/'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Rim-lamnaouar/hotel-management-web-app'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ComingSoon})`, backgroundSize: '400px 250px' }}
            className='shadow-lg shadow-[#171835] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 hover:scale-110 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Coming Soon page
              </span>
              <div className='pt-8 text-center'>
                <a href='https://coming-soon-rimdev.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Rim-lamnaouar/Coming-Soon-page'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TechnoWebsite})`, backgroundSize: '340px 250px' }}
            className='shadow-lg shadow-[#171835] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 hover:scale-110 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Techno Website
              </span>
              <div className='pt-8 text-center'>
                <a href='https://technooo.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Rim-lamnaouar/Techno-website'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Rimaphotography})`, backgroundSize: '365px 250px'}}
            className='shadow-lg shadow-[#171835] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 hover:scale-110 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Photography Website
              </span>
              <div className='pt-8 text-center'>
                <a href='https://rimaphotography.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Rim-lamnaouar/RiMaPhotography'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TodoList})`, backgroundSize: '342px 250px'}}
            className='shadow-lg shadow-[#171835] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 hover:scale-110 duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://todolistbyrim.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Rim-lamnaouar/ToDoList'>
                  <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                    Code
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

export default Work;