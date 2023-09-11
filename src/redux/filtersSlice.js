const { createSlice } = require('@reduxjs/toolkit');
const { filterStatus } = require('./constants');

const filtersInitialState = {
  status: filterStatus.all,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    changeFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
