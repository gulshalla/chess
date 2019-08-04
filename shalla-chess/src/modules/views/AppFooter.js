import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import { Link as RouterLink } from 'react-router-dom';
import facebookImage from 'assets/appFooterFacebook.png'
import twitterImage from 'assets/appFooterTwitter.png'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

const CollisionLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/terms/" {...props} />
));

const CollisionLink2 = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/privacy/" {...props} />
));


export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={classes.icon}
                >
                  <img src={facebookImage} alt="Facebook" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={classes.icon}
                >
                  <img src={twitterImage} alt="Twitter" />
                </a>
              </Grid>
              <Grid item>© 2019 Omar Shalla</Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/terms/" component={CollisionLink}>Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/privacy/" component={CollisionLink2}>Privacy</Link>
              </li>
            </ul>
          </Grid>
          
        </Grid>
      </Container>
    </Typography>
  );
}
