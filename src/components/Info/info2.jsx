import { useParams, useNavigate } from 'react-router-dom';
import portfolioData from './data/portfolioData.json';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

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
        min-w-[140px]
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
          size={14} 
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
  const data = portfolioData[id];

  if (!data) {
    return (
      <div className="max-w-7xl mx-auto px-3 md:px-4 py-4 md:py-8">
        <p className="text-center text-lg md:text-xl">Project not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-3 md:px-4 py-4 md:py-8 overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full aspect-video mb-8 md:mb-16 rounded-lg md:rounded-2xl overflow-hidden bg-gray-100">
        <img 
          src={data.heroImage} 
          alt={data.title}
          className="w-screen h-full object-cover"
        />
      </div>

      {/* Logo and Description */}
      <div className="w-full mb-8 md:mb-16 flex flex-col items-left">
        <h1 className="text-black max-w-full text-2xl md:text-4xl px-2 md:px-4 mb-4 md:mb-7">{data.title}</h1>
        <p className="text-gray-600 max-w-full text-sm md:text-base text-left px-2 md:px-4">{data.description}</p>
      </div>

      <div className="w-full md:max-w-md mb-6 md:mb-10 px-2 md:px-3">
        <p className="text-xl md:text-2xl mb-2">Services</p>
        <p className="text-sm md:text-base">{data.services}</p>
      </div>

      {/* Brand Identity */}
      <div className="mb-8 md:mb-16 overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {data.brandIdentity.logos.map((logo, index) => (
            <div key={index} className="bg-gray-100 rounded-lg md:rounded-xl p-0 flex items-center justify-center">
              <img 
                src={logo.image} 
                alt={logo.description}
                className="max-w-full h-auto m-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Color Palette */}
      <div className="mb-16 md:mb-32 max-h-[300px] overflow-x-hidden">
        <h2 className="text-2xl md:text-3xl font-Avenir mb-4 md:mb-8">COLOR PALETTE</h2>
        <div className="rounded-lg shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {data.colorPalette.primary.map((color, index) => (
              <div
                key={index}
                className={`
                  space-y-2
                  ${index === 0 || index === 2 || index === data.colorPalette.primary.length - 3 || index === data.colorPalette.primary.length - 1 
                    ? 'rounded-lg overflow-hidden' 
                    : ''}
                `}
              >
                <div 
                  className="flex flex-col justify-end p-2"
                  style={{ backgroundColor: color.hex, height: '120px', md: '150px' }}
                >
                  <p className="text-xs md:text-sm font-medium text-white">{color.name}</p>
                  <p className="text-xs text-gray-200">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Print Applications */}
      {data.applications.print && data.applications.print.length > 0 && (
        <div className="mb-8 md:mb-16 overflow-x-hidden">
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            {data.applications.print.map((item, index) => (
              <div key={index} className="space-y-2 md:space-y-4">
                <div className="aspect-[3/4] rounded-lg md:rounded-2xl overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm md:text-base font-medium">{item.title}</p>
                <p className="text-xs md:text-sm text-gray-500">{item.type}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Typography */}
      <div className="mb-8 md:mb-16 overflow-x-hidden">
        <div className="space-y-4 md:space-y-8 pl-0">
          <div className="w-full">
            <div className="flex gap-4 md:gap-8 overflow-x-hidden">
              <img
                src={data.typography.primary.image}
                alt={`${data.typography.primary.name} Typography`}
                className="w-full max-h-80 md:max-h-120 object-contain"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center overflow-x-hidden">
              <img
                src={data.typography.secondary.image}
                alt={`${data.typography.secondary.name} Typography`}
                className="w-full max-h-80 md:max-h-120 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Digital Applications */}
      {data.applications.digital && data.applications.digital.length > 0 && (
        <div className="mb-8 md:mb-16 w-full overflow-x-hidden">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {data.applications.digital.map((item, index) => (
              <div key={index} className="space-y-2 md:space-y-4 flex-none w-full">
                <div className="rounded-lg md:rounded-2xl overflow-hidden bg-white w-full">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="bg-white border-t border-gray-200 mt-3">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="w-1/3">
              <AnimatedButton direction="prev" />
            </div>
            <div className="w-1/3 flex justify-end">
              <AnimatedButton direction="next" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-16 md:h-24" />
    </div>
  );
};

export default Info;