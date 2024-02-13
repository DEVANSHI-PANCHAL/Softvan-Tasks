import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLoggedIn: false,
    userDetail: {},
    userAccessToken: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeUserLoggedIn(state, action) {
            state.userLoggedIn = action.payload;
        },
        changeUserDetail(state, action) {
            state.userDetail = action.payload;
        },
        changeUserAccessToken(state, action) {
            state.userAccessToken = action.payload;
        },
    }
});

export const { changeUserLoggedIn, changeUserDetail, changeUserAccessToken } = userSlice.actions;
export default userSlice.reducer;
