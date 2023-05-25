import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  test('Footer component rendering correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Footer />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
