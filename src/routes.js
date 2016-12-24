import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import EventForm from './components/EventForm';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={EventForm} />
    <Route path="about" component={EventForm} />
  </Route>
);
