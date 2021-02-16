import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Sums from './core/Sums';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Sums />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
