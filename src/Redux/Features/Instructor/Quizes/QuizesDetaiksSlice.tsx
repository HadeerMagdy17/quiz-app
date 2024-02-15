import { quizDetailsUrl, requestHeaders } from "../../../../Services/api";
import axios from "axios";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";



interface DetailsProps {
    details: {},  // Make sure details is initialized to an object
    loading: boolean;
    error: null | string;
  }

  const initialState: DetailsProps = {
    details: {},  // Make sure details is initialized to an object
    loading: false,
    error: null,
  };

  export const quizDetails = createAsyncThunk(
    "details/quizDetails",
    async ({ id }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.get(`${quizDetailsUrl}/${id}`,{
            headers: requestHeaders,       
        }
        
      );
     
      return response?.data;
    } catch (error) {       
      throw error
    //   return rejectWithValue(error?.message);
    }
  }
);

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
        state.details = action.payload;
      })
      .addCase(quizDetails.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default detailsItemSlice.reducer;