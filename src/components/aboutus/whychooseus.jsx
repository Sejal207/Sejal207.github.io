import React from 'react';

const WhyChooseUs = () => {
  const stats = [
    { title: 'CLIENTS', value: '40+' },
    { title: 'PROJECTS', value: '55+' },
    { title: 'CUP OF\nCOFFEE', value: '200+' }
  ];

  const options = [
    { text: 'Creativity', hoverColor: '#438E88', borderColor: '#438E88' },
    { text: 'Transparency', hoverColor: '#D784A9', borderColor: '#D784A9' },
    { text: 'Empathy', hoverColor: '#D75835', borderColor: '#D75835' },
    { text: 'Quality', hoverColor: '#F2BB46', borderColor: '#F2BB46' },
    { text: 'Collaboration', hoverColor: '#4B84BE', borderColor: '#4B84BE' }
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 mt-40">
      {/* Stats Circles */}
      <div className="flex justify-center gap-32 mb-32">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative w-64 h-64 border border-black rounded-full flex flex-col items-center justify-center cursor-pointer group transition-colors duration-300 hover:bg-black"
          >
            <h3 className="font-bold text-2xl whitespace-pre-line text-center group-hover:text-white transition-colors duration-300">
              {stat.title}
            </h3>
            <p className="text-5xl font-medium mt-2 group-hover:text-white transition-colors duration-300">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Why Choose Us Title */}
      <h2 className="text-7xl text-center text-[#438E88] mb-16 font-semibold">
        Why Choose Us?
      </h2>

      {/* Options */}
      <div className="flex justify-center gap-10 text-2xl font-semibold">
        {options.map((option, index) => (
          <div
            key={index}
            className="px-8 py-4 rounded-full border cursor-pointer transition-all duration-300"
            style={{
              borderColor: option.borderColor
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = option.hoverColor;
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'black';
            }}
          >
            {option.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;