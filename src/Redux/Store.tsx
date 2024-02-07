import { configureStore } from '@reduxjs/toolkit'
import userReducer from  './Features/Auth/LoginSlice'

const store = configureStore ({
  reducer: {
    users: userReducer,
  }
})

export default store;
