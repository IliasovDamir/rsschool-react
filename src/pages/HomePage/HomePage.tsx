import React, { useState } from 'react';
import './HomePage.css';
import Card from 'components/Card/Card';
import SearchInput from 'components/SearchInput/SearchInput';
import searchPerson, { Result } from 'components/Api/Api';

const HomePage = () => {
  const [data, setData] = useState<Result[]>([]);

  const updateSearchText = async (text: string) => {
    const data = await searchPerson(text);
    const curPersons = data.results;
    setData(curPersons);
  };

  return (
    <section className="section_home">
      <h1>Home</h1>
      <SearchInput updateData={updateSearchText} />
      <div className="container">
        {data.map((person) => (
          <Card person={person} key={person.id} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
