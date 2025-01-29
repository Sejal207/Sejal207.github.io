import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle, Check } from 'lucide-react';

const DesignAdventures = () => {
  return (
    <div className="min-h-64 bg-white flex flex-col items-center pt-20 md:px-8">
      {/* Main Title */}
      <h1 className="text-[#4B84BE] text-7xl text-center leading-tight mb-20 font-semibold">
        Let's Craft Design<br />
        Adventures Together!
      </h1>

      {/* Contact Card */}
      <div className="relative w-full max-w-5xl flex justify-center md:w-12 h-auto">
        {/* Write To Us Button */}
        <div className="absolute right-8 -top-6 z-10">
          <img className="w-4/5 sm:w-1/5"src="./assets/writetous.webp" alt="" />
        </div>

        {/* Main Card */}
        <div className="bg-[#FCC852] rounded-3xl px-12 relative overflow-hidden h-[350px] w-[1500px] pt-20 pb-0 flex flex-col justify-between">
          {/* Contact Details */}
          <div className="flex justify-between items-center relative z-10">
            {/* Left Side */}
            <div>
              <div className="text-2xl mb-4">
                +91 81715 27777 | +91 99585 25789
              </div>
              <div className="text-2xl">
                Bangalore | Delhi
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-end gap-4">
              <div className="text-2xl">
                hey@yourregularcompany.com
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-black rounded-full p-2">
                  <Facebook className="w-5 h-5 text-[#FCC852]" />
                </div>
                <div className="bg-black rounded-full p-2">
                  <Instagram className="w-5 h-5 text-[#FCC852]" />
                </div>
                <div className="bg-black rounded-full p-2">
                  <MessageCircle className="w-5 h-5 text-[#FCC852]" />
                </div>
                <div className="bg-black rounded-full p-2">
                  <Linkedin className="w-5 h-5 text-[#FCC852]" />
                </div>
              </div>
            </div>
          </div>

          {/* Background Text */}
          <div className="absolute bottom-4 left-2 right-0 text-[#FFE6AF]/50 text-[112px] font-bold pl-3">
            Let's Get In Touch!
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignAdventures;