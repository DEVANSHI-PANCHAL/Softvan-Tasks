import { takeEvery, put } from 'redux-saga/effects';
import { fetchWeatherData as fetchWeatherDataThunk } from '../weather/weatherThunk';
import axios from 'axios';
import { fetchWeatherDataFailure, fetchWeatherDataSuccess } from '../weather/weatherDataSlice';
import { fetchWeatherData } from '../weather/weatherThunk';

function* fetchWeatherDataSaga() {
  try {
    const { payload } = yield takeEvery(fetchWeatherDataThunk.type, fetchWeatherDataThunk);
    const response = yield fetchWeatherData();
    console.log("saga")
    yield put(fetchWeatherDataSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherDataFailure(error.message));
  }
}

export function* weatherDataSaga() {
  yield takeEvery(fetchWeatherData.type, fetchWeatherDataSaga);
}