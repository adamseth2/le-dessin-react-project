import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import UploadTitle from '../components/UploadTitle';
import UploadInfo from '../components/UploadInfo';
import UploadPayment from '../components/UploadPayment';
import UploadPaymentTitle from '../components/UploadPaymentTitle';
import UploadFile from '../components/UploadFile';

import '../scss/pages/GuestUpload.scss';
import ProgressBar from '../components/ProgressBar';
import DarkenBackdrop from '../components/DarkenBackdrop';

function GuestUpload() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [dimension, setDimension] = useState({
    firstDimension: null,
    secondDimension: null,
    unitOfMeasure: 'in',
  });
  const [description, setDescription] = useState(null);
  const [readyToUpload, setReadyToUpload] = useState(null);
  const [notValidToSubmit, setNotValidToSubmit] = useState(false);
  const [validTitle, setValidTitle] = useState(false);
  const [validPrice, setValidPrice] = useState(false);
  const [validDimension, setValidDimension] = useState(false);
  const [validDescription, setValidDescription] = useState(false);
  const [submitButtonPressed, setSubmitButtonPressed] = useState(false);

  const name = 'Guest ' + window.location.pathname.substring(7);
  console.log(dimension);
  console.log('dimension is ' + validDimension);
  useEffect(() => {}, [submitButtonPressed]);

  const submitHandler = e => {
    e.preventDefault();
    if (
      file &&
      validTitle &&
      validPrice &&
      validDimension &&
      validDescription
    ) {
      console.log(file);
      setReadyToUpload(true);
    } else setNotValidToSubmit(true);

    setSubmitButtonPressed(true);
    // if (notValidToSubmit) setReadyToUpload(true);
  };
  return (
    <React.Fragment>
      <Nav />
      <div id='guest-upload'>
        <UploadTitle />
        <UploadFile
          file={file}
          setFile={setFile}
          submitButtonPressed={submitButtonPressed}
        />
        <UploadInfo
          dimension={dimension}
          setTitle={setTitle}
          setPrice={setPrice}
          setDimension={setDimension}
          setDescription={setDescription}
          validTitle={validTitle}
          validPrice={validPrice}
          validDimension={validDimension}
          validDescription={validDescription}
          setValidTitle={setValidTitle}
          setValidPrice={setValidPrice}
          setValidDimension={setValidDimension}
          setValidDescription={setValidDescription}
          submitButtonPressed={submitButtonPressed}
        />
        <UploadPaymentTitle />
        <UploadPayment />
        <input type='submit' value='Complete' onClick={submitHandler} />
      </div>
      {readyToUpload && (
        <React.Fragment>
          <ProgressBar
            name={name}
            file={file}
            title={title}
            price={price}
            dimension={dimension}
            description={description}
            setFile={setFile}
            setReadyToUpload={setReadyToUpload}
          />
          <DarkenBackdrop />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default GuestUpload;
