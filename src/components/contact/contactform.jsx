import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import AnimatedButton from './submit';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    service: '',
    email: '',
    phone: '',
    portfolio: ''
  });

  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    { text: 'Graphic designing services', color: '#4B84BE' },
    { text: 'Photography & Videography services', color: '#438E88' },
    { text: 'Copywriting / Creative writing services', color: '#D784A9' },
    { text: 'Website design & SEO services', color: '#D75835' },
    { text: 'Social Media management & marketing services', color: '#F2BB46' },
    { text: 'Internship/ Job offer', color: '#000000' }
  ];

  const handleServiceClick = (service) => {
    if (selectedServices.includes(service.text)) {
      setSelectedServices(selectedServices.filter(s => s !== service.text));
    } else {
      setSelectedServices([...selectedServices, service.text]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.city || selectedServices.length === 0 || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_city: formData.city,
      services: selectedServices.join(', '),
      from_email: formData.email,
      from_phone: formData.phone,
      portfolio_link: formData.portfolio || 'Not provided'
    };

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_PUBLIC_KEY'
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        city: '',
        service: '',
        email: '',
        phone: '',
        portfolio: ''
      });
      setSelectedServices([]);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      alert('Failed to submit form. Please try again.');
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 pt-10 md:pt-20 pb-16 md:pb-32">
      <h1 className="text-4xl md:text-7xl mb-10 md:mb-20 font-semibold" style={{ color: '#D75835' }}>
        We'd love to hear from you
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name and City row */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="w-full md:flex-1 flex flex-col md:flex-row gap-2 items-start md:items-center">
            <label className="text-lg md:text-xl w-full md:w-40 font-medium">My name is*</label>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-b border-black focus:border-gray-600 outline-none text-sm mt-1 md:mt-0"
            />
          </div>
          <div className="w-full md:flex-1 flex flex-col md:flex-row gap-2 items-start md:items-center">
            <label className="text-lg md:text-xl w-full md:w-16 font-medium">From*</label>
            <input
              type="text"
              placeholder="City/State"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full border-b border-black focus:border-gray-600 outline-none text-sm mt-1 md:mt-0"
            />
          </div>
        </div>

        {/* Service Interest */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center">
          <label className="text-lg md:text-xl w-full md:w-56 font-medium">I am interested in*</label>
          <input
            type="text"
            placeholder="Service"
            value={selectedServices.join(', ')}
            readOnly
            className="w-full border-b border-black focus:border-gray-600 outline-none text-sm mt-1 md:mt-0"
          />
        </div>

        {/* Service Options */}
        <div className="flex flex-wrap gap-3">
          {services.map((service, index) => (
            <button
              key={index}
              type="button"
              className={`px-3 md:px-4 py-1 rounded-xl border text-sm transition-colors font-medium ${
                selectedServices.includes(service.text)
                  ? 'bg-opacity-20'
                  : 'bg-[#FFFDF8] hover:bg-gray-50'
              }`}
              style={{
                borderColor: service.color,
                color: service.color,
                backgroundColor: selectedServices.includes(service.text) 
                  ? `${service.color}20` 
                  : ''
              }}
              onClick={() => handleServiceClick(service)}
            >
              {service.text}
            </button>
          ))}
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="w-full md:flex-1 flex flex-col md:flex-row gap-2 items-start md:items-center">
            <label className="text-lg md:text-xl w-full md:w-72 font-medium">you can reach me at*</label>
            <input
              type="email"
              placeholder="Email Id"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border-b border-black focus:border-gray-600 outline-none text-sm mt-1 md:mt-0"
            />
          </div>
          <div className="w-full md:flex-1 flex flex-col md:flex-row gap-2 items-start md:items-center">
            <label className="text-lg md:text-xl w-full md:w-8 font-medium">&*</label>
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border-b border-black focus:border-gray-600 outline-none text-sm mt-1 md:mt-0"
            />
          </div>
        </div>

        {/* Portfolio Link */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center">
          <label className="text-lg md:text-xl w-full md:w-48 font-medium">my portfolio link</label>
          <input
            type="text"
            placeholder="Google Drive Link/ Behance Link"
            value={formData.portfolio}
            onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
            className="w-full border-b border-black focus:border-gray-600 outline-none text-sm mt-1 md:mt-0"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center md:justify-start">
          <button
            type="submit"
            className="flex items-center gap-2 px-2 py-2 rounded-full border border-black hover:bg-gray-50 transition-colors"
          >
            <AnimatedButton />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;