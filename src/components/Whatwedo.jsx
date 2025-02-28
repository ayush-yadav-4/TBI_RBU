// src/components/WhatWeDo.js
import React from 'react';
const FadeSeparator = () => {
  return (
    <div className="relative w-full h-1 bg-gray-200 my-8">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-full"></div>
    </div>
  );
};
const WhatWeDo = () => {
  return (
    <div className="bg-gray-100 p-7">
    <FadeSeparator/>
      <div className="text-center mb-6">
        <h2 className="text-6xl text-gray-600 font-bold mb-4">What do we do?<span className="text-red-500">?</span></h2>
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-red-500 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-500 rounded-full ml-2"></div>
          <div className="w-16 h-1 bg-red-500 rounded-full ml-2"></div>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 max-w-screen mx-auto">
        Technology Business Incubators at RBU makes the entrepreneurial world accessible to all group of people part of
        the RBU cater the audience from startup enthusiast to hardcore entrepreneurs, with
        plethora of yearlong events like Conclaves, Keynotes, Industry-defined Problems, B-Planning Competitions
        and Workshops, through both personal and collaboration-based approach.
      </p>
    </div>
  );
};

export default WhatWeDo;
