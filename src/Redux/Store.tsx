import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/Auth/LoginSlice";
import registerReducer from "./Features/Auth/RegisterSlice";
import questionsReducer from "./Features/Instructor/Questions/GetQuestionsSlice"
import createQuestionReducer from "./Features/Instructor/Questions/CreateQuestionsSlice"
import updateQuestionReducer from './Features/Instructor/Questions/UpdateQuestionsSlice'
import deleteQuestionReducer from './Features/Instructor/Questions/DeleteQuestionsSlice'
import detailsQuestionReducer from './Features/Instructor/Questions/DetailsQuestionsSlice'
const store = configureStore({
  reducer: {
    users: userReducer,
    register: registerReducer,


















    
    questionsData: questionsReducer,
    createQuestionData: createQuestionReducer,
    updateQuestionData:updateQuestionReducer,
    deleteQuestion: deleteQuestionReducer,
    questionsDetails:detailsQuestionReducer,

  },
});

export default store;
