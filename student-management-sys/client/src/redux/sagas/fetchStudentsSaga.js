import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchStudentsSaga(action) {
  try {
    const { token } = action.payload;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = yield call(axios.get, '/student', config);
    yield put({ type: 'FETCH_STUDENTS_SUCCESS', payload: response.data.student });
  } catch (error) {
    yield put({ type: 'FETCH_STUDENTS_FAILURE', payload: error.response.data });
  }
}

function* fetchStudentsSagaWatcher() {
  yield takeLatest('FETCH_STUDENTS_REQUEST', fetchStudentsSaga);
}

export default fetchStudentsSagaWatcher;