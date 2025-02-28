// src/components/InfiniteScrollText.js
import React from 'react';
import { motion } from 'framer-motion';

const Scrolltext = () => {
  const textArray = ["STARTUP CURATED", "64+", "EXPERT MENTORS", "100+", "FUNDING RAISED","2.6 Cr+", "FUNDING BY RCOEM", "70L+",
    "STARTUP CURATED", "64+", "EXPERT MENTORS", "100+", "FUNDING RAISED","2.6 Cr+", "FUNDING BY RCOEM", "70L+",
    "STARTUP CURATED", "64+", "EXPERT MENTORS", "100+", "FUNDING RAISED","2.6 Cr+", "FUNDING BY RCOEM", "70L+"
  ];

  const scrollAnimation = {
    animate: {
      x: [0, -3000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear"
        }
      }
    }
  };

  return (
    <div className="bg-gray-100 py-12 overflow-hidden relative mt-10 mb-3">
      <motion.div 
        className="whitespace-nowrap text-gray-800 text-3xl font-bold"
        variants={scrollAnimation}
        animate="animate"
      >
        {textArray.concat(textArray).map((text, index) => (
          <span key={index} className="mx-10 px-4 py-2  ">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Scrolltext;
