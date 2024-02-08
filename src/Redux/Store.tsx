import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/Auth/LoginSlice";
import registerReducer from "./Features/Auth/RegisterSlice";
import questionsReducer from "./Features/Instructor/Questions/GetQuestionsSlice"
const store = configureStore({
  reducer: {
    users: userReducer,
    register: registerReducer,
    questionsData: questionsReducer,
  },
});

export default store;
