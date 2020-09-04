import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

import '../scss/ProgressBar.scss';
import { useHistory } from 'react-router-dom';

const ProgressBar = ({ name, file, title, price, dimension, description }) => {
  const { progress, id } = useStorage(
    name,
    file,
    title,
    price,
    dimension,
    description
  );
  const history = useHistory();
  useEffect(() => {
    if (id) {
      console.log(id);
      history.push('/Art/' + id);
    }
  }, [id]);

  return (
    <div id='progress-bar'>
      <div id='outer-bar'>
        <p id='uploading-progress'> {Math.round(progress)}%</p>
        <div id='inner-bar' style={{ width: progress + '%' }}>
          {' '}
        </div>
        <p id='uploading-message'>
          {progress !== 100 && "Let's work together"}
          {progress === 100 && 'Done!'}
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
