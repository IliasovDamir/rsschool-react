import React, { useEffect, useState } from 'react';
import './HomePage.css';
import Card from 'components/Card/Card';
import SearchInput from 'components/SearchInput/SearchInput';
import searchPerson, { Result } from 'components/Api/Api';
import Popup from 'components/Popup/Popup';

const HomePage = () => {
  const [data, setData] = useState<Result[]>([]);
  const [popupActive, setPopupActive] = useState(false);
  const [currentPerson, setCurrentPerson] = useState<Result | null>(null);

  useEffect(() => {
    fetchPersons(localStorage.getItem('curSearch') || '');
  }, []);

  const fetchPersons = async (curSearch: string) => {
    const newData = await searchPerson(curSearch);
    setData(newData.results);
  };

  const updateSearchText = async (text: string) => {
    const data = await searchPerson(text);
    const curPersons = data.results;
    setData(curPersons);
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
      <SearchInput updateData={updateSearchText} />
      <div className="container">
        {data.map((person) => (
          <Card showPopup={() => showPopup(person)} person={person} key={person.id} />
        ))}
      </div>
      <Popup active={popupActive} setActive={closePopup} currentPerson={currentPerson} />
    </section>
  );
};

export default HomePage;
