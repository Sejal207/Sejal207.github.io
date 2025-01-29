import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import protfolioData from './data/protfolioData.json';

const AnimatedButton = ({ direction = 'next' }) => {
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
        px-2
        md:px-4
        py-1
        md:py-2
        rounded-full
        border
        border-black
        transition-all
        duration-500
        ease-in-out
        min-w-[120px]
        md:min-w-[200px]
        hover:bg-white
        hover:bg-opacity-5
        text-sm
        md:text-base
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
          h-6
          w-6
          md:h-8
          md:w-8
          m-1
          bg-black
          rounded-full
          border
          border-black
          transition-all
          duration-500
          ease-in-out
          ${direction === 'next' ? 'right-0' : 'left-0'}
        `}
      >
        <ArrowRight 
          size={12} 
          className={`text-white ${direction === 'next' ? 'rotate-0' : 'rotate-180'}`}
        />
      </div>

      <span
        className={`
          w-full
          transition-all
          duration-500
          ease-in-out
          ${direction === 'next' 
            ? 'text-left pl-2 md:pl-4' 
            : 'text-right pr-2 md:pr-4'
          }
          ${isHovered 
            ? (direction === 'next' ? 'pr-8 md:pr-12' : 'pl-8 md:pl-12')
            : (direction === 'next' ? 'pr-8 md:pr-12' : 'pl-8 md:pl-12')
          }
        `}
      >
        {direction === 'next' ? 'Next Project' : 'Previous Project'}
      </span>
    </button>
  );
};

const Info = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = protfolioData[id];

  if (!data) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        <p className="text-center text-lg md:text-xl">Project not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-3 md:px-4 py-4 md:py-8">
      {/* Hero Section */}
      <div className="w-full aspect-video mb-8 md:mb-16 rounded-lg overflow-hidden">
        <img 
          src={data.heroVideo} 
          alt={data.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo and Title Section */}
      <div className="w-full mb-8 md:mb-16 flex flex-col items-left">
        <h1 className="text-black max-w-full text-2xl md:text-4xl px-2 md:px-4 mb-4 md:mb-7">
          {data.title}
        </h1>
        <p className="text-gray-600 max-w-full text-sm md:text-base text-left px-2 md:px-4">
          {data.description}
        </p>
      </div>

      {/* Services Section */}
      <div className="w-full md:max-w-md mb-6 md:mb-10 px-2 md:px-3">
        <p className="text-xl md:text-2xl mb-2">Services</p>
        <p className="text-sm md:text-base">{data.services}</p>
      </div>
      
      {/* Mobile Screens */}
      <div className="mb-8 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {data.mobileScreens.map((screen, index) => (
            <img
              key={index}
              src={screen}
              alt={`Mobile screen ${index + 1}`}
              className="w-full h-auto rounded-lg object-cover"
            />
          ))}
        </div>
      </div>

      {/* Primary Colors Section */}
      <div className="mb-6 md:mb-3">
        <h2 className="text-2xl md:text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C8851F] to-[#FFE58B] text-center">
          Primary Colours
        </h2>

        <div className="grid grid-cols-2 gap-4 md:flex md:gap-11">
          {data.primaryColors.map((color, index) => (
            <div key={index} className="flex-1">
              {color.gradient ? (
                <>
                  <div 
                    className="w-full aspect-square mb-2 rounded-lg"
                    style={{ 
                      background: `linear-gradient(to right, ${color.gradient.start}, ${color.gradient.end})` 
                    }}
                  />
                  <p className="text-xs md:text-sm text-gray-600">{color.name}</p>
                  <p className="text-xs md:text-sm text-gray-400 break-all md:break-normal">
                    {color.gradient.start} → {color.gradient.end}
                  </p>
                </>
              ) : (
                <>
                  <div 
                    className="w-full aspect-square mb-2 rounded-lg"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="text-xs md:text-sm text-gray-600">{color.name}</p>
                  <p className="text-xs md:text-sm text-gray-400">{color.hex}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-1 md:h-2 absolute inset-x-0 w-screen bg-gradient-to-r p-0 m-0"
        style={{
          backgroundImage: data.primaryColors[2].gradient
            ? `linear-gradient(to right, ${data.primaryColors[2].gradient.start}, ${data.primaryColors[2].gradient.end})`
            : `linear-gradient(to right, ${data.primaryColors[2].hex}, ${data.primaryColors[2].hex})`
        }}
      />

      {/* Desktop Screens */}
      {[data.desktopScreens, data.desktopScreens2].map((screens, index) => (
        screens && screens.length > 0 && (
          <div key={index} className="mb-6 md:mb-24">
            <div className="w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={screens[0]}
                alt={`Desktop view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )
      ))}

      {/* Navigation Footer - Now in its original non-fixed position */}
      <div className="bg-white border-t border-gray-200 mt-3">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex justify-between items-center py-3 md:py-6">
            <div className="w-1/3">
              <AnimatedButton direction="prev" />
            </div>
            <div className="w-1/3 flex justify-end">
              <AnimatedButton direction="next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;