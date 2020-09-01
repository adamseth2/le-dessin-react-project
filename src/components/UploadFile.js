import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import '../scss/UploadFile.scss';
function UploadFile({ file, setFile, submitButtonPressed }) {
  const [error, setError] = useState(null);

  const changeFile = e => {
    let selected = e.target.files[0];
    console.log(selected);
    const acceptableFileTypes = ['image/png', 'image/jpeg'];
    if (selected && acceptableFileTypes.includes(selected.type)) {
      setFile(selected);
      setError(null);
      console.log(error);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  return (
    <div id='upload-file'>
      <div className='file-upload-container'>
        <input
          id='file-upload'
          type='file'
          onChange={changeFile}
          accept='.png, .jpeg, .jpg'
        />
        <label htmlFor='file-upload' className='fake-file-upload'>
          Upload File
        </label>
      </div>
      <div className='output'>
        {error && <h3 className='error'> {error} </h3>}
        {file && <h3 className='file'> {file.name} </h3>}
        {!file && submitButtonPressed && (
          <h3 className='input-valid'>
            <i
              className='fa fa-exclamation-triangle'
              // style={{ display: 'block' }}
            />{' '}
            Enter Valid file
          </h3>
        )}
      </div>
    </div>
  );
}

export default UploadFile;
