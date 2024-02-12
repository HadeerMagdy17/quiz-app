import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/Auth/LoginSlice";
import registerReducer from "./Features/Auth/RegisterSlice";
import changePasswordReducer from "./Features/Auth/ChangePasswordSlice"; 
import studentsReducer from "./Features/Instructor/Students/GetAllStudentsSlice"
// import deleteItemReducer from "./Features/Instructor/Students/DeleteStudentsSlice"; // Import the delete students reducer

const store = configureStore({
  reducer: {
    users: userReducer,
    register: registerReducer,
    changePassword: changePasswordReducer,
    studentsData: studentsReducer,
    // deleteItem: deleteItemReducer, 
  },
});

export default store;
