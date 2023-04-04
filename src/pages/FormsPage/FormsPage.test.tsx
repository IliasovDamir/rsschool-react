import React from 'react';
import { render, screen } from '@testing-library/react';
import FormsPage from './FormsPage';

describe('FormsPage component', () => {
  test('testing single card component', () => {
    render(<FormsPage />);
    expect(screen.getByText('Forms')).toBeInTheDocument();
  });
});
