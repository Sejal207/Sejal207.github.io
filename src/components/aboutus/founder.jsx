import React from 'react';

const FounderSection = () => {
    return (
      <div className="w-full max-w-6xl mx-auto py-40 h-5/6 align-middle my-auto -mt-16 z-50">
        <div className="flex justify-between items-start px-8">
          <div className="flex flex-col space-y-8 w-full max-w-2xl ">
            <h1 className="text-7xl font-bold " style={{ color: '#438E88' }}>
              Meet Our Founder
            </h1>
            
            <h2 className="text-3xl mb-12 font-normal" style={{ color: '#D75835' }}>
              Not just a graphic designer but the visionary force behind Your Regular Company.
            </h2>
            
            <div className="space-y-8">
              <p className="text-2xl font-light leading-relaxed pr-28">
                <span className="font-semibold">Soha Parvez's</span> colorful personality and out-of-the-box thinking became the bedrock of our ideology – adding magic and color to our work.
              </p>
              
              <p className="text-2xl font-light leading-relaxed pr-40" >
                Our unique selling proposition? Creating the extraordinary out of the regular, because, well, why settle for the mundane?
              </p>
            </div>
          </div>

          {/* Image and Name Section */}
          <div className="flex flex-col items-center ">
            {/* Image Placeholder */}
            <div className="w-80 h-96 bg-gray-200 rounded-lg mb-6 ">
              {/* Replace with the actual image */}
              <p className="flex justify-center items-center text-gray-500 ">Image Placeholder</p>
            </div>

            {/* Founder Name */}
            <h3 className="text-3xl font-semibold">Soha Parvez</h3>
          </div>
        </div>
      </div>
    );
};

export default FounderSection;
