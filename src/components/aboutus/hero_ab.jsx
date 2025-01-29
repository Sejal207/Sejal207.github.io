import React, { useEffect, useState } from 'react';
// import Navbar from '../components/navbar/navbar';


const HeroAb = () => {
  const circles = [
    { id: 1, src: './assets/aboutus/a5.png', initialPosition: 'left-32 top-0' },
    { id: 2, src: './assets/aboutus/a3.png', initialPosition: 'left-24 top-64' },
    { id: 3, src: './assets/aboutus/a2.png', initialPosition: 'left-12 top-72' },
    { id: 4, src: './assets/aboutus/a4.png', initialPosition: 'right-2/3 top-20' },
    { id: 5, src: './assets/aboutus/a5.png', initialPosition: 'right-10 top-full' },
    { id: 6, src: './assets/aboutus/a1.png', initialPosition: 'left-1/2 top-full' },
    { id: 7, src: './assets/aboutus/a3.png', initialPosition: 'left-2/3 top-full' },
    { id: 8, src: './assets/aboutus/a4.png', initialPosition: 'right-40 bottom-12' },
    { id: 9, src: './assets/aboutus/a4.png', initialPosition: 'left-1/3 top-96' },
    { id: 10, src: './assets/aboutus/a2.png', initialPosition: 'right-64 bottom-40' },
  ];

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[700px] bg-white">
     
      
      {/* Hero Content */}
      <div className="relative pt-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-[80px] font-bold mb-4 opacity-0 transform translate-y-4 animate-fade-in-up font-sans">
  We Are
</h1>
<h2 className="text-[80px] font-bold text-blue-500 opacity-0 transform translate-y-4 animate-fade-in-up animation-delay-200 font-sans" id =
"blue">
  Your Regular Company
</h2>

        </div>

        {/* Animated Circles */}
        {circles.map((circle) => (
          <img
            key={circle.id}
            src={circle.src}
            alt={`Circle ${circle.id}`}
            className={`
              absolute rounded-full ${circle.initialPosition}
              transition-all duration-1000 ease-in-out
              ${animated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
            style={{
              transitionDelay: `${Math.random() * 1000}ms`,
              animation: 'float 2s ease-in-out infinite',
              animationDelay: `${Math.random() * 1000}ms`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroAb;
