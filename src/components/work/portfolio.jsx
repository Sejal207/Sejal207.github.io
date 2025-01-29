import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../Info/data/portfolioData.json';
import protfolioData from '../Info/data/protfolioData.json';
import Header from './designheader';

const PortfolioGrid = () => {
  const [activeTab, setActiveTab] = useState('service');
  const [activeFilter, setActiveFilter] = useState(null);
  
  const filters = [
    { id: 'identity', label: 'Identity', color: 'bg-blue-50' },
    { id: 'social', label: 'Social Media Management & Marketing', color: 'bg-yellow-50' },
    { id: 'website', label: 'Website design & SEO', color: 'bg-red-50' },
    { id: 'space', label: 'Space/Events', color: 'bg-pink-50' },
    { id: 'print', label: 'Print', color: 'bg-gray-200' },
    { id: 'photo', label: 'Photography & Videography', color: 'bg-cyan-50' }
  ];

  const portfolioItems = [
    ...Object.entries(portfolioData || {}).map(([key, value]) => ({
      ...value,
      id: key,
      source: 'portfolio',
      services: Array.isArray(value.services) ? value.services : [] // Ensure services is an array
    })),
    ...Object.entries(protfolioData || {}).map(([key, value]) => ({
      ...value,
      id: key,
      source: 'protfolio',
      services: Array.isArray(value.services) ? value.services : [] // Ensure services is an array
    }))
  ];

  const filterProjects = (items) => {
    if (!activeFilter) return items;
    
    return items.filter(item => {
      if (activeTab === 'service') {
        return item.services.some(service => 
          service.toLowerCase().includes(activeFilter.toLowerCase())
        );
      } else {
        return item.industry?.toLowerCase().includes(activeFilter.toLowerCase());
      }
    });
  };

  const handleFilterClick = (filterId) => {
    setActiveFilter(activeFilter === filterId ? null : filterId);
  };

  const filteredItems = filterProjects(portfolioItems);

  return (
    <>
    <Header />
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Main Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex border border-[#BCBCBC] overflow-hidden text-lg rounded-lg">
          <button
            className={`px-12 py-3 transition-colors ${
              activeTab === 'service' ? 'bg-[#FCC852]' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('service')}
          >
            By Service
          </button>
          <button
            className={`px-12 py-3 transition-colors ${
              activeTab === 'industry' ? 'bg-[#FCC852]' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('industry')}
          >
            By Industry
          </button>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleFilterClick(filter.id)}
            className={`${filter.color} px-6 py-2 rounded-full text-sm 
              transition-all hover:shadow-md
              ${activeFilter === filter.id ? 'ring-2 ring-black' : ''}
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <Link
          key={item.id}
          to={
            item.source === 'portfolio' 
              ? `/portfolio/portfolio/${item.id}` 
              : `/portfolio/protfolio/${item.id}`
          }
          className="block transform transition-transform hover:-translate-y-1"
        >
            <div className="group relative">
              <div className="aspect-square rounded-[48px] overflow-hidden bg-gray-200 relative">
                <img
                  src={item.logo}
                  alt={`${item.title} portfolio item`}
                  className="w-full h-full object-cover"
                />
                
                {/* Hover Content */}
                <div className="absolute inset-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <div className="mb-4">
                    <p className="font-medium">Services:</p>
                    <ul className="list-none">
                      {item.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-gray-300">{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Industry:</p>
                    <p className="text-gray-300">{item.industry || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No projects found matching the selected filter.</p>
        </div>
      )}
    </div>
    </>
  );
};

export default PortfolioGrid;
