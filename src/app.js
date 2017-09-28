import './style.sass';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './components/main';

render(
    <Router>
        <Route exact path="/" component={Main} />
    </Router>,
    document.querySelector('#root')
);
