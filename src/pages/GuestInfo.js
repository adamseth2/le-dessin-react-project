import React from 'react';
import GuestInfoInput from '../components/GuestInfoInput';
import GuestUpload from './GuestUpload';
import DarkenBackdrop from '../components/DarkenBackdrop';

function GuestInfo() {
  return (
    <React.Fragment>
      <GuestUpload />
      <DarkenBackdrop />
      <GuestInfoInput />
    </React.Fragment>
  );
}

export default GuestInfo;
