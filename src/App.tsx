import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Sum from './core/Sum';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Sum />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
