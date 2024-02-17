// UpdateGroupSlice.ts

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateGroupUrl, requestHeaders, allGroupUrl } from "../../../../Services/api"; // Replace 'updateGroupUrl' with the actual URL for updating a group
import axios from "axios";

export interface UpdateGroupState {
  loading: boolean;
  error: string | null;
}

const initialState: UpdateGroupState = {
  loading: false,
  error: null,
};



export const UpdateGroupSlice = createSlice({
  name: "UpdateGroupSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateGroup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateGroup.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateGroup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });
  },
});

export const updateGroup = createAsyncThunk(
    "UpdateGroupSlice/updateGroup",
    async ({ groupId, groupData }: { groupId: string; groupData: { name: string; students?: string[] } }) => {
      // eslint-disable-next-line no-useless-catch
      try {
        await axios.put(`${allGroupUrl}/${groupId}`, groupData, {
          headers: requestHeaders,
        });
      } catch (error) {
        throw error;
      }
    }
  );
export default UpdateGroupSlice.reducer;
