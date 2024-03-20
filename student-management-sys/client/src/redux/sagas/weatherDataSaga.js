import { takeEvery, put } from 'redux-saga/effects';
import { fetchWeatherData, fetchWeatherDataFailure, fetchWeatherDataRequest, fetchWeatherDataSuccess } from '../weather/weatherDataSlice';

function* fetchWeatherDataSaga(action) {
  try {
    yield put(fetchWeatherDataRequest());
    const { data } = yield action.payload;
    yield put(fetchWeatherDataSuccess(data));
  } catch (error) {
    yield put(fetchWeatherDataFailure(error.message));
  }
}

export function* weatherDataSaga() {
  yield takeEvery(fetchWeatherData.type, fetchWeatherDataSaga);
}