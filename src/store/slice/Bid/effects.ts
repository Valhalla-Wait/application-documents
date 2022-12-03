import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FormDataType, ResponseType } from "./types";

export const createBid = createAsyncThunk(
  'bid/createBid',
  async ({document_title, user_id}:FormDataType, { rejectWithValue }) => {
    try {
      const response = await axios.post<ResponseType>(`${process.env.REACT_APP_BACKEND_URL}/bids/create`, {
        document_title,
        user_id
      })
      return response.data.message;
    } catch (e) {
      return rejectWithValue((e as Error).message);
    }
  },
);
