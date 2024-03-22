import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createStudentSaga(action) {
  try {
    const { token } = action.payload;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    const response = yield call(axios.post, '/createStudent', action.payload, config);
    yield put({ type: 'CREATE_STUDENT_SUCCESS', payload: response.data.student });
  } catch (error) {
    yield put({ type: 'CREATE_STUDENT_FAILURE', payload: error.response.data });
  }
}

function* createStudentSagaWatcher() {
  yield takeLatest('CREATE_STUDENT_REQUEST', createStudentSaga);
}

export default createStudentSagaWatcher;