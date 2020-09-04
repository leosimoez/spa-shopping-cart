import React from 'react'
import { Route, HashRouter, Switch } from 'react-router'
import Main from './components/Main'
import Checkout from './components/Checkout'
import CallbackPage from './components/CallbackPage'
import LoginPage from './components/LoginPage'
import LogoutPage from './components/LogoutPage'


export default props => (
  <React.Fragment>
    {/* <HashRouter>
        <Switch> */}
    <Route exact path='/' component={Main} />
    <Route exact path='/checkout' component={Checkout} />
    <Route path="/callback" component={CallbackPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/logout" component={LogoutPage} />
    {/* </Switch>
    </HashRouter> */}
  </React.Fragment>
)