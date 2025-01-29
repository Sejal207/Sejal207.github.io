import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const AnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="
        flex
        items-center
        justify-center
        bg-white
      "
    >
      <button
        className={`
          relative
          group
          flex
          items-center
          bg-transparent
          text-black
          px-10
          py-2
          rounded-full
          border
          border-black
          transition-all
          duration-500
          ease-in-out
          min-w-[150px]
          h-16
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
            h-12
            w-12
            m-1
            bg-black
            rounded-full
            transition-all
            duration-500
            ease-in-out
            ${isHovered ? 'left-auto right-0' : 'left-0 right-auto'}
          `}
        >
          <ArrowRight size={20} color="white" />
        </div>

        {/* Text with dynamic alignment */}
        <span
          className={`
            pl-[24px]
            w-full
            transition-all
            duration-1000
            ease-in-out
            font-normal
            text-lg
            ${isHovered ? 'text-left pr-6' : 'text-right pr-4'}
          `}
        >
          {isHovered ? "Lets Gooooooo" : 'Get In Touch With Us'}
        </span>
      </button>
    </div>
  );
};

export default AnimatedButton;
