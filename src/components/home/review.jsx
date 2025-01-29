import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    { image: "/assets/home/testimonial/1.png" },
    { image: "/assets/home/testimonial/2.png" },
    { image: "/assets/home/testimonial/3.png" },
    { image: "/assets/home/testimonial/4.png" },
    
  ];

  // Double the testimonials for smooth infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="max-w-7xl mx-auto py-16 overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl font-semibold mb-16">
        <span className="text-[#F15A2B]">From our</span>{' '}
        <span className="text-[#2B7BC4]">Clients</span>
      </h2>

      <div className="w-full overflow-hidden relative mb-20">
      <div className="flex animate-testimonial-scroll space-x-2 justify-center">
        {infiniteTestimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={`Testimonial ${index + 1}`}
            className="w-1/3 h-[370px] object-contain flex-shrink-0"
          />
        ))}
      </div>
    </div>



      <div className="text-center">
  <h1 className="text-8xl font-medium ">
    <span className="text-[#FF69B4] block">
      And we are ready to roll out
    </span>
    <span className="text-gray-800 block">
      the happy carpet for you too!
    </span>
  </h1>
</div>



      <style jsx>{`
        .animate-testimonial-scroll {
          animation: testimonialScroll 40s linear infinite;
        }

        @keyframes testimonialScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSection;
