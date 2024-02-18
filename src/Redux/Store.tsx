import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/Auth/LoginSlice";
import registerReducer from "./Features/Auth/RegisterSlice";

import groupsReducer from "./Features/Instructor/Groups/GroupsSlice"
import deleteGroupReducer from './Features/Instructor/Groups/DeleteGroupSlice'

import logoutReducer from './Features/Auth/LogoutSlice'

import questionsReducer from "./Features/Instructor/Questions/GetQuestionsSlice"
import createQuestionReducer from "./Features/Instructor/Questions/CreateQuestionsSlice"
import updateQuestionReducer from './Features/Instructor/Questions/UpdateQuestionsSlice'
import deleteQuestionReducer from './Features/Instructor/Questions/DeleteQuestionsSlice'
import detailsQuestionReducer from './Features/Instructor/Questions/DetailsQuestionsSlice'
import changePasswordReducer from "./Features/Auth/ChangePasswordSlice";
import studentsReducer from "./Features/Instructor/Students/GetAllStudentsSlice"
import questionWithoutAnswersReducer from "./Features/Learner/QuestionsWithoutAnswerSlice"
// import deleteItemReducer from "./Features/Instructor/Students/DeleteStudentsSlice"; // Import the delete students reducer
import quizzessReducer from './Features/Instructor/Quizzes/getQuizzesSlice'
import deleteQuizReducer from './Features/Instructor/Quizzes/deleteQuizzesSlice'
import incommingQuizdeleteQuiz from './Features/Instructor/Quizzes/incommingQuizSlice'
import completedQuizdeleteQuiz from './Features/Instructor/Quizzes/completedQuizzesSlice'
const store = configureStore({
  reducer: {
    users: userReducer,
    register: registerReducer,

    groupsSlice: groupsReducer,
    deleteGroup: deleteGroupReducer,
    auth: logoutReducer,

    questionsData: questionsReducer,
    createQuestionData: createQuestionReducer,
    updateQuestionData:updateQuestionReducer,
    deleteQuestion: deleteQuestionReducer,
    questionsDetails:detailsQuestionReducer,
    changePassword: changePasswordReducer,
    studentsData: studentsReducer,



    questionWithoutAnswers: questionWithoutAnswersReducer,
    // deleteItem: deleteItemReducer,

    quizzesData: quizzessReducer,
    deleteQuiz: deleteQuizReducer,
    incommingQuizData:incommingQuizdeleteQuiz,
    completedQuizData:completedQuizdeleteQuiz,
  },
});

export default store;
