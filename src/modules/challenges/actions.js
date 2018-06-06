import { createAction } from 'redux-actions';

export const fetchChallengesData = createAction('FETCH_CHALLENGES_DATA');

export const fetchChallengesDataSuccess = createAction('FETCH_CHALLENGES_DATA_SUCCESS');

export const fetchChallengesDataFailed = createAction('FETCH_CHALLENGES_DATA_FAILED');