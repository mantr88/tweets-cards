import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUsers, toggleFollowed } from "../operations";
import { User, Users, UsersSliceState } from "../../Types/types";
import {
  AnyAsyncThunk,
  RejectedWithValueActionFromAsyncThunk,
} from "@reduxjs/toolkit/dist/matchers";

const initialState: UsersSliceState = {
  items: [],
  isLoading: false,
  error: null,
};

const pendingReducer = (state: UsersSliceState) => {
  state.isLoading = true;
};

const rejectedReducer = (
  state: UsersSliceState,
  action: RejectedWithValueActionFromAsyncThunk<AnyAsyncThunk>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchUsersFulfilledReducer = (
  state: UsersSliceState,
  action: PayloadAction<Users>
) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const toggleFollowedFulfilledReducer = (
  state: UsersSliceState,
  action: PayloadAction<User>
) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    (user: User) => user.id === action.payload.id
  );
  state.items.splice(index, 1, action.payload);
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, pendingReducer)
      .addCase(fetchUsers.rejected, rejectedReducer)
      .addCase(fetchUsers.fulfilled, fetchUsersFulfilledReducer)
      .addCase(toggleFollowed.pending, pendingReducer)
      .addCase(toggleFollowed.rejected, rejectedReducer)
      .addCase(toggleFollowed.fulfilled, toggleFollowedFulfilledReducer);
  },
});

export const usersReducer = usersSlice.reducer;
