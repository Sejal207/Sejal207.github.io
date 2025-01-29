import React, { useState } from "react";

const CreativeJourneyDisplay = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "/assets/aboutus/img1.svg",
    "/assets/aboutus/img2.svg",
    "/assets/aboutus/img3.png",
  ];

  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheel = (e) => {
    if (isScrolling) return; 

    let nextImageIndex;

    if (e.deltaY > 0) {
      // Scroll down
      nextImageIndex = (imageIndex + 1) % images.length;
    } else {
      // Scroll up
      nextImageIndex = (imageIndex - 1 + images.length) % images.length;
    }

    setImageIndex(nextImageIndex);

    
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 500); 
  };

  return (
    <div className="flex flex-col items-center h-[1000px] bg-[#F5F4EB]">
     

      <div
        id="scroll-image"
        className="relative w-[1480px] h-[900px] overflow-hidden flex justify-center items-center"
        onWheel={handleWheel}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ${
              imageIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CreativeJourneyDisplay;
