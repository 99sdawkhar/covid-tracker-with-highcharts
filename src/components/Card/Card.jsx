import React from 'react';
import CardStyling from './card.styled';

const Card = ({ children, className }) => {
  return <CardStyling className={className}>
    {children}
  </CardStyling>;
};

export default Card;
