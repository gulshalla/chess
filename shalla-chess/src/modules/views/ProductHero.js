import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Link } from 'react-router-dom';
import chessBackground from '../../assets/chess_background.jpg';
//const backgroundImage =
  //'https://blenderartists.org/uploads/default/original/3X/5/5/5500c8eb06f3d3e787fbfd80fc52f0205512bd09.jpg';

//const backgroundImage = '../../assets/chess_background.jpg'

const styles = theme => ({
  background: {
    backgroundImage: `url(${chessBackground})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});


const CollisionLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/sign-up/" {...props} />
));

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={chessBackground} alt="" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your game
      </Typography>
      <br></br>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component={CollisionLink}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
