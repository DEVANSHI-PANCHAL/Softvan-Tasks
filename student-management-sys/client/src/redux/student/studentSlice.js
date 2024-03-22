import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
const initialState = {
  students: [],
  loading: false,
  error: null,
};

// Define async thunk for fetching students
export const fetchStudents = createAsyncThunk(
  'students/fetchStudents',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().user.currentUser.data;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get('/student', config);
      return response.data.student;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Define async thunk for creating a student
export const createStudent = createAsyncThunk(
  'students/createStudent',
  async (formData, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().user.currentUser.data;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post('/createStudent', formData, config); 
      return response.data.student;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create student slice
const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students.push(action.payload);
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { studentReducer} = studentSlice.actions; 
export default studentSlice.reducer;
