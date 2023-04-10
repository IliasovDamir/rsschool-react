import React, { FC } from 'react';
import './Popup.css';
import { Result } from 'components/Api/Api';

type PopupProps = {
  active: boolean;
  setActive: () => void;
  currentPerson: Result | null;
};

const Popup: FC<PopupProps> = ({ active, setActive, currentPerson }) => {
  return (
    <div>
      {currentPerson ? (
        <div className={active ? 'popup active' : 'popup'} onClick={() => setActive()}>
          <div
            className={active ? 'popup__content active' : 'popup__content'}
            onClick={(event) => event.stopPropagation()}
          >
            <img src={currentPerson.image} alt="person" />
            <h2>{currentPerson.name}</h2>
            <h3>Gender: {currentPerson.gender}</h3>
            <h3>Species: {currentPerson.species}</h3>
            <h3>Status: {currentPerson.status}</h3>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Popup;
