import { takeEvery, put } from 'redux-saga/effects';
// import { changeTheme } from './themeActions';
import { changeThemeSuccess } from '../theme/themeSlice';
import { createAction } from '@reduxjs/toolkit';




export const changeTheme = payload => createAction('CHANGE_THEME', payload);


function* changeThemeSaga(action) {
  try {
    yield localStorage.setItem('theme', action.payload);
    yield put(changeThemeSuccess());
  } catch (error) {
    // yield put(changeThemeFailure(error.message));
  }
}

export function* themeSaga() {
  yield takeEvery(changeTheme.type, changeThemeSaga);
}