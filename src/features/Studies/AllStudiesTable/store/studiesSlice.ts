import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Study, StudyColumn } from '../models/study';
import { getAllStudies } from '../services/allStudies';

export const fetchAllStudies = createAsyncThunk('studies/fetchAllStudies', async () => {
  const response = await getAllStudies();
  return response;
});

const Columns: StudyColumn[] = [
  {
    name: 'Study Name',
    isSelected: true,
  },
  {
    name: 'Start Date',
    isSelected: true,
  },
  {
    name: 'Study Types',
    isSelected: true,
  },
  {
    name: 'Experimental Models',
    isSelected: true,
  },
  {
    name: 'Data Points',
    isSelected: true,
  },
  {
    name: 'Center',
    isSelected: true,
  },
];

export interface StudiesState {
  data: Study[];
  isLoading: boolean;
  columns: StudyColumn[];
}

const initialState: StudiesState = {
  data: [],
  isLoading: true,
  columns: Columns,
};

export const studiesSlice = createSlice({
  name: 'studies',
  initialState,
  reducers: {
    changeColumnVisibility: (state, action: PayloadAction<StudyColumn>) => {
      const column = state.columns.find((x) => x.name === action.payload.name) as StudyColumn;
      column.isSelected = !column?.isSelected;
    },
  },
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

export const { changeColumnVisibility } = studiesSlice.actions;

export default studiesSlice.reducer;
