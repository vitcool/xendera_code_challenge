import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Random from 'random-js';

class Lottery extends Component {
  state = {
    open: false,
    winner: {
      profile: {
        firstName: '',
        lastName: ''
      }
    },
    random: Random(Random.engines.mt19937().autoSeed()),
    currentChallenge: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onWinnerSelect = item => {
    const { athletsData } = this.props;
    const { random } = this.state;
    this.setState(
      {
        currentChallenge: item.title
      },
      () => {
        let athlets = athletsData.filter(athlet =>
          athlet.challenges.includes(item.challengeUuid)
        );
        this.setState(
          { winner: athlets[random.integer(0, athlets.length - 1)] },
          () => this.handleClickOpen()
        );
      }
    );
  };

  getChallengeName = uuid => {
    let result = this.props.challengesData.filter(
      item => item.challengeUuid === uuid
    );
    return result[0] ? result[0].title : '';
  };

  componentDidMount() {
    const { fetchAthletesData, fetchChallengesData } = this.props;
    fetchAthletesData();
    fetchChallengesData();
  }

  render() {
    const { athletsData, challengesData } = this.props;
    const winnerProfile = this.state.winner ? this.state.winner.profile : null;
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              List of challenges
            </Typography>
          </Toolbar>
          <Card>
            <CardContent>
              {challengesData ? (
                <div className="users-list">
                  <List>
                    {challengesData.map(item => {
                      let { sportKey, value } = item.goals.sports[0];
                      return (
                        <div key={item.challengeUuid}>
                          <ListItem>
                            <ListItemText
                              primary={item.title}
                              secondary={`${sportKey} ${value}`}
                            />
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={() => this.onWinnerSelect(item)}
                            >
                              Choose the winner
                            </Button>
                          </ListItem>
                          <Divider />
                        </div>
                      );
                    })}
                  </List>
                </div>
              ) : (
                <div>Data is loading</div>
              )}
            </CardContent>
          </Card>
          <Toolbar>
            <Typography variant="title" color="inherit">
              List of athlets
            </Typography>
          </Toolbar>
          <Card>
            <CardContent>
              {athletsData ? (
                <div className="users-list">
                  <List>
                    {athletsData.map((item, index) => {
                      const { firstName, lastName, email } = item.profile;
                      return (
                        <div key={index}>
                          <ListItem>
                            <Avatar>{firstName.substring(0, 1)}</Avatar>
                            <ListItemText
                              primary={`${firstName} ${lastName}`}
                              secondary={email}
                            />
                            <ListItemSecondaryAction>
                              {item.challenges.map(itemChellange => {
                                return (
                                  <div key={itemChellange}>
                                    {this.getChallengeName(itemChellange)}
                                  </div>
                                );
                              })}
                            </ListItemSecondaryAction>
                          </ListItem>
                          <Divider />
                        </div>
                      );
                    })}
                  </List>
                </div>
              ) : (
                <div>Data is loading</div>
              )}
            </CardContent>
          </Card>
        </AppBar>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {`The winner of ${this.state.currentChallenge} challenge is...`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {winnerProfile
                ? `${winnerProfile.firstName} ${winnerProfile.lastName} (${
                    winnerProfile.email
                  })`
                : null}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Lottery.propTypes = {
  fetchAthletesData: PropTypes.func,
  fetchChallengesData: PropTypes.func,
  athletsData: PropTypes.array,
  challengesData: PropTypes.array
};

export default Lottery;
