import React from 'react';
import './styles/Dashboard.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
        </Switch>  
    </div>
  );
}

export default App;