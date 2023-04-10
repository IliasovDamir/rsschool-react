import React from 'react';
import Footer from './Footer';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  test('Footer renders', () => {
    render(<Footer />);
    expect(screen.getByText(/github/i)).toBeInTheDocument();
    expect(screen.getByText(/RSSchool/i)).toBeInTheDocument();
  });
});
