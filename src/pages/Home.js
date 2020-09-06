import React from 'react';
import Title from '../components/Title';
import Gallery from '../components/Gallery';

function Home({ setClickedGalleryPhoto }) {
  return (
    <React.Fragment>
      <Title />
      <Gallery setClickedGalleryPhoto={setClickedGalleryPhoto} />
    </React.Fragment>
  );
}

export default Home;
