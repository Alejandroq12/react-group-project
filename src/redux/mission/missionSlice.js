import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://api.spacexdata.com/v3/missions';

export const fetchData = createAsyncThunk('missions', async () => {
  const response = await axios.get(apiURL);
  return response.data;
});

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.data = state.data.map((mission) => (mission.mission_id === missionId ? {
        ...mission,
        reserved: true,
      } : mission));
    },

    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.data = state.data.map((mission) => (mission.mission_id === missionId ? {
        ...mission,
        reserved: false,
      } : mission));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => ({
      ...state,
      status: 'loading',
    }));

    builder.addCase(fetchData.fulfilled, (state, action) => ({
      ...state,
      status: 'succeeded',
      data: action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      })),
    }));

    builder.addCase(fetchData.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      error: action.error.message,
    }));
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
