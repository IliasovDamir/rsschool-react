import React from 'react';
import HomePage from './HomePage';
import { render, screen } from '@testing-library/react';

describe('HomePage', () => {
  test('HomePage renders', () => {
    render(<HomePage />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
