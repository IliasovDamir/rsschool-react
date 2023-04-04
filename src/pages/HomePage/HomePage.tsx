import React from 'react';
import './HomePage.css';
import { products, Iproduct } from '../../data/products';
import Card from 'components/Card/Card';
import SearchInput from 'components/SearchInput/SearchInput';

const HomePage = () => {
  return (
    <section className="section_home">
      <h1>Home</h1>
      <SearchInput />
      <div className="container">
        {products.map((car: Iproduct) => (
          <Card car={car} key={car.id} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
