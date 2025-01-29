import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

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
        text-[#438E88]
        px-4
        py-2
        rounded-full
        border
        border-[#438E88]
        transition-all
        duration-500
        ease-in-out
        min-w-[160px]
        rotate-90
        mt-32
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          absolute
          flex
          items-center
          justify-center
          h-8
          w-8
          bg-[#438E88]
          text-white
          rounded-full
          transition-all
          duration-500
          ease-in-out
          ml-1
          ${isHovered ? 'left-auto right-0' : 'left-0 right-auto'}
        `}
      >
        <ArrowRight size={16} />
      </div>
      <span
        className={`
          w-full
          transition-all
          duration-500
          ease-in-out
          ${isHovered ? 'text-left pl-4' : 'text-right pr-4'}
        `}
      >
        See More
      </span>
    </button>
  );
};

export default AnimatedButton;