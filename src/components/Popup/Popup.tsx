import React, { FC } from 'react';
import './Popup.css';
import { Result } from 'components/Api/Api';

type PopupProps = {
  active: boolean;
  setActive: () => void;
  currentPerson: Result | null;
};

const Popup: FC<PopupProps> = (props) => {
  return (
    <div>
      {props.currentPerson ? (
        <div className={props.active ? 'popup active' : 'popup'} onClick={() => props.setActive()}>
          <div
            className={props.active ? 'popup__content active' : 'popup__content'}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={props.currentPerson.image} alt="person" />
            <h2>{props.currentPerson.name}</h2>
            <h3>Gender: {props.currentPerson.gender}</h3>
            <h3>Species: {props.currentPerson.species}</h3>
            <h3>Status: {props.currentPerson.status}</h3>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Popup;
