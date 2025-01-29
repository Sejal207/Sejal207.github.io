import React, { useState } from 'react';

const LogoCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const colors = {
    blue: '#438E88',
    pink: '#D784A9',
    orange: '#D75835',
    yellow: '#F2BB46',
    lightBlue: '#4B84BE',
    peach: '#ED9076'
  };

  // Generate 10 placeholder logos
  const logos = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `Logo ${i + 1}`
  }));

  // Duplicate logos for infinite effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-white p-4">
      <div 
        className="flex animate-scroll"
        style={{
          animation: 'scroll 20s linear infinite'
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 mx-4 transition-transform duration-300 hover:scale-110"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div 
              className="w-16 h-16 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: hoveredIndex === index ? 
                  Object.values(colors)[index % Object.values(colors).length] : 
                  '#F5F5F5'
              }}
            >
              <div className={`text-2xl font-bold ${hoveredIndex === index ? 'text-white' : 'text-gray-400'}`}>
                {logo.name[5]}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;