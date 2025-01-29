



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DesignCard = () => {
  const [showAll, setShowAll] = useState(false);

  const handleSeeMoreOrLess = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="max-w-[1345px] mx-auto p-6">
      <div className="flex flex-row">
        {/* First card */}
        <div
        className="relative w-[1135px] h-full  overflow-hidden flex"
        style={{
          backgroundImage: "url('/assets/services/one.webp')", // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        <div className="relative z-10 flex items-center p-8 w-full">
          {/* Placeholder Section (Left) */}
          <div className="w-1/3 flex items-center justify-center">
            <div className="w-48 h-48  flex items-center justify-center">
              <img src="assets/services/icon1.svg" alt="" />
            </div>
          </div>

          {/* Content Section (Right) */}
          <div className="w-2/3 flex flex-col justify-center items-start text-left text-black px-6">
            <h2 className="text-5xl font-extrabold text-[#438E88] mb-4">
              Graphic Designing
            </h2>
            <p className="text-2xl mb-6 font-medium">
              Crafting Visual Identities That Resonate
            </p>

            <ul className="space-y-1 mb-8">
              {[
                "Naming, Logo, And Identity Design",
                "Brand Manual And Visual Identity Manual Creation",
                "Communication Collaterals (Brochures, Pitch Decks, Flyers, Posters, Etc.)",
                "Brand Signages And Interior Panels",
                "Social Media Identity Design",
                "Packaging Design (Labels, Thank You Cards, Etc.)",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-1 bg-black rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="px-6 py-2 bg-[#438E88] text-white  hover:bg-teal-700 transition">
                Contact Us
              </button>
              <button className="px-6 py-2 bg-[#438E88] text-white  hover:bg-teal-700 transition">
                Our Projects
              </button>
            </div>
          </div>
        </div>
      </div>

        {/* Animated button */}
        <div className="align-middle">
          <motion.button
            className="px-6 py-2 bg-[#438E88] text-white  hover:bg-teal-700 transition"
            onClick={handleSeeMoreOrLess}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {showAll ? 'See Less' : 'See More'}
          </motion.button>
        </div>
      </div>

      {/* Remaining cards */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            key="remaining-cards"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="space-y-24 mt-24"
          >
            {/* Add the remaining card components here */}
            <div
        className="relative w-[1135px] h-full  overflow-hidden flex mt-24 ml-2 mb-24"
        style={{
          backgroundImage: "url('/assets/services/two.webp')", // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        <div className="relative z-10 flex items-center p-8 w-full">
            {/*left side */ }
        <div className="w-2/3 flex flex-col justify-center items-start text-left text-black px-6 ml-16">
            <h2 className="text-5xl font-extrabold text-[#FF81AE] mb-4">
            Copywriting/Creative Writing
            </h2>
            <p className="text-2xl mb-6 font-medium">
            Crafting compelling narratives that Captivate
            </p>

            <ul className="space-y-1 mb-8 text-sm ">
              {[
                "Catchy Phrases for Ads",
                "Social Media Content Creation",
                "Website Content writing",
                "Brand voice Development",
                "Collateral Content Creation",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-1 bg-black rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="px-6 py-2 bg-[#FF81AE] text-white  hover:bg-pink-600 transition">
                Contact Us
              </button>
              <button className="px-6 py-2 bg-[#FF81AE] text-white  hover:bg-pink-600 transition">
                Our Projects
              </button>
            </div>
          </div>
          {/* Placeholder Section (right) */}
          <div className="w-1/3 flex items-center justify-center">
            <div className="w-36 h-36  flex items-start justify-start mr-24">
              <img src="assets/services/icon2.svg" alt="" />
            </div>
          </div>


          
        </div>
      
      </div>
      <div
        className="relative w-[1148px] h-full  overflow-hidden flex"
        style={{
          backgroundImage: "url('/assets/services/three.webp')", // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        <div className="relative z-10 flex items-center p-8 w-full">
          {/* Placeholder Section (Left) */}
          <div className="w-1/3 flex items-center justify-center">
            <div className="w-32 h-32  px-2  flex items-center justify-center">
              <img src="assets/services/icon3.png" alt="" />
            </div>
          </div>

          {/* Content Section (Right) */}
          <div className="w-2/3 flex flex-col justify-center items-start text-left text-black px-6 ml-16 pr-20">
            <h2 className="text-5xl font-extrabold text-[#D75835] mb-4">
            Website design & SEO
            </h2>
            <p className="text-2xl mb-6 font-medium">
            Creating digital experiences that engage and convert
            </p>

            <ul className="space-y-1 mb-8">
              {[
                "Search Engine Optimization (SEO)",
                "Content Creation for Websites",
                "Navigation and User Experience Design",
                "Mobile Optimization",
                "Website Hosting and Development (Shopify, WordPress, Wix, etc.)",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-1 bg-black rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="px-6 py-2 bg-[#D75835] text-white  hover:bg-orange-700 transition">
                Contact Us
              </button>
              <button className="px-6 py-2 bg-[#D75835] text-white  hover:bg-orange-700 transition">
                Our Projects
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative w-[1160px] h-[432px]  overflow-hidden flex mt-24 ml-2 mb-20 pb-8"
        style={{
          backgroundImage: "url('/assets/services/four.webp')", // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        <div className="relative z-10 flex items-center p-8 w-full">
            {/*left side */ }
        <div className="w-[620px] flex flex-col justify-center items-start text-left text-black px-6 ml-16">
            <h2 className="text-5xl font-extrabold text-[#F2BB46] mb-4 w-[720px]">
            Photography & Videography
            </h2>
            <p className="text-2xl mb-6 font-medium">
            Capturing Moments and stories with creativity
            </p>

            <ul className="grid grid-cols-2 gap-x-0 gap-y-2 mb-8 text-sm">
        {[
          "Fashion Photography",
          "Videography Services",
          "Wedding and Event Coverage",
          "Documentaries and Styled Photography",
          "Photojournalism",
          "Art Direction and Styling",
          "2D and 3D Animation",
          "Wedding and Event Coverage",
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 mt-1 bg-black rounded-full"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

            <div className="flex gap-4">
              <button className="px-6 py-2 bg-[#F2BB46] text-white  hover:bg-yellow-500 transition">
                Contact Us
              </button>
              <button className="px-6 py-2 bg-[#F2BB46] text-white  hover:bg-yellow-500 transition">
                Our Projects
              </button>
            </div>
          </div>
          {/* Placeholder Section (right) */}
          <div className="w-1/3 flex items-center justify-center">
            <div className="w-48 h-56  flex items-start justify-start mr-0 align-middle my-auto ">
              <img className="mb-48" src="assets/services/icon4.svg" alt="" />
            </div>
          </div>


          
        </div>
      
      </div>
      <div
        className="relative w-[1118px] h-full  overflow-hidden flex ml-8"
        style={{
          backgroundImage: "url('/assets/services/five.webp')", // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        <div className="relative z-10 flex items-center p-8 w-full">
          {/* Placeholder Section (Left) */}
          <div className="w-1/3 flex items-center justify-center">
            <div className="w-52 h-52  px-2  flex items-center justify-center mx-20">
              <img src="assets/services/icon5.png" alt="" />
            </div>
          </div>

          {/* Content Section (Right) */}
          <div className="w-[1200px] flex flex-col justify-center items-start text-left text-black px-6 ml-4 pr-32">
            <h2 className="text-5xl font-extrabold text-[#4B84BE] mb-4 w-[600px]" >
            Social Media Management & Marketing
            </h2>
            <p className="text-2xl mb-6 font-medium">
            Elevating your brands digital presence
            </p>

            <ul className="space-y-1 mb-8">
              {[
                "Content Creation (graphics, animations)",
                "Social Media Ads Creation and Management",
                "Ad Campaign Management",
                "Analytics and Performance Tracking",
                "Posting and Engagement Strategies",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-1 bg-black rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="px-6 py-2 bg-[#4B84BE] text-white  hover:bg-sky-700 transition">
                Contact Us
              </button>
              <button className="px-6 py-2 bg-[#4B84BE] text-white  hover:bg-sky-700 transition">
                Our Projects
              </button>
            </div>
          </div>
        </div>
      </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated button at the end */}
      {showAll && (
        <div className="flex justify-end mt-8">
          <motion.button
            className="px-6 py-2 bg-[#438E88] text-white  hover:bg-teal-700 transition"
            onClick={handleSeeMoreOrLess}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            See Less
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default DesignCard;