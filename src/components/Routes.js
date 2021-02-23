import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import NewsFeed from '../pages/NewsFeed';
import Messages from '../pages/Messages';
import Watch from '../pages/Watch';
import Profile from '../pages/Profile';


class Routes extends Component {
    render() {
        return (
            <section>
                <Switch>
                    <Route exact path='/' component={NewsFeed} />
                    <Route path='/NewsFeed' component={NewsFeed} />
                    <Route path='/Messages' component={Messages} />
                    <Route path='/Watch' component={Watch} />
                    <Route path='/Profile' component={Profile} />
                </Switch>
            </section>
        );
    }
}
export default Routes;