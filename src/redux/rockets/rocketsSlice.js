import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchRockets from './rocketsAPI';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};
