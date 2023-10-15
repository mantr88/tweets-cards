import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/usersSlice";
import { filterReducer } from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
  },
});
