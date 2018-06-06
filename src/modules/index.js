import { combineReducers } from 'redux';
import athlets from './athlets';
import challenges from './challenges';

export default combineReducers({
  athlets,
  challenges
});
