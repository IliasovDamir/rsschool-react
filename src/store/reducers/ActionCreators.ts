import { Data, IFormCards } from 'models/models';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from 'store/store';
import { personSlise } from './PersonSlice';

export const BASE_URL = 'https://rickandmortyapi.com/api/character/?name=';

export const fetchPersons = createAsyncThunk('persons/fetchAll', async (text: string, thunkApi) => {
  try {
    const response = await fetch(`${BASE_URL}${text}`);
    const data: Data = await response.json();
    return data.results;
  } catch (error) {
    return thunkApi.rejectWithValue('Failed to load characters');
  }
});

export const updateSearchText = (text: string) => (dispatch: AppDispatch) => {
  dispatch(personSlise.actions.updateSearchText(text));
};

export const updateFormsCardList = (formsCard: IFormCards) => (dispatch: AppDispatch) => {
  dispatch(personSlise.actions.updateFormsCardList(formsCard));
};
