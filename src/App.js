import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Index';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import './sass/App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
}, []);

  return (
    <div className="App">
      <Router>

        <Navbar/>

        <Switch>
          <Route exact  path = "imran-portfolio-interior/" component = {Home}/>
          <Route exact  path = "/" component = {Home}/>
        </Switch>

        <Footer/>

      </Router>

        
    </div>
  );
}

export default App;
