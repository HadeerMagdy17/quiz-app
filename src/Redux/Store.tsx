import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/Auth/LoginSlice";
import registerReducer from "./Features/Auth/RegisterSlice";
import questionsReducer from "./Features/Instructor/Questions/GetQuestionsSlice"
import createQuestionReducer from "./Features/Instructor/Questions/CreateQuestionsSlice"
import updateQuestionReducer from './Features/Instructor/Questions/UpdateQuestionsSlice'
import deleteQuestionReducer from './Features/Instructor/Questions/DeleteQuestionsSlice'
const store = configureStore({
  reducer: {
    users: userReducer,
    register: registerReducer,
    questionsData: questionsReducer,
    createQuestionData: createQuestionReducer,
    updateQuestionData:updateQuestionReducer,
    deleteQuestion: deleteQuestionReducer,

  },
});

export default store;
