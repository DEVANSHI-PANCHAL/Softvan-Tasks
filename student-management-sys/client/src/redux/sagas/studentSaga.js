import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchStudentsSuccess, fetchStudents,fetchStudentsFailure } from '../student/studentSlice';
import axios from 'axios';
import { getStudentsApi } from '../../service/student.api';

// Fetch students saga
function* fetchStudentsSaga() {
  try {
    // const { data } = yield call(() => axios.get('/api/students'));
    const { data } = yield call(getStudentsApi());
    yield put(fetchStudentsSuccess(data));
  } catch (error) {
    yield put(fetchStudentsFailure(error.message));
  }
}

// Create student saga
// function* createStudentSaga(action) {
//   try {
//     const { data } = yield call(() => axios.post('/api/students', action.payload));
//     yield put(createStudentSuccess(data));
//   } catch (error) {
//     // yield put(createStudentFailure(error.message));
//   }
// }

// Watcher saga
function* studentsWatcherSaga() {
  yield takeLatest(fetchStudents.type, fetchStudentsSaga);
  // yield takeLatest(createStudent.type, createStudentSaga);
}

export default studentsWatcherSaga;