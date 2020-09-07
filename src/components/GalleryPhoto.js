import React, { useState, useEffect } from 'react';
import '../scss/GalleryPhoto.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function GalleryPhoto({ doc, setClickedGalleryPhoto, photoNumber }) {
  const { title, price, description, url, id } = doc;
  const [shortenDescription, setShortenDescription] = useState(false);
  const limitDescription = () => {
    const descriptionWordArray = description.split(' ', 16);
    console.log(descriptionWordArray);
    setShortenDescription(description);
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
      <motion.div
        className='gallery-photo'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 + 0.6 * photoNumber }}>
        <img src={url} alt='Artwork' />
        <div className='caption-box'>
          <h3>{title}</h3>
          <p className='description'>{shortenDescription}</p>
          <p className='price'>{price}</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default GalleryPhoto;
