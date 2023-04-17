import React from 'react';
import FormsModal from './FormsModal';
import { render, screen } from '@testing-library/react';

describe('FormsModal', () => {
  test('FormsModal render', () => {
    render(
      <FormsModal
        isModalOpen={false}
        closeModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(/Thank you for submitting your rental request./i)).toBeInTheDocument();
  });
});
