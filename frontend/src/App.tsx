import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import root from './components/root'
import test from './components/test'
import result from './components/result'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={root} exact />
        <Route path='/test' component={test} exact />
        <Route path='/result' component={result} exact />
      </Switch>
    </Router>
  );
}

export default App;

