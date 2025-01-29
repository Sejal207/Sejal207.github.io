import React from 'react';
import WhoAreWeSection from '../components/home/home_hero';
import Homesection from '../components/home/whatToExpect';
import Review from '../components/home/review';
import Bttn from '../components/home/lastbutton';
// import LogoCarousel from '../components/home/logo';
const Home = () => {
  return (
    <div>
      <img src="./assets/home/Frame.webp" alt="frame" />
      <WhoAreWeSection />
      <Homesection />
      <Review />
      <Bttn />

    </div>
  );
};

export default Home;
