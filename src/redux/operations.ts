import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../Types/types";

axios.defaults.baseURL = "https://6526d939917d673fd76d177e.mockapi.io/api/v1/";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, ThunkAPI) => {
    try {
      const response = await axios.get("tweets");
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue((error as Error).message as string);
    }
  }
);

export const toggleFollowed = createAsyncThunk(
  "users/toggleFollowed",
  async (user: User, ThunkAPI) => {
    try {
      const response = await axios.put(`tweets/${user.id}`, {
        followers: !user.isFollowed ? user.followers + 1 : user.followers - 1,
        isFollowed: !user.isFollowed,
      });
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue("Failed to fetch users.");
    }
  }
);
