import { createAction } from 'redux-actions';

export const fetchAthletesData = createAction('FETCH_ATHLETS_DATA');

export const fetchAthletesDataSuccess = createAction('FETCH_ATHLETS_DATA_SUCCESS');

export const fetchAthletesDataFailed = createAction('FETCH_ATHLETS_DATA_FAILED');