import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllStudentsUrl, requestHeaders } from "../../../../Services/api";

// Define the interface for a single student
interface Student {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  status: string;
  role: string;
  group?: {
    _id: string;
    name: string;
    status: string;
    instructor: string;
    students: string[];
    max_students: number;
    updatedAt: string;
    createdAt: string;
    __v: number;
  };
}

// Define the interface for the Redux state
export interface StudentsState {
  data: Student[];
  loading: boolean;
  error: string | null;
}

// Async thunk to fetch students data from the API
export const fetchStudents = createAsyncThunk<Student[]>(
  "students/fetchStudents",
  async () => {
    const response = await axios.get<Student[]>(`${getAllStudentsUrl}`,{
      headers: requestHeaders,
    });
    return response.data;
  }
);

// Define the initial state
const initialState: StudentsState = {
  data: [],
  loading: false,
  error: null,
};

// Define the students slice
const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });
  },
});

// Export the reducer
export default studentsSlice.reducer;

// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getAllStudentsUrl, requestHeaders } from "../../../../Services/api";
// import axios from "axios";

// export interface Props {
//   data: [];
//   loading: boolean;
//   error: null | string;
// }

// export const StudentsData = createAsyncThunk<any, void>(
//   "GetStudentsSlice/StudentsData",
//   async () => {
//     try {
//         const data = await axios.get(`${getAllStudentsUrl}`, {
//           headers: requestHeaders,
//         });
//         console.log("API Response:", data.data);
//         return data.data;
//       } catch (error) {
//         console.error("API Error:", error);
//         throw error;
//       }
//     // try {
//     //   const data = await axios.get(`${getAllStudendsUrl}`, {
//     //     headers: requestHeaders,


//     //   });
//     //   console.log(requestHeaders);
//     //   console.log(data.data);
//     //   return data.data;


//     // } 
//     // catch (error) {
      
//     //   throw error;
//     // }
//   }
// );


// const initialState: Props = {
//   data: [],
//   loading: false,
//   error: null,
// };

// export const GetStudentsSlice = createSlice({
//   name: "StudentsData",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(StudentsData.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(
//       StudentsData.fulfilled,
//       (state, action: PayloadAction<any>) => {
//         state.loading = false;
//         state.data = action.payload;
//         // state.data = true;
//         console.log(state.data);

//       }
//     );
//     builder.addCase(StudentsData.rejected, (state, action: PayloadAction<any>) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     });
//   },
// });

// export default GetStudentsSlice.reducer;