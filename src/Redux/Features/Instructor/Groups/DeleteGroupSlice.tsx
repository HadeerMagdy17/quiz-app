import { deleteGroupUrl, requestHeaders } from "../../../../Services/api";
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = { data: [], loading: false, error: null };


const deleteGroupSlice = createSlice({
  name: "delete",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(deleteGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message|| "An error occurred";
      });
  },
});

export const deleteGroup = createAsyncThunk(
  "delete/deleteGroup",
  async ({ id }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.delete(`${deleteGroupUrl}/${id}`, {
        headers: requestHeaders,
      });
      console.log(response);
      return response;
    } catch (error) {
        console.log(error)
      return rejectWithValue(error?.message);
    }
  }
);


export default deleteGroupSlice.reducer;
