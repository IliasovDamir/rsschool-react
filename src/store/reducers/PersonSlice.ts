import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Result } from 'models/models';

interface PersonState {
  persons: Result[];
  isLoading: boolean;
  error: string;
  searchText: string;
}

const initialState: PersonState = {
  persons: [],
  isLoading: false,
  error: '',
  searchText: '',
};

export const personSlise = createSlice({
  name: 'person',
  initialState,
  reducers: {
    personFetching(state) {
      state.isLoading = true;
    },
    personFetchingSuccess(state, action: PayloadAction<Result[]>) {
      state.isLoading = false;
      state.error = '';
      state.persons = action.payload;
    },
    personFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default personSlise.reducer;
