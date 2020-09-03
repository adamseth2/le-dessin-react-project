import React, { useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './scss/fonts.css';
import './scss/App.scss';

import Home from './pages/Home';
import Login from './pages/Login';
import GuestInfo from './pages/GuestInfo';
import GuestUpload from './pages/GuestUpload';
import ArtPage from './pages/ArtPage';

function App() {
  const [clickedGalleryPhoto, setClickedGalleryPhoto] = useState(null);
  console.log(process.env.PUBLIC_URL);
  console.log(window.location.pathname);

  return (
    <div id='app'>
      <Router basename='le-dessin-react-project'>
        <Route
          path='/'
          exact
          render={() => (
            <Home setClickedGalleryPhoto={setClickedGalleryPhoto} />
          )}></Route>
        <Route path='/Login' component={Login} exact></Route>
        <Route path='/Guest' component={GuestInfo} exact></Route>
        <Route path='/Guest/:id' component={GuestUpload}></Route>
        <Route
          path='/Art/:id'
          exact
          render={() => (
            <ArtPage
              clickedGalleryPhoto={clickedGalleryPhoto}
              setClickedGalleryPhoto={setClickedGalleryPhoto}
            />
          )}></Route>
      </Router>
    </div>
  );
}

export default App;
