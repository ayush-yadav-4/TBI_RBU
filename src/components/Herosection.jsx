// src/components/MainContent.js
import React from 'react';
import Typewriter from './changingtext';


const Herosection = () => {
  return (
    <div className="p-9 py-12 mt-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center  ">
        <div className="lg:w-1/2  text-center md:text-left">
          <h2 className="text-6xl md:text-7xl font-semibold  text-gray-800 mb-6 md:mb-12">TBI RBU</h2>
          <p className="mt-4 text-2xl md:text-4xl text-gray-600">Accelerate Your 
          <span className="text-yellow-500 md:text-5xl "><Typewriter/> </span>
           Journey!</p>
          <p className="mt-8 text-xl text-gray-600">Welcome to the entrepreneurship community of TBI RBU where we ideate, iterate, and incubate the future innovations of the century!</p>
          <button className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-400">Get Started!</button>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img src={''} alt="Illustration" className="w-3/4 lg:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;

