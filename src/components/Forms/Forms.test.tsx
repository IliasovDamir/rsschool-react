import React from 'react';
import Forms from './Forms';
import { createEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Forms', () => {
  test('Input name', () => {
    render(<Forms />);
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
  });
  test('Input date', () => {
    render(<Forms />);
    expect(screen.getByText(/date/i)).toBeInTheDocument();
  });
  test('Input select', () => {
    render(<Forms />);
    expect(screen.getByText(/Car class/i)).toBeInTheDocument();
  });
  test('Input checkbox', () => {
    render(<Forms />);
    expect(screen.getByText(/Additional services/i)).toBeInTheDocument();
    expect(screen.getByText(/Insurance/i)).toBeInTheDocument();
    expect(screen.getByText(/Delivery to airport/i)).toBeInTheDocument();
    expect(screen.getByText(/Baby chair/i)).toBeInTheDocument();
  });
  test('Input radio', () => {
    render(<Forms />);
    expect(screen.getByText(/How many days/i)).toBeInTheDocument();
    expect(screen.getByText(/1 - 3/i)).toBeInTheDocument();
    expect(screen.getByText(/3 - 7/i)).toBeInTheDocument();
    expect(screen.getByText(/More/i)).toBeInTheDocument();
  });
  test('Input submit', async () => {
    render(<Forms />);
    const submitInput = screen.getByText(/send/i);
    await waitFor(() => {
      userEvent.click(submitInput);
    });
    const click = createEvent.click(submitInput);
    expect(click.defaultPrevented).toBe(false);
  });
});
