import React from 'react';
import { motion } from 'framer-motion';

const InfiniteMovingCards = ({ items = [], direction = 'left', speed = 'normal' }) => {
  // Speed in pixels per second
  const scrollSpeed = {
    slow: 20,
    normal: 40,
    fast: 60,
  }[speed] || 40;

  const animationDuration = `${items.length * scrollSpeed}s`;

  const loopAnimation = {
    animate: {
      x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
    },
    transition: {
      repeat: Infinity,
      ease: 'linear',
      duration: items.length * 10, // Adjust based on length
    },
  };

  return (
    <div className="overflow-hidden w-full h-100">
      <motion.div
        className="flex gap-6"
        {...loopAnimation}
      >
        {[...items, ...items,... items].map((item, index) => (
          <div
          key={index}
          className={`min-w-[350px] max-w-[320px] border-t-4 ${
            item.borderColor || 'border-gray-300'
          } bg-white p-6 rounded-xl shadow-md flex flex-col justify-between hover:shadow-xl`}
        >
          <p className="text-gray-700 mb-4">"{item.quote}"</p>
        
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.role}</p>
          </div>
        </div>
        
        ))}
      </motion.div>
    </div>
  );
};

export { InfiniteMovingCards };
