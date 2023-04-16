import React from 'react';
import { render, screen } from '@testing-library/react';
import FormsPage from './FormsPage';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';

const store = setupStore();

describe('FormsPage component', () => {
  test('testing single card component', () => {
    render(
      <Provider store={store}>
        <FormsPage />
      </Provider>
    );
    expect(screen.getByText('Forms')).toBeInTheDocument();
  });
});
