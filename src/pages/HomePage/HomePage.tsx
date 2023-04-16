import React, { useEffect, useState } from 'react';
import './HomePage.css';
import Card from 'components/Card/Card';
import SearchInput from 'components/SearchInput/SearchInput';
import Popup from 'components/Popup/Popup';
import { Result } from 'models/models';
import { personSlise } from 'store/reducers/PersonSlice';
import { useAppDispatch } from 'hooks/redux';
import { useAppSelector } from 'hooks/redux';
import { fetchPersons } from 'store/reducers/ActionCreators';

const HomePage = () => {
  const { searchText, persons } = useAppSelector((state) => state.personReducer);
  // const { setSearchText } = personSlise.actions;
  const dispatch = useAppDispatch();

  const [data, setData] = useState<Result[]>([]);
  const [popupActive, setPopupActive] = useState(false);
  const [currentPerson, setCurrentPerson] = useState<Result | null>(null);
  // const [errorMessage, setEroroMesage] = useState('');

  useEffect(() => {
    // fetchPersons(localStorage.getItem('curSearch') || '');
    updatePersons();
  }, []);

  const updatePersons = async () => {
    dispatch(fetchPersons(''));
  };

  const showPopup = (person: Result) => {
    setPopupActive(true);
    setCurrentPerson(person);
  };

  const closePopup = () => {
    setPopupActive(false);
  };

  return (
    <section className="section_home">
      <h1>Home</h1>
      <SearchInput />
      <div className="container">
        {persons.map((person) => (
          <Card showPopup={() => showPopup(person)} person={person} key={person.id} />
        ))}
      </div>
      {/* <div className="container">
        {errorMessage
          ? errorMessage
          : data.map((person) => (
              <Card showPopup={() => showPopup(person)} person={person} key={person.id} />
            ))}
      </div> */}
      <Popup active={popupActive} setActive={closePopup} currentPerson={currentPerson} />
    </section>
  );
};

export default HomePage;
