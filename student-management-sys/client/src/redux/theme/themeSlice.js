import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        changeThemeSuccess: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem('theme', action.payload);
          },
    },
});

export const { toggleTheme, changeThemeSuccess } = themeSlice.actions;

export default themeSlice.reducer;

// Exporting themeReducer as an alias
export const themeReducer = themeSlice.reducer;

export const selectTheme = (state) => state.theme.theme;
