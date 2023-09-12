import { addTask, checkTask, fetchTasks, removeTask } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled](state, action) {
      handleFulfilled(state);
      state.items = action.payload;
    },
    [fetchTasks.rejected]: handleRejected,

    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, action) {
      handleFulfilled(state);
      state.items.push(action.payload);
    },
    [addTask.rejected]: handleRejected,

    [removeTask.pending]: handlePending,
    [removeTask.fulfilled](state, action) {
      handleFulfilled(state);
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },
    [removeTask.rejected]: handleRejected,

    [checkTask.pending]: handlePending,
    [checkTask.fulfilled](state, action) {
      handleFulfilled(state);
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [checkTask.rejected]: handleRejected,
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
