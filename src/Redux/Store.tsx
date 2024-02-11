import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/Auth/LoginSlice";
import registerReducer from "./Features/Auth/RegisterSlice";
import groupsReducer from "./Features/Instructor/Groups/GroupsSlice"
import deleteGroupReducer from './Features/Instructor/Groups/DeleteGroupSlice'

import logoutReducer from './Features/Auth/LogoutSlice'
const store = configureStore({
  reducer: {
    users: userReducer,
    register: registerReducer,
    groupsSlice: groupsReducer,
    deleteGroup: deleteGroupReducer,
    auth: logoutReducer,
  },
});

export default store;
