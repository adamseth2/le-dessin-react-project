import React, { useState, useEffect } from 'react';
import '../scss/GalleryPhoto.scss';
import { Link } from 'react-router-dom';

function GalleryPhoto({ doc, setClickedGalleryPhoto }) {
  const { title, price, description, url, id } = doc;
  const [shortenDescription, setShortenDescription] = useState(false);

  const limitDescription = () => {
    const descriptionWordArray = description.split(' ', 16);
    console.log(descriptionWordArray);
    setShortenDescription(descriptionWordArray);
    if (descriptionWordArray.length === 16) {
      setShortenDescription(
        descriptionWordArray.reduce((words, word) => words + ' ' + word) + '...'
      );
    }
  };
  useEffect(() => {
    limitDescription();
  }, []);

  return (
    <Link to={'/Art/' + id} onClick={() => setClickedGalleryPhoto(doc)}>
      <div className='gallery-photo'>
        <img src={url} alt='Artwork' />
        <div className='caption-box'>
          <h3>{title}</h3>
          <p className='description'>{shortenDescription}</p>
          <p className='price'>{price}</p>
        </div>
      </div>
    </Link>
  );
}

export default GalleryPhoto;
