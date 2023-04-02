import React from 'react';
import FormsCard from './FormsCard';
import { render, screen } from '@testing-library/react';

describe('FormsCard', () => {
  test('FormsCard render', () => {
    const testFormsCard = {
      photo: 'https://app.rs.school/static/images/logo-rsschool3.png',
      name: 'Name',
      date: '2023-03-28',
      carCategory: 'Class',
      daysToRent: '1-3',
      accept: true,
    };

    render(<FormsCard card={testFormsCard} />);
    expect(screen.getByAltText(/photo/i)).toBeInTheDocument();
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Class/i)).toBeInTheDocument();
    expect(screen.getByText(/Rental/i)).toBeInTheDocument();
  });
});
