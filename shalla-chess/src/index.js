import React from 'react';
import ReactDOM from 'react-dom';
//import Index from './Home';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'Routes'


ReactDOM.render(
	<BrowserRouter>
  	<Routes />
  </BrowserRouter>,
  document.querySelector('#root'),
);
