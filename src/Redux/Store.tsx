import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/Auth/LoginSlice";
import registerReducer from "./Features/Auth/RegisterSlice";
const store = configureStore({
  reducer: {
    users: userReducer,
    register: registerReducer,
  },
});

export default store;
