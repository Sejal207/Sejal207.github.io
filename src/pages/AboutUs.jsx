import React from 'react';
import HeroAb from '../components/aboutus/hero_ab';
import WhyChooseUs from '../components/aboutus/whychooseus';
import ExpandableCards from '../components/aboutus/expandable';
import FounderSection from '../components/aboutus/founder';
import CreativeJourneyDisplay from '../components/aboutus/display';
import Wave from '../components/aboutus/wave';
const AboutUs = () => {
  return (
    <div>
      <HeroAb />
     <CreativeJourneyDisplay />
     <Wave />
      <FounderSection />
      <ExpandableCards />
      <WhyChooseUs />

         
    </div>
  );
};

export default AboutUs;
