import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import portfolioData from '../components/Info/data/protfolioData.json';
import Info from '../components/Info/info';

const InfoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate('/');
  };

  const item = portfolioData[id];

  if (!item) {
    return <p>Project not found.</p>;
  }

  return <Info item={item} onBack={handleBack} />;
};

export default InfoPage;
