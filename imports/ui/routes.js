import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Registro } from './components/Registro';

export default ()=>{
  return(
    <HashRouter>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/' component={Login} />
        <Route exact path='/registro' component={Registro} />
      </Switch>
    </HashRouter>
  )
}