import React, { useEffect, useState } from 'react';
import './HomePage.css';
import Card from 'components/Card/Card';
import SearchInput from 'components/SearchInput/SearchInput';
import Popup from 'components/Popup/Popup';
import { Result } from 'models/models';
import { useAppDispatch } from 'hooks/redux';
import { useAppSelector } from 'hooks/redux';
import { fetchPersons } from 'store/reducers/ActionCreators';

const HomePage = () => {
  const { searchText, persons, isLoading, error } = useAppSelector((state) => state.personReducer);
  // const { setSearchText } = personSlise.actions;
  const dispatch = useAppDispatch();
  console.log('searchText', searchText);

  const [popupActive, setPopupActive] = useState(false);
  const [currentPerson, setCurrentPerson] = useState<Result | null>(null);

  useEffect(() => {
    persons.length === 0 && dispatch(fetchPersons(searchText));
    console.log('searchText', searchText);
  }, []);

  const showPopup = (person: Result) => {
    setPopupActive(true);
    setCurrentPerson(person);
  };

  const closePopup = () => {
    setPopupActive(false);
  };

  console.log('error', error);
  console.log('persons', persons);

  return (
    <section className="section_home">
      <h1>Home</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <SearchInput />
      <div className="container">
        {!persons ? (
          <h2>Characters not found</h2>
        ) : (
          persons.map((person) => (
            <Card showPopup={() => showPopup(person)} person={person} key={person.id} />
          ))
        )}
      </div>
      <Popup active={popupActive} setActive={closePopup} currentPerson={currentPerson} />
    </section>
  );
};

export default HomePage;
