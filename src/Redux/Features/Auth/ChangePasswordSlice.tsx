import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { changePassUrl } from "../../../Services/api";

interface ChangePasswordState {
  loading: boolean;
  errors: string | null;
  success: boolean;
  data: []
//   password:string;
//   password_new:string
}

const initialState: ChangePasswordState = {
  loading: false,
  errors: null,
  success: false,
  data: []
//   password:'',
//   password_new:''
};

// const changePassword = createAsyncThunk(
//   "user/changePassword",
//   async (passwordData: { userId: string, newPassword: string }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${changePassUrl}`, { newPassword: passwordData.newPassword });
//       toast.success(response.data.message, {
//         autoClose: 2000,
//         theme: "colored",
//       });
//       return response.data;
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "An error occurred while changing password.",
//         {
//           autoClose: 2000,
//           theme: "colored",
//         }
//       );
//       return rejectWithValue(error.response?.data?.message);
//     }
//   }
// );

const changePasswordApi = createAsyncThunk(
  "changePassword/changePasswordApi",
  async (passwordData,{ rejectWithValue }) => {
    try {
      const response = await axios.post(`${changePassUrl}`, {
        passwordData,
       
      });

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
  initialState,
  reducers: {
    changePasswordd: (state,action) => {
    //   state.password= action.payload;
    //   state.password_new = action.payload;

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changePasswordApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(changePasswordApi.fulfilled, (state,action) => {
        // state.password= action.payload;
        // state.password_new = action.payload;
        
  
      })
      .addCase(changePasswordApi.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload || "Failed to change password.";
      });
  },
});

export const { changePasswordd } = changePasswordSlice.actions;
export { changePasswordApi };
export default changePasswordSlice.reducer;
