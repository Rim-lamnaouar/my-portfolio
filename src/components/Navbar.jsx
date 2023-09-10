import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

// import moon from "../assets/night.png"
// import sun from "../assets/sun.png"


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  // const [theme, settheme] = useState(false);

  // console.log(theme)


  return (
    // <div className={` ${theme?"bg-[#000]":"bg-[#fff]"} fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-500`}>
    <div className="bg-[#fff] fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-500">
      <div>
      <Link to="home">
        <img src={Logo} alt='Logo Image' style={{width: '110px', cursor: 'pointer'}} />
      </Link>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li  className='hover:text-pink-600 hover:border-pink-600' >
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-pink-600 hover:border-pink-600'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-pink-600 hover:border-pink-600'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:text-pink-600 hover:border-pink-600'>
          <Link to='certification' smooth={true} duration={500}>
            Certification
          </Link>
        </li>
        <li className='hover:text-pink-600 hover:border-pink-600'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:text-pink-600 hover:border-pink-600'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>

        {/* {/* <li className='hover:text-pink-600 hover:border-pink-600'>
          <Link to='contact' onClick={e=>settheme(!theme)} smooth={true} duration={500}>
            Contact
          </Link>
        </li> */}
      </ul>
      {/* <div className="toggle">
        <input type="checkbox" name="" id="checked" />
        <img id="sun" src={sun} alt="" />
        <img id="moon" src={moon} alt="" />
      </div> */} 

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#fff] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl hover:text-pink-600'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-pink-600'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-pink-600'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-pink-600'>
          {' '}
          <Link onClick={handleClick} to='certification' smooth={true} duration={500}>
            Certification
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-pink-600'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-pink-600'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href='https://www.linkedin.com/in/rim-lamnaouar/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href='https://github.com/Rim-lamnaouar/Rim-lamnaouar/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#58ccb3]'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href='mailto:rimlamnaouar@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#7d67ff]'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href='CV-Rim-Lamnaouar.pdf' download='CV-Rim-Lamnaouar.pdf'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
