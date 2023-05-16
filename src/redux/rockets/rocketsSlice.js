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

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsData.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export default rocketsSlice.reducer;
