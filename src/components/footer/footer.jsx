import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative text-white min-h-[620px] md:min-h-[620px] w-full mt-24">
      {/* Background image */}
      <img
        src="./assets/footer.webp"
        alt="Footer background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-4 md:ml-32 px-4 pt-72 md:pt-80">
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0 mb-5 text-sm">
          <Link to="/" className="hover:text-gray-200 transition-colors text-center">HOME</Link>
          <Link to="/about-us" className="hover:text-gray-200 transition-colors text-center">ABOUT US</Link>
          <Link to="/our-work" className="hover:text-gray-200 transition-colors text-center">OUR WORK</Link>
          <Link to="/services" className="hover:text-gray-200 transition-colors text-center">SERVICES</Link>
          <Link to="/contact-us" className="hover:text-gray-200 transition-colors text-center">CONTACT US</Link>
        </nav>
        
        {/* Newsletter Subscription */}
        <div className="flex justify-center mb-8 px-4">
          <div className="flex flex-col md:flex-row max-w-md w-full">
            <input
              type="email"
              placeholder="Subscribe For Newsletter"
              className="flex-1 px-4 py-2 bg-transparent border border-white text-white placeholder-[0D0D0D] mb-2 md:mb-0"
            />
            <button className="px-6 py-2 bg-white text-[#2F5C55] font-medium hover:bg-gray-100 transition-colors md:ml-0">
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;