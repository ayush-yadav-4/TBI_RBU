
// src/components/ThreeDCard.js
import React from 'react';
import { motion } from 'framer-motion';

const ThreeDCard = ({ title, date, description, image }) => {
  return (
    <motion.div
      className="relative bg-gray-300 p-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05, rotate: [0, 0, 15, -15, 0], transition: { duration: 0.5 } }}
    >
      {/* Gradient Shadow */}
      <div className="absolute inset-0 rounded-xl bg-white z-0"></div>
      <div className="relative z-10">
        <img src={image} alt={title} className="rounded-lg mb-4" />
        <div className="text-lg font-bold mb-2">{title}</div>
        <div className="text-sm text-gray-500 mb-4">{date}</div>
        <div className="text-gray-700">{description}</div>
      </div>
    </motion.div>
  );
};


const cards = [
  {
    title: "Post One",
    date: "4 days ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Post Two",
    date: "1 week ago",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Post Three",
    date: "3 weeks ago",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://via.placeholder.com/150"
  },
   {
    title: "Post One",
    date: "4 days ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Post Two",
    date: "1 week ago",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Post Three",
    date: "3 weeks ago",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://via.placeholder.com/150"
  }
];

function Cards() {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 m-12 " >
        {cards.map((card, index) => (
          <ThreeDCard
            key={index}
            title={card.title}
            date={card.date}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
