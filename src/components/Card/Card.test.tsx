// import React from 'react';
// import Card from './Card';
// import { render, screen } from '@testing-library/react';

// describe('Card', () => {
//   test('Card renders', () => {
//     const testCard = {
//       id: 0,
//       name: 'Kia Rio X-Line',
//       price: 2500,
//       year: 2021,
//       category: 'econom',
//       img: 'https://carrent-kzn.ru/wp-content/uploads/2022/04/rio-x.jpg',
//       people: 5,
//     };
//     render(<Card car={testCard} />);
//     expect(screen.getByText(/Kia Rio X-Line/i)).toBeInTheDocument();
//     expect(screen.getByText(/2500/i)).toBeInTheDocument();
//     expect(screen.getByText(/2021/i)).toBeInTheDocument();
//     expect(screen.getByText(/econom/i)).toBeInTheDocument();
//     expect(screen.getByText(/passengers: 5/i)).toBeInTheDocument();
//     expect(screen.getByAltText(/car/i)).toBeInTheDocument();
//   });
// });
