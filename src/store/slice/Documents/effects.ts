import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DocumentType } from "./types";

export const getDocuments = createAsyncThunk(
  'document/getDocuments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<DocumentType[]>(`${process.env.REACT_APP_BACKEND_URL}/documents/get`)

      return response.data;
    } catch (e) {
      return rejectWithValue((e as Error).message);
    }
  },
);