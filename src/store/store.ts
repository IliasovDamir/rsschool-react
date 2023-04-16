import { combineReducers, configureStore } from '@reduxjs/toolkit';
import personReducer from './reducers/PersonSlice';

const rootReduser = combineReducers({
  personReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
