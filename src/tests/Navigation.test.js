import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Navigation', () => {
  test('Navigation rendering correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Navigation />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Navigation Rendering logo', () => {
    render(
      <Router>
        <Navigation />
      </Router>,
    );
    const logo = screen.getByAltText('Crypto-Currency-Logo');
    expect(logo).toBeInTheDocument();
  });
});
