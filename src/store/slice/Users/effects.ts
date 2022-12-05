import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UsersType } from "./types";

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<UsersType[]>(`${process.env.REACT_APP_BACKEND_URL}/users/get`)
      return response.data;
    } catch (e) {
      return rejectWithValue((e as Error).message);
    }
  },
);