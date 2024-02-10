// CreateQuestionSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllQuestionsUrl, requestHeaders } from "../../../../Services/api";

export const createQuestion = createAsyncThunk(
  "CreateQuestionSlice/createQuestion",
  async (newQuestionData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await axios.post(getAllQuestionsUrl, newQuestionData, {
        headers: requestHeaders,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  creating: false,
  error: null,
};

const createQuestionSlice = createSlice({
  name: "CreateQuestionSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createQuestion.pending, (state) => {
      state.creating = true;
    });
    builder.addCase(createQuestion.fulfilled, (state) => {
      state.creating = false;
    });
    builder.addCase(createQuestion.rejected, (state, action) => {
      state.creating = false;
      state.error = action.error.message;
    });
  },
});

export default createQuestionSlice.reducer;
