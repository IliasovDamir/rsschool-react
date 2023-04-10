import React from 'react';
import Card from './Card';
import { render, screen } from '@testing-library/react';

describe('Card', () => {
  test('Card renders', () => {
    const testCard = {
      id: 1,
      name: 'name',
      status: 'status',
      species: 'species',
      type: 'type',
      gender: 'gender',
      origin: {
        name: 'name',
        url: 'url',
      },
      location: {
        name: 'name',
        url: 'url',
      },
      image: 'image',
      episode: ['1', '2'],
      url: 'url',
      created: 'created',
    };
    render(
      <Card
        person={testCard}
        showPopup={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByAltText(/person/i)).toBeInTheDocument();
  });
});
