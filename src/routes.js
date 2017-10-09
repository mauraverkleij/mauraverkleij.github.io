import React from 'react';
import { Router, Route } from 'react-router';

import App from './containers/App';
import About from './containers/About';
import NotFound from './containers/NotFound';
import Project from './containers/Project';



const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} />
        <Route path="/about" component={About}/>
        <Route name="project" path="/projects(/:project)" component={Project}/>
        <Route path="*" component={NotFound} />
    </Router>
);

export default Routes;