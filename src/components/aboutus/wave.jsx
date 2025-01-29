import React, { useState, useEffect } from 'react';

const App = () => {
  const textArray = [
    "In this creative hood, our values became the north star",
    "n this creative hood, our values became the north star I",
    " this creative hood, our values became the north star In",
    "this creative hood, our values became the north star In ",
    "his creative hood, our values became the north star In t",
    "is creative hood, our values became the north star In th",
    "s creative hood, our values became the north star In thi",
    " creative hood, our values became the north star In this",
    "creative hood, our values became the north star In this ",
    "reative hood, our values became the north star In this c",
    "eative hood, our values became the north star In this cr",
    "ative hood, our values became the north star In this cre",
    "tive hood, our values became the north star In this crea",
    "ive hood, our values became the north star In this creat",
    "ve hood, our values became the north star In this creati",
    "e hood, our values became the north star In this creativ",
    " hood, our values became the north star In this creative",
    "hood, our values became the north star In this creative ",
    "ood, our values became the north star In this creative h",
    "od, our values became the north star In this creative ho",
    "d, our values became the north star In this creative hoo",
    ", our values became the north star In this creative hood",
    " our values became the north star In this creative hood,",
    "our values became the north star In this creative hood, ",
    "ur values became the north star In this creative hood, o",
    "r values became the north star In this creative hood, ou",
    " values became the north star In this creative hood, our",
    "values became the north star In this creative hood, our ",
    "alues became the north star In this creative hood, our v",
    "lues became the north star In this creative hood, our va",
    "ues became the north star In this creative hood, our val",
    "es became the north star In this creative hood, our valu",
    "s became the north star In this creative hood, our value",
    " became the north star In this creative hood, our values",
    "became the north star In this creative hood, our values ",
    "ecame the north star In this creative hood, our values b",
    "came the north star In this creative hood, our values be",
    "ame the north star In this creative hood, our values bec",
    "me the north star In this creative hood, our values beca",
    "e the north star In this creative hood, our values becam",
    " the north star In this creative hood, our values became",
    "the north star In this creative hood, our values became ",
    "he north star In this creative hood, our values became t",
    "e north star In this creative hood, our values became th",
    " north star In this creative hood, our values became the",
    "north star In this creative hood, our values became the ",
    "orth star In this creative hood, our values became the n",
    "rth star In this creative hood, our values became the no",
    "th star In this creative hood, our values became the nor",
    "h star In this creative hood, our values became the nort",
    " star In this creative hood, our values became the north",
    "star In this creative hood, our values became the north ",
    "tar In this creative hood, our values became the north s",
    "ar In this creative hood, our values became the north st",
    "r In this creative hood, our values became the north sta",
    " In this creative hood, our values became the north star"
  ]

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        (prevIndex + 1) % textArray.length
      );
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-8 relative z-20 -top-36 mt-12">
      <svg
        width="100%"
        height="1000"
        viewBox="0 0 100 50"
        className="absolute top-1/2 left-0 transform -translate-y-1/2"
      >
        {/* Belt Path */}
        <path
          id="beltPath"
          d="M0,25 Q25,15 50,25 Q75,37, 100,25"
          fill="none"
          stroke="#C86040"
          strokeWidth="7"
          strokeLinecap="round"
        />
        
        {/* Animated Text Following Path */}
        <text
          className="text-white font-bold"
          fill="white"
          dy="1"
        >
          <textPath
            href="#beltPath"
            startOffset="50%"
            textAnchor="middle"
            style={{
              offsetPath: 'path("M0,25 Q25,10 50,25 Q75,40 100,25")',
              animation: 'move 3s linear infinite',
              transformOrigin: 'center',
              fontSize: '5px'
            }}
          >
            {textArray[currentTextIndex]}
          </textPath>
         
        </text>
      </svg>
      <svg
        width="100%"
        height="1000"
        viewBox="0 0 100 50"
        className="absolute top-32 left-0 transform -translate-y-1/2 z-40"
      >
        {/* Belt Path */}
        <path
          id="beltPath"
          d="M0,25 Q25,13 50,25 Q75,35 100,25"
          fill="none"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />
        </svg>
      
      <style jsx>{`
        @keyframes move {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
      `}</style>
    </div>
  );
};

export default App;