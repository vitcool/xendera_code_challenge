import { connect } from 'react-redux';
//componentns
import LotteryComponent from './../components/Lottery';
//actions
import { fetchAthletesData } from '../modules/athlets/actions';
import { fetchChallengesData } from '../modules/challenges/actions'
//selectors
import { getAthletsData } from '../modules/athlets/selectors';
import { getChallengesData } from '../modules/challenges/selectors';

const mapStateToProps = state => {
  return {
    athletsData: getAthletsData(state),
    challengesData: getChallengesData(state)
  };
};

const mapDispatchToProps = {
    fetchAthletesData,
    fetchChallengesData
};

export default connect(mapStateToProps, mapDispatchToProps)(LotteryComponent);