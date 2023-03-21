import React from 'react';
import ErrorPage from './ErrorPage';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

describe('ErrorPage', () => {
  test('ErrorPage renders', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/Not Found, Error 404/i)).toBeInTheDocument();
  });
});
