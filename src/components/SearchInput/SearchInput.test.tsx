import React from 'react';
import SearchInput from './SearchInput';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';

const store = setupStore();

describe('SearchInput', () => {
  test('SearchInput render', () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    const input = screen.getByPlaceholderText<HTMLInputElement>('Search here...');
    expect(input).toBeInTheDocument();
    fireEvent.input(input, { target: { value: 'Aaaa' } });
    expect(input.value).toBe('Aaaa');
  });
});
