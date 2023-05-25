/* eslint-disable import/no-extraneous-dependencies */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import store from '../redux/store';
import cryptoSlice from '../redux/cryptoSlice/cryptoSlice';
import detailsSlice from '../redux/cryptoSlice/cryptoDetailsSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Redux Store', () => {
  beforeEach(() => {
    mockStore({});
  });

  it('should have the correct initial state', () => {
    const expectedState = {
      crypto: cryptoSlice(undefined, {}),
      details: detailsSlice(undefined, {}),
    };

    expect(store.getState()).toEqual(expectedState);
  });
});
