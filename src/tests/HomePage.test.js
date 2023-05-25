import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import HomePage from '../routes/homePage';

describe('Test for the home page', () => {
  test('Home Page rendering correct', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
