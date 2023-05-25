import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import CurrencyDetails from '../routes/detailsPage';

describe('Currency Details Route', () => {
  test('Currency details are rendering correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <CurrencyDetails />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
