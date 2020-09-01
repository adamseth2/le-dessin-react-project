import React from 'react';
import '../scss/Modal.scss';
import DarkenBackdrop from './DarkenBackdrop';

function Modal({ clickedPhoto, setClickedPhoto }) {
  const clickHandler = e => {
    if (e.target.classList.contains('darken-backdrop')) {
      setClickedPhoto(null);
    }
  };
  return (
    <div className='modal' onClick={clickHandler}>
      <DarkenBackdrop />
      <img src={clickedPhoto} alt='enlarged Photo' />
    </div>
  );
}

export default Modal;
