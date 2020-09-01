import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './scss/fonts.scss';
import './scss/App.scss';

import Home from './pages/Home';
import Login from './pages/Login';
import GuestInfo from './pages/GuestInfo';
import GuestUpload from './pages/GuestUpload';
import ArtPage from './pages/ArtPage';

function App() {
  return (
    <div id='app'>
      <Router>
        <Route path='/' exact render={() => <Home />}></Route>
        <Route path='/Login' component={Login} exact></Route>
        <Route path='/Guest' component={GuestInfo} exact></Route>
        <Route path='/Guest/:id' component={GuestUpload}></Route>
        <Route path='/Art/:id' exact render={() => <ArtPage />}></Route>
      </Router>
    </div>
  );
}

export default App;
