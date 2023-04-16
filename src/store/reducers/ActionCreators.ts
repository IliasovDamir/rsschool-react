import { Data } from 'models/models';
import { AppDispatch } from 'store/store';
import { personSlise } from './PersonSlice';

export const BASE_URL = 'https://rickandmortyapi.com/api/character/?name=';

export const fetchPersons = (text: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(personSlise.actions.personFetching());
    const response = await fetch(`${BASE_URL}${text}`);
    const data: Data = await response.json();
    dispatch(personSlise.actions.personFetchingSuccess(data.results));
    console.log(data);
  } catch (e) {
    dispatch(personSlise.actions.personFetchingError('There is nothing here'));
  }
};
