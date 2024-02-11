import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/Auth/LoginSlice";
import registerReducer from "./Features/Auth/RegisterSlice";
import groupsReducer from "./Features/Instructor/Groups/GroupsSlice"
const store = configureStore({
  reducer: {
    users: userReducer,
    register: registerReducer,
    groupsSlice: groupsReducer,
  },
});

export default store;
