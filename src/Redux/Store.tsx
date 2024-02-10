import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/Auth/LoginSlice";
import registerReducer from "./Features/Auth/RegisterSlice";
import questionsReducer from "./Features/Instructor/Questions/GetQuestionsSlice"
import createQuestionReducer from "./Features/Instructor/Questions/CreateQuestionsSlice"
const store = configureStore({
  reducer: {
    users: userReducer,
    register: registerReducer,
    questionsData: questionsReducer,
    createQuestionData: createQuestionReducer,
  },
});

export default store;
