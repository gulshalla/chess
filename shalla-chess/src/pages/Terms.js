import withRoot from 'modules/withRoot';
// --- Post bootstrap -----
import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
//import Markdown from './modules/components/Markdown';
import Typography from 'modules/components/Typography';
import AppAppBar from 'modules/views/AppAppBar';
import terms from 'modules/views/terms.md';
import AppFooter from 'modules/views/AppFooter';
import ReactMarkdown from 'react-markdown'


class Terms extends Component {
  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    fetch(terms).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
    return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms
          </Typography>
          <ReactMarkdown source={this.state.terms} />
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
    )
  }
};

export default withRoot(Terms);
