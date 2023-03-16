import React, { Component } from 'react';
import './HomePage.css';
import { products, Iproduct } from '../../data/products';
import Card from 'components/Card/Card';

class HomePage extends Component {
  render() {
    return (
      <section className="section_home">
        <h1>Home</h1>
        <div className="container">
          {products.map((car: Iproduct) => (
            <Card car={car} key={car.id} />
          ))}
        </div>
      </section>
    );
  }
}

export default HomePage;
