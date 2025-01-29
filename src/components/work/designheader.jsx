import React from 'react';

const DesignChronicles = () => {
  return (
    <div className="min-h-full bg-white flex flex-col items-center justify-center text-center px-4 mt-12 md:mt-16">
      {/* Main Title Section */}
      <div className="max-w-4xl">
        <h1 className="mb-4">
          <div className="text-[#4B84BE] text-4xl md:text-6xl lg:text-7xl font-semibold mb-4">
            Design Chronicles:
          </div>
          <div className="text-[#FF81AE] text-4xl md:text-6xl lg:text-7xl font-semibold">
            Where Ideas Meet YRC
          </div>
        </h1>

        {/* Subtitle */}
        <div className="text-[#438E88] text-2xl md:text-3xl lg:text-4xl font-medium my-6 md:my-10">
          Embark on a visual joyride
        </div>
      </div>

      <div className="max-w-6xl">
        {/* Description Paragraphs */}
        <div className="space-y-4 md:space-y-6">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-extralight px-2 md:px-6">
            It's not just a project page, it's the epic tale of how we sprinkle magic on brands, crank up messages to 11, and cook up experiences so unique, even unicorns are jealous.
          </p>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-extralight px-2 md:px-6">
              Get ready for a rollercoaster of creativity where pixels party, fonts dance, and your brand becomes the coolest kid in the digital playground!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignChronicles;
