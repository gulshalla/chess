import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';


const curvyLines = require('../../assets/appCurvyLines.png');
const watchChess = require('../../assets/watch.jpg');
const competeChess = require('../../assets/play.jpg');
const robotChess = require('../../assets/human-vs-robot.jpg');

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 150,
    borderRadius: 16,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },

  center: {
    textAlign: 'center',
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={curvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={competeChess}
                alt="chess"
              />
              <Typography variant="h6" className={classes.title}>
                Compete
              </Typography>
              <Typography variant="h5" className={classes.center}>
                {'Top the leaderboard. Share your scores on social media.'}
                {' Ranks are calculated using ELO scores.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={robotChess}
                alt="chess"
              />
              <Typography variant="h6" className={classes.title}>
                Practice with a bot
              </Typography>
              <Typography variant="h5" className={classes.center}>
                {'Improve your chess game using our neural net based chess AI.'}
                {' Set the appropriate difficulty level.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={watchChess}
                alt="chess"
              />
              <Typography variant="h6" className={classes.title}>
                Watch ongoing games
              </Typography>
              <Typography variant="h5" className={classes.center}>
                {'Spectate games currently going on. Suggest moves to your friends.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
