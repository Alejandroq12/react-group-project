import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchRockets from './rocketsAPI';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchRocketsData = createAsyncThunk('rockets/fetchRocketsData', async () => {
  const response = await fetchRockets();
  return response;
});
