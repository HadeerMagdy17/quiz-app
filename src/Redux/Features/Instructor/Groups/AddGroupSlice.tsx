import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allGroupUrl, requestHeaders } from "../../../../Services/api"; // Make sure to replace 'addGroupUrl' with the actual URL for adding a group
import axios from "axios";

export interface AddGroupState {
  loading: boolean;
  error: string | null;
}

const initialState: AddGroupState = {
  loading: false,
  error: null,
};

export const addGroup = createAsyncThunk(
  "AddGroupSlice/addGroup",
  async (groupData: { name: string; students?: string[] }) => {
    // eslint-disable-next-line no-useless-catch
    try {
      await axios.post(allGroupUrl, groupData, {
        headers: requestHeaders,
      });
    } catch (error) {
      throw error;
    }
  }
);

export const AddGroupSlice = createSlice({
  name: "AddGroupSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addGroup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addGroup.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addGroup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });
  },
});

export default AddGroupSlice.reducer;
