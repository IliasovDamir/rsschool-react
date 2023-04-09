import React from 'react';
import HomePage from './HomePage';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { res } from 'mocks/handers';

describe('HomePage', () => {
  test('HomePage renders', async () => {
    render(<HomePage />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();

    const input = screen.getByPlaceholderText<HTMLInputElement>('Search here...');
    const persons = res.results.length;

    fireEvent.input(input, { target: { value: 'dar' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    await waitFor(() => screen.findAllByText(/More details/i));
    expect(screen.getAllByText(/More details/i).length).toEqual(persons);
  });
});
