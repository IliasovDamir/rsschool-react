import React from 'react';
import { createEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Forms from './Forms';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';

const store = setupStore();

describe('Forms', () => {
  test('Inputs', () => {
    render(
      <Provider store={store}>
        <Forms
          openModal={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </Provider>
    );
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByRole<HTMLInputElement>('textbox')).toBeInTheDocument();
    expect(screen.getByText(/date/i)).toBeInTheDocument();
    expect(screen.getByText(/Car class/i)).toBeInTheDocument();
    expect(screen.getByRole<HTMLSelectElement>('combobox')).toBeInTheDocument();
    expect(screen.getByText(/privacy/i)).toBeInTheDocument();
    expect(screen.getByText(/agree/i)).toBeInTheDocument();
    expect(screen.getByRole<HTMLInputElement>('checkbox')).toBeInTheDocument();
    expect(screen.getByText(/How many days/i)).toBeInTheDocument();
    expect(screen.getByText(/1 - 3/i)).toBeInTheDocument();
    expect(screen.getByText(/3 - 7/i)).toBeInTheDocument();
    expect(screen.getByText(/More/i)).toBeInTheDocument();
    const radioArray = screen.getAllByRole<HTMLInputElement>('radio');
    expect(radioArray[0]).toBeInTheDocument();
    expect(radioArray[1]).toBeInTheDocument();
    expect(radioArray[2]).toBeInTheDocument();
  });
  test('Input submit', async () => {
    render(
      <Provider store={store}>
        <Forms
          openModal={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </Provider>
    );
    const submitInput = screen.getByText(/send/i);
    await waitFor(() => {
      userEvent.click(submitInput);
    });
    const click = createEvent.click(submitInput);
    expect(click.defaultPrevented).toBe(false);
  });
});
