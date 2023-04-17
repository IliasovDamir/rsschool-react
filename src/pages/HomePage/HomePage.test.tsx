import React from 'react';
import HomePage from './HomePage';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { res } from 'mocks/handers';
import { server } from 'mocks/server';

import { setupStore } from 'store/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

const store = setupStore();

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  })
);

afterEach(() => server.restoreHandlers());

afterAll(() => server.close());

describe('HomePage', () => {
  test('HomePage renders', async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();

    const input = screen.getByPlaceholderText<HTMLInputElement>('Search here...');
    const persons = res.results.length;

    fireEvent.input(input, { target: { value: 'dar' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    await waitFor(() => screen.findAllByText(/More details/i));
    expect(screen.getAllByText(/More details/i).length).toEqual(persons);
  });
  test('Search characters works correctly', async () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const input = screen.getByPlaceholderText<HTMLInputElement>('Search here...');
    userEvent.type(input, '{enter}');
    fireEvent.input(input, { target: { value: 'Aaaa' } });
    expect(input.value).toBe('Aaaa');
  });
});
