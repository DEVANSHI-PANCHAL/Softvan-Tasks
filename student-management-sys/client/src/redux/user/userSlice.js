// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   currentUser: null,
//   error: null,
//   loading: false,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     signInStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     signInSuccess: (state, action) => {
//       state.currentUser = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     signInFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     updateStart: (state) => {
//         state.loading = true;
//         state.error = null;
//       },
//       updateSuccess: (state, action) => {
//         state.currentUser = action.payload;
//         state.loading = false;
//         state.error = null;
//       },
//       updateFailure: (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       }, deleteUserStart: (state) => {
//         state.loading = true;
//         state.error = null;
//       },
//       deleteUserSuccess: (state) => {
//         state.currentUser = null;
//         state.loading = false;
//         state.error = null;
//       },
//       deleteUserFailure: (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       },
//       signoutSuccess: (state) => {
//         state.currentUser = null;
//         state.error = null;
//         state.loading = false;
//       },
//   },
// });

// export const {
//     signInStart,
//     signInSuccess,
//     signInFailure,
//     updateStart,
//     updateSuccess,
//     updateFailure,
//     deleteUserStart,
//     deleteUserSuccess,
//     deleteUserFailure,
//     signoutSuccess,
//   } = userSlice.actions;

// export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { createUser, updateUser, deleteUser } from '../../service/user.api'; // Assuming you have service functions for signing in, updating user, and deleting user
import { loginReq } from '../../service/login.api'; // Assuming you have service functions for signing in, updating user, and deleting user

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signoutSuccess: (state) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    // Middleware logic for asynchronous actions
    builder.addCase(loginReq, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginReq.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(loginReq.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(updateUser, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(deleteUser, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signoutSuccess,
} = userSlice.actions;

// export const userReducer = userSlice.reducer; 

export default userSlice.reducer;


