import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about' exact component={About} />
        <Route path='/projects' exact component={Portfolio} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/resume' exact component={Resume} />

      </Switch>
    </Router>
  );
}

export default App;
