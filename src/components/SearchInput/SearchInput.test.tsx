import React from 'react';
import SearchInput from './SearchInput';
import { fireEvent, render, screen } from '@testing-library/react';

describe('SearchInput', () => {
  test('SearchInput render', () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText<HTMLInputElement>('Search here...');
    expect(input).toBeInTheDocument();
    fireEvent.input(input, { target: { value: 'Aaaa' } });
    expect(input.value).toBe('Aaaa');
  });
});
