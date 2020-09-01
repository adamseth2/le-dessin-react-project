import React, { useState } from 'react';

import useFirestore from '../hooks/useFirestore';
import Nav from '../components/Nav';
import ArtPageItem from '../components/ArtPageItem';
import Modal from '../components/Modal';
function ArtPage() {
  const { docs } = useFirestore('images');
  const [clickedPhoto, setClickedPhoto] = useState(null);
  let itemId = window.location.pathname.substring(5);
  let doc;
  if (docs) {
    docs.forEach(loopDoc => {
      if (loopDoc.id === itemId) {
        doc = loopDoc;
        console.log(doc);
      }
    });
  }
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
