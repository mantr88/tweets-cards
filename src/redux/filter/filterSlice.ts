import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "../constants";
import { FilterInitialState } from "../../Types/types";

const initialState: FilterInitialState = {
  status: statusFilters.showAll,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setStatusFfilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFfilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
