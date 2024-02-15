import { quizDetailsUrl, requestHeaders } from "../../../../Services/api";
import axios from "axios";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const quizDetails = createAsyncThunk(
  "/api/quiz",
  async ({id}, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.get(`${quizDetailsUrl}/${id}`,{
            headers: requestHeaders,       
    
        }
        
      );
      toast.success(response.data.message, {
        autoClose: 2000,
        theme: "colored",
    });
      return response;
    } catch (error) {
      toast.error(
        
        error.response?.data?.message || "An error occurred during login.",
        {
            autoClose: 2000,
            theme: "colored",
        }
    );
      return rejectWithValue(error?.message);
    }
  }
);

const initialState: Props = { data: [], loading: false, error: null };
const detailsItemSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(quizDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(quizDetails.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(quizDetails.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default detailsItemSlice.reducer;