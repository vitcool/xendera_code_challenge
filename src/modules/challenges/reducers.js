import { handleActions } from 'redux-actions';
import { fetchChallengesDataSuccess, fetchChallengesDataFailed } from './actions';

const defaultState = {
  challengesData: [],
  challengesDataError: [] 
};

export default handleActions(
  {
    [fetchChallengesDataSuccess]: (state, { payload }) => {
      return {
        ...state,
        challengesData: payload
      };
    },
    [fetchChallengesDataFailed]: (state, { payload }) => {
      return {
        ...state,
        challengesDataError: payload
      };
    }
  },
  defaultState
);
