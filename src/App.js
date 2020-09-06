import React, { useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './scss/fonts.css';
import './scss/App.scss';

import Home from './pages/Home';
import Login from './pages/Login';
import GuestInfo from './pages/GuestInfo';
import GuestUpload from './pages/GuestUpload';
import ArtPage from './pages/ArtPage';
import Nav from './components/Nav';

function App() {
  const [clickedGalleryPhoto, setClickedGalleryPhoto] = useState(null);
  const [name, setName] = useState(null);

  console.log(process.env.PUBLIC_URL);
  console.log(window.location.pathname);
  const windowHashUrlArray = window.location.hash.split('/');
  // let nameUrl = windowHashUrlArray[windowHashUrlArray.indexOf('Guest') + 1];
  // IF WANT TO FIND NAME
  // if (nameUrl) {
  //   // while (nameUrl.indexOf('20%') !== 1) {
  //   let index = nameUrl.indexOf('20%');
  //   console.log('NameUrl is ' + nameUrl);
  //   nameUrl =
  //     nameUrl.slice(0, index) + ' ' + nameUrl.slice(index + 3, nameUrl.length);
  //   // }
  //   setName(nameUrl);
  // }

  return (
    <div id='app'>
      <Router basename={process.env.PUBLIC_URL}>
        <Route
          path='/'
          exact
          render={() => (
            <React.Fragment>
              <Nav />
              <Home setClickedGalleryPhoto={setClickedGalleryPhoto} />
            </React.Fragment>
          )}></Route>
        <Route
          path='/Login'
          exact
          render={() => (
            <React.Fragment>
              <Nav />
              <Login />
            </React.Fragment>
          )}></Route>
        <Route
          path='/Guest'
          exact
          render={() => (
            <React.Fragment>
              <Nav />
              <GuestInfo name={name} setName={setName} />
            </React.Fragment>
          )}></Route>
        <Route
          path='/Guest/:id'
          exact
          render={() => (
            <React.Fragment>
              <Nav />
              <GuestUpload name={name} />
            </React.Fragment>
          )}></Route>
        <Route
          path='/Art/:id'
          exact
          render={() => (
            <React.Fragment>
              <Nav />
              <ArtPage
                clickedGalleryPhoto={clickedGalleryPhoto}
                setClickedGalleryPhoto={setClickedGalleryPhoto}
              />
            </React.Fragment>
          )}></Route>
      </Router>
    </div>
  );
}

export default App;
