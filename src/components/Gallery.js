import React from 'react';
import '../scss/Gallery.scss';
import useFirestore from '../hooks/useFirestore';
import GalleryPhoto from './GalleryPhoto';
function Gallery({ setClickedGalleryPhoto }) {
  const { docs } = useFirestore('images');
  console.log(docs);
  return (
    <div id='gallery'>
      <h1>Gallery</h1>
      <div id='grid-wrapper'>
        {docs &&
          docs.map((doc, photoNumber) => (
            <GalleryPhoto
              key={doc.id}
              photoNumber={photoNumber}
              doc={doc}
              setClickedGalleryPhoto={setClickedGalleryPhoto}
            />
          ))}
      </div>
    </div>
  );
}

export default Gallery;
