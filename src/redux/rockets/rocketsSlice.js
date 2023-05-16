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
      })
      .addCase(fetchRocketsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.rocket_name,
          description: rocket.description,
          flickr_images: rocket.flickr_images,
        }));
      })
      .addCase(fetchRocketsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
