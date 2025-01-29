import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const AnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
        relative
        group
        flex
        items-center
        bg-transparent
        text-white
        px-4
        py-2
        rounded-full
        border
        border-white
        transition-all
        duration-500
        ease-in-out
        min-w-[160px]
        hover:bg-white
        hover:bg-opacity-5
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Circle with arrow that moves as a unit */}
      <div
        className={`
          absolute
          flex
          items-center
          justify-center
          h-8
          w-8
          bg-white
          bg-opacity-20
          rounded-full
          transition-all
          duration-500
          ease-in-out
          ${isHovered ? 'left-auto right-0' : 'left-0 right-auto'}
        `}
      >
        <ArrowRight size={16} />
      </div>

      {/* Text with dynamic alignment */}
      <span 
        className={`
          w-full
          transition-all
          duration-500
          ease-in-out
          ${isHovered ? 'text-left pl-4' : 'text-right pr-4'}
        `}
      >
        Know More
      </span>
    </button>
  );
};

export default AnimatedButton;