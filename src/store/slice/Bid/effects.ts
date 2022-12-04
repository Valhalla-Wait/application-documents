import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { FormDataType, ResponseType, ServerErrResponse } from "./types";

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
      return rejectWithValue((e as AxiosError<ServerErrResponse>).response?.data.message);
    }
  },
);
