import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchAthletesData,
  fetchAthletesDataSuccess,
  fetchAthletesDataFailed
} from '../modules/athlets/actions';
import { getRequest } from './api';

export function* fetchAthletesDataWorker() {
  try {
    const response = yield call(getRequest, `/athletes`);
    const responseJSON = yield call([response, response.json]);
    //debugger;
    if (!responseJSON.isError) {
      yield put(fetchAthletesDataSuccess(responseJSON));
    } else {
      yield put(fetchAthletesDataFailed(responseJSON));
    }

    // TODO: Add modal if failed
  } catch (error) {
    window.console.log('fetchAthletesDataWorker error', error);
  }
}

export default function* profileWatcher() {
  yield takeEvery(fetchAthletesData, fetchAthletesDataWorker);
}
