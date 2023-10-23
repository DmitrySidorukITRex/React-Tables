import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Study } from '../models/study';
import { getAllStudies } from '../services/allStudies';

export const fetchAllStudies = createAsyncThunk('studies/fetchAllStudies', async () => {
  const response = await getAllStudies();
  return response;
});

export interface StudiesState {
  data: Study[];
  isLoading: boolean;
}

const initialState: StudiesState = {
  data: [],
  isLoading: true,
};

export const studiesSlice = createSlice({
  name: 'studies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStudies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllStudies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      });
  },
});

export default studiesSlice.reducer;
