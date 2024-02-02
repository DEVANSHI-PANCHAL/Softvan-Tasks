// redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    email: ''
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData(state, action) {
      // Merge the new form data into the existing state
      state.formData = { ...state.formData, ...action.payload };
    }
  }
});

export const { updateFormData } = formSlice.actions;

export default formSlice.reducer;
