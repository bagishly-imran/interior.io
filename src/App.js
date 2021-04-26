import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Index';
import Navbar from './layouts/navbar';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar/>

        <Switch>
          <Route exact  path = "/" component = {Home}/>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
