import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import View from '../components/view/View';
import '@testing-library/jest-dom';
import rocketsSlice from '../redux/rockets/rocketsSlice';
import missionSlice from '../redux/mission/missionSlice';

test('renders View component without crashing', () => {
  const initialState = {
    rockets: {
      data: [],
      status: 'idle',
      error: null,
    },
    mission: {
      data: [],
    },
  };

  const store = configureStore({
    reducer: {
      rockets: rocketsSlice,
      mission: missionSlice,
    },
    preloadedState: initialState,
  });

  render(
    <Provider store={store}>
      <View />
    </Provider>,
  );
});

test('renders headers', () => {
  const initialState = {
    rockets: {
      data: [],
      status: 'idle',
      error: null,
    },
    mission: {
      data: [],
    },
  };

  const store = configureStore({
    reducer: {
      rockets: rocketsSlice,
      mission: missionSlice,
    },
    preloadedState: initialState,
  });

  render(
    <Provider store={store}>
      <View />
    </Provider>,
  );

  const rocketsHeader = screen.getByText('My Rockets');

  expect(rocketsHeader).toBeInTheDocument();
});

test('renders reserved rockets', () => {
  const initialState = {
    rockets: {
      data: [
        { id: '1', name: 'Falcon 1', reserved: true },
        { id: '2', name: 'Falcon 9', reserved: false },
      ],
      status: 'succeeded',
      error: null,
    },
    mission: {
      data: [],
    },
  };

  const store = configureStore({
    reducer: {
      rockets: rocketsSlice,
      mission: missionSlice,
    },
    preloadedState: initialState,
  });

  render(
    <Provider store={store}>
      <View />
    </Provider>,
  );

  // Check that reserved items are in the document
  expect(screen.getByText('Falcon 1')).toBeInTheDocument();

  // Check that unreserved items are not in the document
  expect(screen.queryByText('Falcon 9')).not.toBeInTheDocument();
});
