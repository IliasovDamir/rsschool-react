import React, { FC } from 'react';
import { IFormCards } from './Forms';
import './Forms.css';

type FormsCardProps = { card: IFormCards };

const FormsCard: FC<FormsCardProps> = ({ card }) => {
  return (
    <div className="form_card">
      <img src={card.photo} alt="photo" />
      <h3>Name: {card.name}</h3>
      <h3>Date: {card.date}</h3>
      <h3>Class: {card.carCategory}</h3>
      {/* <h3>Services: {card.services.join(', ')}</h3> */}
      <h3>Rental duration: {card.daysToRent}</h3>
    </div>
  );
};

export default FormsCard;
