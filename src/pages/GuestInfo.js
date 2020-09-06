import React, { useState } from 'react';
import GuestInfoInput from '../components/GuestInfoInput';
import GuestUpload from './GuestUpload';
import DarkenBackdrop from '../components/DarkenBackdrop';

function GuestInfo({ name, setName }) {
  return (
    <React.Fragment>
      <GuestUpload />
      <DarkenBackdrop />
      <GuestInfoInput name={name} setName={setName} />
    </React.Fragment>
  );
}

export default GuestInfo;
