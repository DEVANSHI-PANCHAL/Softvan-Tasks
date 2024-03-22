import { all } from 'redux-saga/effects';
import { weatherDataSaga } from './weatherDataSaga';
import { themeSaga } from './themeSaga';
import studentsWatcherSaga from './studentSaga';
// import userSaga from './user/userSaga';

export default function* rootSaga() {
  yield all([
    // userSaga(),
    // themeSaga(),
    studentsWatcherSaga(),
    weatherDataSaga(),
  ]);
}