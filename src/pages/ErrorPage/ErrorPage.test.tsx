import React from 'react';
import ErrorPage from './ErrorPage';
import { render, screen } from '@testing-library/react';

describe('ErrorPage', () => {
  test('ErrorPage renders', () => {
    render(<ErrorPage />);
    expect(screen.getByText(/Not Found, Error 404/i)).toBeInTheDocument();
  });
});
