// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [] // Initial state for users
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
        const userId = action.payload;
        state.users = state.users.filter(user => user.id !== userId);
      }
  }
});

export const { addUser } = userSlice.actions;
export const { deleteUser } = userSlice.actions;
export default userSlice.reducer;
