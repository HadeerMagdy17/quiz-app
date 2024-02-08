import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { changePassUrl } from "../../../Services/api";

interface ChangePasswordState {
  loading: boolean;
  errors: string | null;
  success: boolean;
}

const initialState: ChangePasswordState = {
  loading: false,
  errors: null,
  success: false,
};

const changePassword = createAsyncThunk(
  "user/changePassword",
  async (passwordData: { userId: string, newPassword: string }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${changePassUrl}/${passwordData.userId}`, { newPassword: passwordData.newPassword });
      toast.success(response.data.message, {
        autoClose: 2000,
        theme: "colored",
      });
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred while changing password.",
        {
          autoClose: 2000,
          theme: "colored",
        }
      );
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const changePasswordSlice = createSlice({
  name: 'changePassword',
  initialState:initialState,
  reducers: {
    resetChangePasswordState: (state) => {
      state.loading = false;
      state.errors = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload || "Failed to change password.";
      });
  },
});

export const { resetChangePasswordState } = changePasswordSlice.actions;
export { changePassword };
export default changePasswordSlice.reducer;
