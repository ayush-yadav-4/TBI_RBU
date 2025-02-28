// src/components/Typewriter.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const texts = ["Ideate", "Iterate", "Incubate"];

const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[index];
      setText((prevText) => {
        if (!deleting) {
          return currentText.slice(0, prevText.length + 1);
        } else {
          return prevText.slice(0, -1);
        }
      });

      if (!deleting && text === currentText) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const typingSpeed = deleting ? 100 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <motion.div className="text-xl  font-md text-yellow-500  md:text-4xl">
      {text}
      <span className="text-yellow-500 md:text-4xl ">|</span>
    </motion.div>
  );
};

export default Typewriter;

