import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/Auth/LoginSlice";
import registerReducer from "./Features/Auth/RegisterSlice";
import changePasswordReducer from "./Features/Auth/ChangePasswordSlice"; 

const store = configureStore({
  reducer: {
    users: userReducer,
    register: registerReducer,
    changePassword: changePasswordReducer,
  },
});

export default store;
