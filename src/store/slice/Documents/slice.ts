import { createSlice } from "@reduxjs/toolkit";
import { getDocuments } from "./effects";
import { ReducerType } from "./types";

const initialState: ReducerType = {
  data: [],
  status: null,
  error: ''
}

export const DocumentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDocuments.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(getDocuments.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      data: action.payload,
    }));
    builder.addCase(getDocuments.rejected, (state, action) => ({
      ...state,
      status: 'fail',
      error: action.payload as string,
    }));
  },
});