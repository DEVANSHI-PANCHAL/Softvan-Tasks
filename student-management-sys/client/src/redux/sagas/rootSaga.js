import { all } from 'redux-saga/effects';
import { weatherDataSaga } from './weatherDataSaga';
import { themeSaga } from './themeSaga';
// import userSaga from './user/userSaga';
// import studentSaga from './student/studentSaga';

export default function* rootSaga() {
  yield all([
    // userSaga(),
    themeSaga(),
    // studentSaga(),
    weatherDataSaga(),
  ]);
}