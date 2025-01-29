import React from 'react';
import AnimatedButton from './AnimatedButton';

const Homesection = () => {
  const logos = [
    { src: "./assets/home/icons/1.png", alt: "Hundred Hands Logo" },
    { src: "./assets/home/icons/2.png", alt: "Abiliti Logo" },
    { src: "./assets/home/icons/3.png", alt: "OAM Logo" },
    { src: "./assets/home/icons/4.png", alt: "Llama Logo" },
    { src: "./assets/home/icons/5.png", alt: "Signs of Happiness Logo" },
    { src: "./assets/home/icons/6.png", alt: "Soul Logo" },
    { src: "./assets/home/icons/7.png", alt: "Atheon Logo" },
    { src: "./assets/home/icons/8.png", alt: "M Logo" },
    { src: "./assets/home/icons/9.png", alt: "A Logo" },
    { src: "./assets/home/icons/10.png", alt: "B Logo" },
  ];

  return (
    <div className="bg-white flex flex-col items-center justify-center relative overflow-hidden pb-16 md:pb-32">
      {/* Colored Containers */}
      <div className="min-h-[300px] md:min-h-[500px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 px-4 md:px-8 relative z-10">
        {/* Cards */}
        {[
          { title: 'Graphic Designing', description: 'Crafting Visual Identities That Resonate', background: "url('./assets/home/green.webp')" },
          { title: 'Copywriting / Creative Writing', description: 'Crafting Compelling Narratives That Captivate', background: "url('./assets/home/pink.webp')" },
          { title: 'Website Design & SEO', description: 'Creating Digital Experiences That Engage And Convert', background: "url('./assets/home/orange.webp')" },
          { title: 'Photography & Videography', description: 'Capturing Moments And Stories With Creativity', background: "url('./assets/home/yellow.webp')" },
          { title: 'Social Media Management & Marketing', description: 'Elevating Your Brand\'s Digital Presence', background: "url('./assets/home/blue.webp')" },
        ].map((card, index) => (
          <div 
            key={index} 
            className="p-4 md:p-8 rounded-lg flex flex-col justify-center items-center text-center transform transition-transform duration-300 hover:scale-100"
            style={{ 
              backgroundImage: card.background, 
              backgroundSize: 'cover',
              minHeight: '250px',
            }}
          >
            <div className="text-container mt-0 md:-mt-20">
              <h3 className="text-lg md:text-xl font-bold text-white">{card.title}</h3>
              <p className="mt-2 text-sm md:text-base text-white">{card.description}</p>
            </div>
            <div className="mt-4">
              <AnimatedButton />
            </div>
          </div>
        ))}
      </div>

      {/* Overlapping Diagonal Carousel */}
      <div className="w-full flex items-center justify-center z-30 mt-8 md:-mt-28 lg:-mt-32">
        <div 
          className="transition-transform duration-300 ease-in-out overflow-hidden"
          style={{
            height: '100px',
            backgroundColor: '#ED9076',
            width: '100%',
            transform: 'rotate(7deg)',
            position: 'relative',
            '@media (min-width: 768px)': {
              height: '200px',
            },
          }}
        >
          <div 
            className="flex absolute top-0 left-0 h-full"
            style={{
              animation: 'carousel 20s linear infinite',
              width: 'max-content',
              willChange: 'transform'
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center w-[50px] md:w-[100px] p-2"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-auto grayscale transition-all duration-300 hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div 
          className="transition-transform duration-300 ease-in-out overflow-hidden z-20"
          style={{
            height: '135px',
            backgroundColor: 'white',
            width: '100%',
            transform: 'rotate(7deg)',
            position: 'relative',
            '@media (min-width: 768px)': {
              height: '200px',
            },
          }}
        ></div>

      <style jsx>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .carousel {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
};

export default Homesection;