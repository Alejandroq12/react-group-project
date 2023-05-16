import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});

export default store;
