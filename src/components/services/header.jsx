import React from "react";

const BrandHeader = () => {
  return (
    <div className="max-w-8xl mx-auto text-center px-4 py-12">
      <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-bold mb-6">
        Lost In The{" "}
        <span className="text-[#4B84BE]">Digital Wilderness</span> With
        <br className="hidden md:block" /> A Brand That's{" "}
        <span className="text-[#438E88]">A Sleeping Dragon?</span>
      </h1>

      <h2 className="text-xl md:text-2xl lg:text-[2rem] text-[#D75835] font-normal mb-6">
        Fear Not, Your Regular Company Swoops In On A Griffin!
      </h2>

      <p className="text-sm md:text-lg lg:text-2xl text-black max-w-full md:max-w-4xl lg:max-w-6xl mx-auto leading-relaxed font-thin">
        We weave magic with captivating graphics and enchanting stories, bringing your brand to life across
        the digital realm. Let's build a kingdom that shimmers with personality
        <br className="hidden md:block" />
        and leaves everyone spellbound!
      </p>
    </div>
  );
};

export default BrandHeader;
