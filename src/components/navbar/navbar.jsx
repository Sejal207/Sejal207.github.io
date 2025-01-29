import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: '/', text: 'Home', color: '#DD4626' },
    { path: '/about-us', text: 'About Us', color: '#4B84BE' },
    { path: '/work', text: 'Our Work', color: '#438E88' },
    { path: '/services', text: 'Services', color: '#F2BB46' },
    { path: '/contact-us', text: 'Contact Us', color: '#4B84BE' }
  ];

  return (
    <div className="w-full">
      {/* Logo Section */}
      <div className="flex justify-center py-4">
        <img className="w-32 md:w-48" src="./assets/LOGO.webp" alt="logo" />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end px-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Section */}
      <nav className="w-full" style={{ backgroundColor: '#F2F2F2' }}>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center items-center gap-12 py-4">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`text-black hover:text-black text-base font-light transition-all duration-300`}
                >
                  {link.text}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ backgroundColor: link.color }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Navigation */}
        <ul
          className={`md:hidden flex flex-col items-center gap-6 py-4 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`text-black hover:text-black text-base font-light transition-all duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ backgroundColor: link.color }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;