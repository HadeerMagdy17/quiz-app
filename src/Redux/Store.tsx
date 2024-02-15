import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/Auth/LoginSlice";
import registerReducer from "./Features/Auth/RegisterSlice";
import questionsReducer from "./Features/Instructor/Questions/GetQuestionsSlice"
import createQuestionReducer from "./Features/Instructor/Questions/CreateQuestionsSlice"
import updateQuestionReducer from './Features/Instructor/Questions/UpdateQuestionsSlice'
import deleteQuestionReducer from './Features/Instructor/Questions/DeleteQuestionsSlice'
import detailsQuestionReducer from './Features/Instructor/Questions/DetailsQuestionsSlice'
import changePasswordReducer from "./Features/Auth/ChangePasswordSlice";
import studentsReducer from "./Features/Instructor/Students/GetAllStudentsSlice";
import quizDetailsReducer from "./Features/Instructor/Quizes/QuizesDetaiksSlice";
// import deleteItemReducer from "./Features/Instructor/Students/DeleteStudentsSlice"; // Import the delete students reducer

const store = configureStore({
  reducer: {
    users: userReducer,
    register: registerReducer,
    questionsData: questionsReducer,
    createQuestionData: createQuestionReducer,
    updateQuestionData:updateQuestionReducer,
    deleteQuestion: deleteQuestionReducer,
    questionsDetails:detailsQuestionReducer,
    changePassword: changePasswordReducer,
    studentsData: studentsReducer,
    // deleteItem: deleteItemReducer,
    quizDetailsData:quizDetailsReducer,
  },
});

export default store;
