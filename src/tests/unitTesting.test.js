import { getCrypto } from '../redux/cryptoSlice/cryptoSlice';
import { getOneCrypto } from '../redux/cryptoSlice/cryptoDetailsSlice';
import store from '../redux/store';

describe('Redux Unit Tests', () => {
  test('Dispatching getCrypto action & updating crypto state', async () => {
    const mockData = { coins: [] };
    /* Mocking the fetch function */
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));
    /* Get Crypto dispatched to the store */
    await store.dispatch(getCrypto());
    /* Get current state from the redux store */
    const state = store.getState();
    /* Compares */
    expect(state.crypto.isLoading).toBe(true);
    expect(state.crypto.cryptoArray).toEqual(mockData.coins);
  });

  test('Dispatches getOneCrypto action & updating crypto details state', async () => {
    const mockData = { coin: {} };
    /* Mocking the fetch function */
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));
    /* Get Details is dispatched to the store */
    await store.dispatch(getOneCrypto('coinId'));
    /* Retrieves the current state from the redux store */
    const state = store.getState();
    /* Compares */
    expect(state.details.isLoading).toBe(true);
    expect(state.details.cryptoDetails).toEqual(mockData.coin);
  });
});
