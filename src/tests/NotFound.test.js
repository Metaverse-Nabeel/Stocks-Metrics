import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import NotFound from '../components/404NotFound';

describe('NotFound Component', () => {
  test('NotFound component rendering correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <NotFound />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
