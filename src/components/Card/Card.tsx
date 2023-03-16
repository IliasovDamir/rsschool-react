import { Iproduct } from 'data/products';
import React, { Component } from 'react';
import './Card.css';

type CardProps = {
  car: Iproduct;
};

class Card extends Component<CardProps> {
  render() {
    return (
      <div className="card">
        <img src={this.props.car.img} alt="car" />
        <h2>
          {this.props.car.name} <span> - {this.props.car.year}</span>
        </h2>
        <h3>{this.props.car.category}</h3>
        <h3>passengers: {this.props.car.people}</h3>
        <h2>{this.props.car.price} &#8381;/day</h2>
      </div>
    );
  }
}

export default Card;
