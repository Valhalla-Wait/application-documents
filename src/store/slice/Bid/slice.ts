import { createSlice } from "@reduxjs/toolkit";
import { removeMessageAction } from "./actions";
import { createBid } from "./effects";
import { ReducerType } from "./types";

const initialState: ReducerType = {
  message: null,
  status: null,
  error: ''
}

export const BidSlice = createSlice({
  name: 'bid',
  initialState,
  reducers: {
    removeMessageAction
  },
  extraReducers: (builder) => {
    builder.addCase(createBid.pending, (state) => ({
      ...state,
      message: null,
      status: 'loading',
    }));
    builder.addCase(createBid.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      message: action.payload,
    }));
    builder.addCase(createBid.rejected, (state, action) => ({
      ...state,
      status: 'fail',
      error: action.payload as string,
    }));
  },
});