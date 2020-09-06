import React from 'react';
import '../scss/UploadInfo.scss';

function UploadInfo({
  dimension,
  setTitle,
  setPrice,
  setDimension,
  setDescription,
  validTitle,
  validPrice,
  validDimension,
  validDescription,
  setValidTitle,
  setValidPrice,
  setValidDimension,
  setValidDescription,
  submitButtonPressed,
}) {
  const titleHandler = e => {
    if (e.target.value) setValidTitle(true);
    else setValidTitle(false);
    console.log(validTitle);
    setTitle(e.target.value);
  };
  const priceHandler = e => {
    if (e.target.value) setValidPrice(true);
    else setValidPrice(false);
    setPrice(e.target.value);
  };
  const dimensionHandler = e => {
    const tempDimension = { ...dimension, [e.target.name]: e.target.value };
    setDimension(tempDimension);
    console.log(dimension);
    console.log(Object.values(tempDimension).every(value => value));
    if (Object.values(tempDimension).every(value => value))
      setValidDimension(true);
    else setValidDimension(false);
  };
  const descriptionHandler = e => {
    if (e.target.value) setValidDescription(true);
    else setValidDescription(false);
    setDescription(e.target.value);
  };
  let titleNotValidStyle = {};
  let priceNotValidStyle = {};
  let dimensionNotValidStyle = {};
  let descriptionNotValidStyle = {};

  //Check to return style
  if (!validTitle && submitButtonPressed)
    titleNotValidStyle = { outline: 'red solid 1px' };
  else titleNotValidStyle = {};

  if (!validPrice && submitButtonPressed)
    priceNotValidStyle = { outline: 'red solid 1px' };
  else priceNotValidStyle = {};

  if (!validDimension && submitButtonPressed)
    dimensionNotValidStyle = { outline: 'red solid 1px' };
  else dimensionNotValidStyle = {};

  if (!validDescription && submitButtonPressed)
    descriptionNotValidStyle = { outline: 'red solid 1px' };
  else descriptionNotValidStyle = {};

  // if (!validTitle && submitButtonPressed)
  // titleNotValidStyle = { outline: 'red solid 2px' };
  // else titleNotValidStyle = {};

  return (
    <div id='upload-info'>
      {/* Title */}
      <div className='input-container big-container'>
        <label htmlFor='title' className='input-header'>
          Title
        </label>
        <input
          type='text'
          id='title'
          autoComplete='off'
          style={titleNotValidStyle}
          onChange={titleHandler}></input>
        {!validTitle && submitButtonPressed && (
          <label htmlFor='title' className='input-valid'>
            <i className='fa fa-exclamation-triangle'></i> Enter Title
          </label>
        )}
      </div>
      {/* Price */}
      <div className='two-row-container'>
        <div className='input-container small-container'>
          <label htmlFor='price' className='input-header'>
            Price
          </label>
          <div id='price-container'>
            <div id='currency-symbol'>$</div>
            <input
              type='number'
              id='price'
              min='1'
              step='any'
              max='1000'
              autoComplete='off'
              placeholder='0.00'
              style={priceNotValidStyle}
              onChange={priceHandler}
            />
          </div>
          {!validPrice && submitButtonPressed && (
            <label htmlFor='price' className='input-valid'>
              <i className='fa fa-exclamation-triangle'></i> Enter Price
            </label>
          )}
        </div>
        <div className='input-container medium-container'>
          <label htmlFor='first-dimension' className='input-header'>
            Dimension
          </label>
          <div id='dimension-container'>
            <input
              type='number'
              id='first-dimension'
              name='firstDimension'
              min='1'
              step='any'
              max='1000'
              autoComplete='off'
              style={dimensionNotValidStyle}
              onChange={dimensionHandler}
            />{' '}
            <p className='x'>x</p>
            <input
              type='number'
              id='second-dimension'
              name='secondDimension'
              min='1'
              step='any'
              max='1000'
              autoComplete='off'
              style={dimensionNotValidStyle}
              onChange={dimensionHandler}
            />
            <select
              name='unitOfMeasure'
              id='unit-of-measure'
              onChange={dimensionHandler}>
              <option value='px'>px</option>
              <option value='in'>in</option>
              <option value='ft'>ft</option>
              <option value='cm'>cm</option>
              <option value='m'>m</option>
            </select>
            {!validDimension && submitButtonPressed && (
              <label htmlFor='price' className='input-valid'>
                <i className='fa fa-exclamation-triangle'></i> Enter Dimension
              </label>
            )}
          </div>
        </div>
      </div>
      {/* Description  */}
      <div className='input-container'>
        <label htmlFor='description' className='input-header'>
          Description
        </label>
        <textarea
          id='description'
          style={descriptionNotValidStyle}
          onChange={descriptionHandler}></textarea>
        {!validDescription && submitButtonPressed && (
          <label htmlFor='description' className='input-valid'>
            <i className='fa fa-exclamation-triangle'></i> Enter Description
          </label>
        )}
      </div>
    </div>
  );
}

export default UploadInfo;
