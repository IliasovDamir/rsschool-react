import React from 'react';
import AboutPage from './AboutPage';
import { render, screen } from '@testing-library/react';

describe('AboutPage', () => {
  test('AboutPage renders', () => {
    render(<AboutPage />);
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
