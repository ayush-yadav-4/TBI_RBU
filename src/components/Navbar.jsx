import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
   <nav className="bg-white text-black shadow-md w-full fixed left-0 z-50 top-0 p-2">
  <div className="container mx-auto p-3 flex justify-between items-center">
    {/* Logo */}
    <div className="text-2xl font-bold text-gray-800 ">
      This is new  Navbar
    </div>
    
    {/* Centered Navbar Items */}
    <div className=" hidden md:flex-grow md:flex justify-center items-center space-x-16">
      {['Home', 'Contact', 'Discover', 'Learn', 'Incubators'].map((item) => (
        <div key={item} className="group relative">
          <button className="my-1 text-md text-gray-700 leading-5 hover:text-gray-600 md:mx-3 md:my-0 focus:outline-none font-sans tracking-8  ">
            {item}
          </button>
          <span className="absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
        </div>
      ))}
      <div className="flex group relative h-full " onMouseEnter={handleMouseEnter}>
        <button className="font-semibold focus:outline-none relative h-auto " >
          More
          <span className="absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
        </button>
        {isDropdownOpen && (
          <div className="fixed  right-10 left-10 mt-14 bg-white text-black shadow-lg rounded-lg p-6 z-10 transition-all duration-500 ease-in-out transform scale-95"  onMouseLeave={handleMouseLeave} >
            <div className="flex-col mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center mb-4">
                <p className="font-bold">Option 1</p>
              </div>
              <div className="flex items-center mb-4">
                <p className="font-bold">Option 2</p>
              </div>
              <div className="flex items-center mb-4">
                <p className="font-bold">Option 3</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;



