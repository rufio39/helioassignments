import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoggedInProvider } from "./LoggedInContext"

import Home from './Home'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import SignUp from './SignUp'


export default function MainRouter() {

    return (
        <LoggedInProvider>
            <Router>
                <Switch>
                    <Route path="/signUp">
                        <SignUp></SignUp>
                    </Route>
                    <Route path="/forgotpassword">
                        <ForgotPassword></ForgotPassword>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/">
                        <Home></Home>
                    </Route>

                </Switch>
            </Router>
        </LoggedInProvider>
    )
}