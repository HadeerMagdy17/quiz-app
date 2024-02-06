import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUrl } from "../../../Services/api";
import axios from "axios";
import { toast } from "react-toastify";

interface LoginState {
    role: null;
    data: [];
    loading: boolean;
    errors: string | null;
    islogged: null
}
const initialState: LoginState = {
    role: null,
    data: [],
    loading: false,
    errors: null,
    islogged: null
};

 const loginUser = createAsyncThunk(
    "login/loginUser", async (UserData) => {
        try {
        const response = await axios.post(`${loginUrl}`, UserData)
        localStorage.setItem("userRole", response?.data?.data?.profile.role);
        localStorage.setItem("authToken", response?.data?.data?.accessToken);
        localStorage.setItem("userId", response?.data?.data?.profile?._id);
        console.log("response", response);

        toast.success(response.data.message, {
            autoClose: 2000,
            theme: "colored",
          });
          return response?.data?.data?.profile?.role;
        } catch (error) {
          toast.error(error.response.data?.message, {
            autoClose: 2000,
            theme: "colored",
          });
          return error.response
        }
      });


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginDataIslogged: (state) => {
            state.islogged = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.role = action.payload;
            state.loading = false;
            state.islogged = action.payload
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        });
    },
})

// export const selectUser = (state) => state.login.role;
export const { loginDataIslogged } = loginSlice.actions;
export {loginUser}
export default loginSlice.reducer