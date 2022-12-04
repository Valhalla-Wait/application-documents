import { createSlice } from "@reduxjs/toolkit";
import { removeServerMessagesAction } from "./actions";
import { createBid } from "./effects";
import { ReducerType } from "./types";

const initialState: ReducerType = {
  message: '',
  status: null,
  error: ''
}

export const BidSlice = createSlice({
  name: 'bid',
  initialState,
  reducers: {
    removeServerMessagesAction
  },
  extraReducers: (builder) => {
    builder.addCase(createBid.pending, (state) => ({
      ...state,
      message: '',
      status: 'loading',
    }));
    builder.addCase(createBid.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      message: action.payload,
      error: ''
    }));
    builder.addCase(createBid.rejected, (state, action) => ({
      ...state,
      status: 'fail',
      error: action.payload as string,
    }));
  },
});