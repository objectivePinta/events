import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import CrazyFrom from './components/CrazyForm';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CrazyFrom} />
    <Route path="about" component={CrazyFrom} />
  </Route>
);
