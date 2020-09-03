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
      {docs &&
        docs.map(doc => (
          <GalleryPhoto
            key={doc.id}
            doc={doc}
            setClickedGalleryPhoto={setClickedGalleryPhoto}
          />
        ))}
    </div>
  );
}

export default Gallery;
