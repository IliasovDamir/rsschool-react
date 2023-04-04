import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import { products } from './data/products';

describe('App', () => {
  test('App render', () => {
    render(<App />);
    expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    const altText = screen.getAllByAltText(/car/i);
    expect(altText.length).toEqual(products.length);
  });
});
