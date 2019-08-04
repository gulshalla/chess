import withRoot from 'modules/withRoot';
// --- Post bootstrap -----
import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from 'modules/components/Typography';
import AppAppBar from 'modules/views/AppAppBar';
import privacy from 'modules/views/privacy.md';
import AppFooter from 'modules/views/AppFooter';
import ReactMarkdown from 'react-markdown'

class Privacy extends Component {
  constructor(props) {
    super(props)
    this.state = { privacy: null }
  }

  componentWillMount() {
    fetch(privacy).then((response) => response.text()).then((text) => {
      this.setState({ privacy: text })
    })
  }

  render() {
    return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <ReactMarkdown source={this.state.privacy} />
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
    )
  }
};

export default withRoot(Privacy);
