import { call, put, takeEvery } from 'redux-saga/effects';

import { getRequest } from './api';
import {
  fetchChallengesData,
  fetchChallengesDataSuccess,
  fetchChallengesDataFailed
} from '../modules/challenges/actions';

export function* fetchChallengesDataWorker() {
  try {
    const response = yield call(getRequest, `/challenges`);
    const responseJSON = yield call([response, response.json]);

    if (!responseJSON.isError) {
      yield put(fetchChallengesDataSuccess(responseJSON));
    } else {
      yield put(fetchChallengesDataFailed(responseJSON));
    }

    // TODO: Add modal if failed
  } catch (error) {
    window.console.log('fetchChallengesDataWorker error', error);
  }
}

export default function* profileWatcher() {
  yield takeEvery(fetchChallengesData, fetchChallengesDataWorker);
}
