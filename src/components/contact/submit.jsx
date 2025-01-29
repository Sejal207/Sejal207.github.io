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
        text-black
        px-4
        py-2
        rounded-full
        transition-all
        duration-500
        ease-in-out
        min-w-[160px]
       
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
          h-10
          w-10
         text-white
          rounded-full
          transition-all
          duration-500
          ease-in-out
          bg-black
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
        Submit
      </span>
    </button>
  );
};

export default AnimatedButton;