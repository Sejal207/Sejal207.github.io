import React, { useEffect, useRef, useState } from 'react';

const WhoAreWeSection = () => {
  const [visibleStages, setVisibleStages] = useState({
    section: false,
    hand1: false,
    hand2: false,
    hand3: false
  });
  const sectionRef = useRef(null);
  const hand1Ref = useRef(null);
  const hand2Ref = useRef(null);
  const hand3Ref = useRef(null);

  const [hand1Width, setHand1Width] = useState('0%');
  const [hand2Width, setHand2Width] = useState('0%');
  const [hand3Width, setHand3Width] = useState('0%');

  const [hand1X, setHand1X] = useState(-320);
  const [hand1Y, setHand1Y] = useState(100);

  const [hand2X, setHand2X] = useState(-312);
  const [hand2Y, setHand2Y] = useState(-100);

  const [hand3X, setHand3X] = useState(310);
  const [hand3Y, setHand3Y] = useState(-50);

  useEffect(() => {
    const createObserver = (ref, stageName) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Update visible stages
            setVisibleStages(prev => ({ ...prev, [stageName]: true }));

            // Sequentially show hands
            if (stageName === 'section') {
              // Delay hand appearances
              setTimeout(() => {
                setHand2Width('35%');
              }, 500);
              setTimeout(() => {
                setHand1Width('20%');
              }, 1000);
              setTimeout(() => {
                setHand3Width('35%');
              }, 1500);
            }

            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    };

    const sectionObserver = createObserver(sectionRef, 'section');
    const hand1Observer = createObserver(hand1Ref, 'hand1');
    const hand2Observer = createObserver(hand2Ref, 'hand2');
    const hand3Observer = createObserver(hand3Ref, 'hand3');

    return () => {
      [sectionObserver, hand1Observer, hand2Observer, hand3Observer].forEach(observer => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Animated Hands */}
      <div className="absolute w-full max-w-4xl mx-auto inset-x-0 flex justify-between space-x-4">
        <div
          ref={hand2Ref}
          className={`transition-all duration-1000 delay-300 transform`}
          style={{
            width: hand2Width,
            transform: `translateX(${hand2X}px) translateY(${hand2Y}px)`,
          }}
        >
          <img
            src="/assets/home/hand3.webp"
            alt="Decorative hand 3"
            className="w-full animate-float"
          />
        </div>
        <div
          ref={hand1Ref}
          className={`transition-all duration-1000 transform`}
          style={{
            width: hand1Width,
            transform: `translateX(${hand1X}px) translateY(${hand1Y}px)`,
          }}
        >
          <img
            src="/assets/home/hand1.webp"
            alt="Decorative hand 1"
            className="w-full animate-float"
          />
        </div>
        <div
          ref={hand3Ref}
          className={`transition-all duration-1000 delay-500 transform`}
          style={{
            width: hand3Width,
            transform: `translateX(${hand3X}px) translateY(${hand3Y}px)`,
          }}
        >
          <img
            src="/assets/home/hand2.webp"
            alt="Decorative hand 2"
            className="w-full animate-float"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl text-center z-10 mb-80">
  <h1 className="text-5xl md:text-6xl font-bold mb-8 text-teal-600">
    Who Are We?
  </h1>

  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
    Your Regular Company – where design is our playground!
  </h2>

  <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
    With a team of part design gurus, part marketing mavens, and a sprinkle of web wizards, we're on a mission to turn your ideas into visual magic.
  </p>

  <a
    href="#know-more"
    className="inline-block text-blue-600 hover:text-blue-800 text-lg font-medium"
  >
    Know More
  </a>
</div>


      {/* Yellow Wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img
          src="/assets/home/yellowLine.webp"
          alt="Decorative yellow wave"
          className="w-full object-cover"
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WhoAreWeSection;