import React, { Component } from 'react';
import { IFormCards } from './Forms';
import './Forms.css';

type FormsCardProps = { card: IFormCards };

class FormsCard extends Component<FormsCardProps> {
  render() {
    return (
      <div className="form_card">
        <img src={this.props.card.photo} alt="photo" />
        <h3>Name: {this.props.card.name}</h3>
        <h3>Date: {this.props.card.date}</h3>
        <h3>Class: {this.props.card.carCategory}</h3>
        <h3>Services: {this.props.card.services.join(', ')}</h3>
        <h3>Rental duration: {this.props.card.daysToRent}</h3>
      </div>
    );
  }
}

export default FormsCard;
