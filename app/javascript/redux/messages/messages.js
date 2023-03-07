import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000//api/v1/messages';
const GET_MSG = 'get-messages';

export const retrieveMessages = createAsyncThunk(GET_MSG, async () => {
  const res = fetch(API_URL);
  const data = (await res).json()
  return data;
});

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(
      retrieveMessages.fulfilled,
      (state, aciton) => action.payload,
    );
  },
});

export default messagesSlice.reducer;