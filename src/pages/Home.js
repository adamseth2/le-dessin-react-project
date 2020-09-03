import React from 'react';
import Nav from '../components/Nav';
import Title from '../components/Title';
import Gallery from '../components/Gallery';

function Home({ setClickedGalleryPhoto }) {
  return (
    <React.Fragment>
      <Nav />
      <Title />
      <Gallery setClickedGalleryPhoto={setClickedGalleryPhoto} />
    </React.Fragment>
  );
}

export default Home;
