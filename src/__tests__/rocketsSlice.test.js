import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer, { fetchRocketsData, reserveRocket, cancelReservation } from '../redux/rockets/rocketsSlice';

describe('rockets reducer', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: rocketsReducer });
  });

  it('should handle initial state', () => {
    expect(store.getState()).toEqual({
      data: [],
      status: 'idle',
      error: null,
    });
  });

  it('should handle fetchRocketsData.pending', () => {
    store.dispatch(fetchRocketsData.pending());
    expect(store.getState()).toEqual({
      data: [],
      status: 'loading',
      error: null,
    });
  });

  it('should handle reserveRocket', () => {
    const initialState = {
      data: [
        {
          id: 1,
          name: 'Falcon 1',
          description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
          flickr_images: ['https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png'],
          reserved: false,
        },
      ],
      status: 'idle',
      error: null,
    };
    store = configureStore({ reducer: rocketsReducer, preloadedState: initialState });
    store.dispatch(reserveRocket(1));
    expect(store.getState().data[0].reserved).toEqual(true);
  });

  it('should handle cancelReservation', () => {
    const initialState = {
      data: [
        {
          id: 1,
          name: 'Falcon 1',
          description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
          flickr_images: ['https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png'],
          reserved: true,
        },
      ],
      status: 'idle',
      error: null,
    };
    store = configureStore({ reducer: rocketsReducer, preloadedState: initialState });
    store.dispatch(cancelReservation(1));
    expect(store.getState().data[0].reserved).toEqual(false);
  });
});
