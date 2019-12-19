import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Home from '../App';
import Login from '../user/login/login';
import Register from '../user/register/register';




const Navigation = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
}

export default Navigation