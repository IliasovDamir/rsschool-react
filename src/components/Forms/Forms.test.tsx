import React from 'react';
import { createEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Forms from './Forms';

describe('Forms', () => {
  test('Input name', () => {
    render(
      <Forms
        updateCardsList={function (): void {
          throw new Error('Function not implemented.');
        }}
        openModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByRole<HTMLInputElement>('textbox')).toBeInTheDocument();
  });
  test('Input date', () => {
    render(
      <Forms
        updateCardsList={function (): void {
          throw new Error('Function not implemented.');
        }}
        openModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(/date/i)).toBeInTheDocument();
  });
  test('Input select', () => {
    render(
      <Forms
        updateCardsList={function (): void {
          throw new Error('Function not implemented.');
        }}
        openModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(/Car class/i)).toBeInTheDocument();
    expect(screen.getByRole<HTMLSelectElement>('combobox')).toBeInTheDocument();
  });
  test('Input checkbox', () => {
    render(
      <Forms
        updateCardsList={function (): void {
          throw new Error('Function not implemented.');
        }}
        openModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(/privacy/i)).toBeInTheDocument();
    expect(screen.getByText(/agree/i)).toBeInTheDocument();
    expect(screen.getByRole<HTMLInputElement>('checkbox')).toBeInTheDocument();
  });
  test('Input radio', () => {
    render(
      <Forms
        updateCardsList={function (): void {
          throw new Error('Function not implemented.');
        }}
        openModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
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
      <Forms
        updateCardsList={function (): void {
          throw new Error('Function not implemented.');
        }}
        openModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    const submitInput = screen.getByText(/send/i);
    await waitFor(() => {
      userEvent.click(submitInput);
    });
    const click = createEvent.click(submitInput);
    expect(click.defaultPrevented).toBe(false);
  });
});
