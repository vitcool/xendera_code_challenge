import { all } from 'redux-saga/effects';
import athlets from './athlets';
import challenges from './challenges';

export default function* rootSaga() {
    yield all([
      athlets(),
      challenges()
    ]);
  }