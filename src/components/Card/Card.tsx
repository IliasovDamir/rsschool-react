import React, { FC } from 'react';
import './Card.css';
import { Result } from 'models/models';

type CardProps = {
  person: Result;
  showPopup: () => void;
};

const Card: FC<CardProps> = ({ person, showPopup }) => {
  return (
    <div className="card">
      <img src={person.image} alt="person" />
      <h2>{person.name}</h2>
      <button onClick={showPopup}>More details</button>
    </div>
  );
};

export default Card;
