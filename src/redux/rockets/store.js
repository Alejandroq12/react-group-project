import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
