// src/components/AnimatedBox.js
import React from 'react';
import { motion } from 'framer-motion';

const Aboutus = () => {
  return (
    <div className="flex flex-col mx-9 mt-10  lg:flex-row items-center bg-gray-200 text-black p-10 rounded-full shadow-lg">
      {/* Left Part with Image */}
      <motion.div
        className="lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="path/to/your/image.png" alt="Description" className="w-3/4 lg:w-full rounded-lg shadow-lg" />
      </motion.div>

      {/* Right Part with Information */}
      <motion.div
        className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-10 text-center lg:text-left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">Vision</h2>
        <p className="text-lg lg:text-xl mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        <div className="flex justify-center lg:justify-start">
          <div className="flex items-center">
            <motion.div
              className="w-20 h-20 rounded-full bg-purple-700 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl">95%</span>
            </motion.div>
            <div className="ml-4">
              <h3 className="text-xl font-bold">Web Development</h3>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutus;
