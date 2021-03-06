import React from 'react';

import logo from '../img/logo.svg';

import arrowDown from '../img/icon-arrow-down.svg';

const Hero = () => {
  return (
    <header>
      <div className='w-screen h-screen'>
        <div className='bg-cover bg-bottom bg-no-repeat bg-hero-mobile sm:bg-hero-desktop w-full h-full'>
          <nav className='relative'>
            <div className='py-12 px-10'>
              <div className='flex justify-between items-center'>
                <img src={logo} className='h-8' alt="Company logo" />
                <div className="hidden md:block">
                  <div className="flex items-center">
                    <a href="/" className='text-white px-6'>About</a>
                    <a href="/" className='text-white px-6'>Services</a>
                    <a href="/" className='text-white px-6'>Projects</a>
                    <div className="pl-6 pr-2">
                      <a href="/" className='font-fraunces text-base bg-white rounded-full uppercase px-7 py-4 hover:text-white hover:bg-white/50'>Contact</a>
                    </div>
                  </div>
                </div>
                <div className='md:hidden'>
                  <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-link p-0">
                      <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fillRule="evenodd"/></svg>
                    </label>
                    <ul tabIndex="0" className="dropdown-content menu p-8 shadow bg-white w-80% triangle mt-10">
                      <li><a href='/' className='text-darkGrayBlue justify-center'>About</a></li>
                      <li><a href='/' className='text-darkGrayBlue justify-center'>Services</a></li>
                      <li><a href='/'className='text-darkGrayBlue justify-center'>Projects</a></li>
                      <li>
                        <div className='justify-center'>
                          <a href='/' className='font-fraunces text-base bg-yellow rounded-full uppercase px-7 py-4 hover:bg-yellow/50'>Contact</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="text-center">
            <h1 className='font-fraunces font-black text-white uppercase my-16 mx-5'>we are creatives</h1>
            <img className='mx-auto h-32' src={arrowDown} alt="Arrow Down" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero;
