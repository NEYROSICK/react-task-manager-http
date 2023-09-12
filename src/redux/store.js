import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
