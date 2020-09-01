import React from 'react';
import '../scss/GalleryPhoto.scss';
import { Link } from 'react-router-dom';

function GalleryPhoto({ doc }) {
  const { title, price, description, url, id } = doc;
  let shortenDescription;
  const limitDescription = () => {
    const descriptionWordArray = description.split(' ', 16);
    console.log(descriptionWordArray);
    shortenDescription = descriptionWordArray;
    if (descriptionWordArray.length === 16) {
      shortenDescription =
        descriptionWordArray.reduce((words, word) => words + ' ' + word) +
        '...';
    }
  };
  limitDescription();

  return (
    <Link to={'/Art/' + id}>
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
