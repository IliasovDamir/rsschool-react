import React, { FC } from 'react';
import './Card.css';
import { Result } from 'components/Api/Api';

type CardProps = {
  person: Result;
  showPopup: () => void;
};

const Card: FC<CardProps> = (props) => {
  return (
    <div className="card">
      <img src={props.person.image} alt="person" />
      <h2>{props.person.name}</h2>
      <button onClick={props.showPopup}>More details</button>
    </div>
  );
};

export default Card;
