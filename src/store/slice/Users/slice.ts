import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./effects";
import { ReducerType } from "./types";

const initialState: ReducerType = {
  data: [],
  status: null,
  error: ''
}

export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(getUsers.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      data: action.payload,
    }));
    builder.addCase(getUsers.rejected, (state, action) => ({
      ...state,
      status: 'fail',
      error: action.payload as string,
    }));
  },
});