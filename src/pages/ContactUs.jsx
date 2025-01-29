import React from 'react';
import ContactForm from '../components/contact/contactform';
import HelpSection from '../components/contact/help';
import DesignAdventures from '../components/contact/design';
const AboutUs = () => {
  return (
    <div>
      <ContactForm />
      <HelpSection />
      <DesignAdventures />
    </div>
  );
};

export default AboutUs;
