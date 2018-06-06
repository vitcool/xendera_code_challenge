import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Lottery extends Component {
  componentDidMount() {
    const { fetchAthletesData, fetchChallengesData } = this.props;
    fetchAthletesData();
    fetchChallengesData();
  }
  render() {
    const { athletsData, challenges } = this.props;
    return (
      <div onClick={() => this.onClick()}>
        {athletsData && challenges ? (
          <span>data is fetched</span>
        ) : (
          <div>data is not fethced</div>
        )}Í
      </div>
    );
  }
}

Lottery.propTypes = {
  fetchAthletesData: PropTypes.func,
  fetchChallengesData: PropTypes.func,
  athletsData: PropTypes.object,
  challenges: PropTypes.object
};

export default Lottery;
