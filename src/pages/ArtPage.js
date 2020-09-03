import React, { useState, useEffect } from 'react';

import useFirestore from '../hooks/useFirestore';
import Nav from '../components/Nav';
import ArtPageItem from '../components/ArtPageItem';
import Modal from '../components/Modal';
function ArtPage({ clickedGalleryPhoto, setClickedGalleryPhoto }) {
  const [doc, setDoc] = useState(null);
  const { docs } = useFirestore('images');
  const [clickedPhoto, setClickedPhoto] = useState(null);
  let pathArray = window.location.hash.split('/');
  let itemId = pathArray[pathArray.indexOf('Art') + 1];
  console.log(itemId);

  useEffect(() => {
    if (clickedGalleryPhoto) {
      setDoc(clickedGalleryPhoto);
      setClickedGalleryPhoto(null);
    } else if (docs) {
      docs.forEach(loopDoc => {
        if (loopDoc.id === itemId) {
          setDoc(loopDoc);
          console.log(doc);
        }
      });
    }
  }, [docs]);

  return (
    <div id='art-page'>
      <Nav />
      <ArtPageItem doc={doc} setClickedPhoto={setClickedPhoto} />
      {clickedPhoto && (
        <Modal clickedPhoto={clickedPhoto} setClickedPhoto={setClickedPhoto} />
      )}
    </div>
  );
}

export default ArtPage;
