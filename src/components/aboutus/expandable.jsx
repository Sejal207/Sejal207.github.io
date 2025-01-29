import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ExpandableCards = () => {
  const cardRefs = useRef([]);
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: "green",
      color: "#438E88",
      content:
        "As we venture into client relationships, it’s not just about consultation; it’s about collaboration.",
    },
    {
      id: "pink",
      color: "#D784A9",
      content:
        "We value our clients and their opinions, striking the delicate balance between expertise and shared visions.",
    },
    {
      id: "orange",
      color: "#D75835",
      content:
        "Your Regular Company’s approach is a dance – a perfect blend of honoring client desires and infusing our unique flair.",
    },
    {
      id: "yellow",
      color: "#F2BB46",
      content:
        "Join us in brainstorming; your involvement is the secret ingredient, as much or as little as you desire.",
    },
  ];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".cards-section",
      start: "top center",
      end: "bottom center",
      pin: true,
      onUpdate: (self) => {
        const scrollPos = self.progress * cards.length;
        const activeIndex = Math.round(scrollPos);
        if (cards[activeIndex] && cards[activeIndex].id !== activeCard) {
          setActiveCard(cards[activeIndex].id);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [activeCard, cards]);

  useEffect(() => {
    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;

      // Animate cards
      if (cards[index].id === activeCard) {
        gsap.to(ref, {
          height: 600, // Expanded height
          duration: 0.5,
          backgroundColor: cards[index].color,
        });
        gsap.to(ref.querySelector("p"), {
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
        });
      } else {
        gsap.to(ref, { height: 50, duration: 0.5 }); // Collapsed height
        gsap.to(ref.querySelector("p"), { opacity: 0, duration: 0.3 });
      }
    });
  }, [activeCard, cards]);

  return (
    <div className="cards-section w-full ">
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (cardRefs.current[index] = el)}
          className="overflow-hidden transition-all duration-500"
          style={{
            backgroundColor: card.color,
            height: activeCard === card.id ? 400 : 50,
          }}
        >
          <div className="h-full flex flex-col justify-center items-center text-center">
            <p
              className={`text-white text-5xl font-semibold px-40 leading-relaxed transition-opacity duration-500 ${
                activeCard === card.id ? "opacity-100" : "opacity-0"
              }`}
            >
              {card.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpandableCards;
