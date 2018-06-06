import { handleActions } from 'redux-actions';
import { fetchAthletesDataSuccess, fetchAthletesDataFailed } from './actions';

const defaultState = {
  athletsData: [],
  athletsDataError: []
};

export default handleActions(
  {
    [fetchAthletesDataSuccess]: (state, { payload }) => {
      return {
        ...state,
        athletsData: payload
      };
    },
    [fetchAthletesDataFailed]: (state, { payload }) => {
      return {
        ...state,
        athletsDataError: payload
      };
    }
  },
  defaultState
);
