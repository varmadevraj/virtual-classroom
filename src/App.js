import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ClassDetails from './components/ClassDetails/ClassDetails';
import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/class/:id" component={ClassDetails} />
          <Route path="/login" component={Login} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
