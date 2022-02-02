import React from 'react';
import CardStyling from './card.styled';

const Card = ({ children }) => {
  return <CardStyling>
    {children}
  </CardStyling>;
};

export default Card;
