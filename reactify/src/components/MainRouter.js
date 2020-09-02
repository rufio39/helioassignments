import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp' 
import Forgot from './Forgot'

export default function MainRouter() {

    return (
        <Router>
            <Switch>
                <Route path="/signin"><SignIn></SignIn></Route>
                <Route path="/signup"><SignUp></SignUp></Route>
                <Route path="/forgot"><Forgot></Forgot></Route>
                <Route path="/"><Home></Home></Route>
            </Switch>
        </Router>
    )
}