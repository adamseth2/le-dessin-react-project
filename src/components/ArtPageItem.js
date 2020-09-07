import React, { useState } from 'react';
import '../scss/ArtPageItem.scss';
import { timestamp } from '../firebase/config';

const ArtPageItem = ({ doc, setClickedPhoto }) => {
  let name, title, price, dimension, description, url, createdOn;
  const convertDimension = () => {
    console.log(dimension);
    const { firstDimension, secondDimension, unitOfMeasure } = dimension;
    dimension = `${firstDimension} x ${secondDimension} ${unitOfMeasure}`;
  };
  const convertDate = seconds => {
    const currentTime = timestamp().seconds * 1000;
    let secondCounter = seconds;
    createdOn = new Date(seconds).toLocaleDateString('en-US');
    console.log(createdOn);
    console.log(createdOn.split('/'));
    const [createdOnMonth, createdOnDay, createdOnYear] = createdOn.split('/');
  };
  const clickedPhotoHandler = () => {
    setClickedPhoto(url);
  };

  if (doc) {
    ({ name, title, price, dimension, description, url, createdOn } = doc);
    convertDimension();
    convertDate(createdOn.seconds * 1000);
  }
  return (
    <div id='art-page-item'>
      <div className='background'>
        <h2 className='title'>{title}</h2>
        <img
          className='art-item-photo'
          src={url}
          alt=''
          onClick={clickedPhotoHandler}
        />
        <div className='column-container'>
          <h3 className='price'>{price}</h3>
          <p className='artist'>{name}</p>
        </div>
      </div>
      <p className='description'>{description}</p>
      <h1 className='infomation-title'>Infomation</h1>
      <table className='infomation'>
        <tbody>
          <tr>
            <th>Dimension:</th>
            <th>{dimension}</th>
          </tr>
          <tr>
            <th>Created on:</th>
            <th>{createdOn}</th>
          </tr>
        </tbody>
      </table>
      <button
        className='buy-now'
        onClick={() => alert('This feature is not yet implemented ')}>
        <i className='fa fa-shopping-cart'></i> Buy now
      </button>
    </div>
  );
};

export default ArtPageItem;
