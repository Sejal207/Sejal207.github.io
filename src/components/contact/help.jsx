import React from 'react';

const HelpSection = () => {
  return (
    <div className="bg-[#FCF1DA] min-h-full px-6 py-12">
      <div>
        <h1 className="text-[42px] font-medium mb-8">
          How can we help?
        </h1>
        
        <div className="flex flex-col gap-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl mb-1 font-normal">
                Lost In Design Wilderness?
              </h2>
              <p className="text-lg leading-relaxed font-light">
                Unfurl Your Design Scroll And Send A Message Outlining Your Needs.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl mb-1 font-normal">
                Master Designer In The Making?
              </h2>
              <p className="text-lg leading-relaxed font-light">
                Join Our Fellowship – Send Your Resume And Portfolio.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl mb-1 font-normal">
              Digital Wizards Or Social Media Mavens?
            </h2>
            <p className="text-lg leading-relaxed font-light">
              Collaborate With Us On Projects – Reach Out To Join Forces!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;