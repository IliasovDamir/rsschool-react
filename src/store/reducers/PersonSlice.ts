import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFormCards, Result } from 'models/models';
import { fetchPersons } from './ActionCreators';

interface PersonState {
  persons: Result[];
  isLoading: boolean;
  error: string;
  searchText: string;
  formsCard: IFormCards[];
}

const initialState: PersonState = {
  persons: [],
  isLoading: false,
  error: '',
  searchText: '',
  formsCard: [],
};

export const personSlise = createSlice({
  name: 'person',
  initialState,
  reducers: {
    updateSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    updateFormsCardList(state, action: PayloadAction<IFormCards>) {
      state.formsCard.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPersons.fulfilled.type, (state, action: PayloadAction<Result[]>) => {
      state.isLoading = false;
      state.error = '';
      state.persons = action.payload;
    });
    builder.addCase(fetchPersons.pending.type, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPersons.rejected.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default personSlise.reducer;
