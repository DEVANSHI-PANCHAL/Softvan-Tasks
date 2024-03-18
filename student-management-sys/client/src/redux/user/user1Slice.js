import { createSelector, createSlice } from '@reduxjs/toolkit';
import { deleteUser, signIn, signOut, updateUser } from './userThunks';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const user1Slice = createSlice({
  name: 'user1',
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
      }, deleteUserStart: (state) => {
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
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signOut.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
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
  } = user1Slice.actions;

  export const selectUser = createSelector(
    (state) => state.user.currentUser,
    (currentUser) => currentUser.data.user.username
  );
export default user1Slice.reducer;