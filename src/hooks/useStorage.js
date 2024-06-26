import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../firebase/config';

import { collection, doc, getDoc } from '@firebase/firestore';

const useStorage = (name, file, title, price, dimension, description) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    console.log('File name is ' + file.name);
    const collectionRef = collection('images');

    storageRef.put(file).on(
      'state_changed',
      snap => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      err => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdOn = timestamp();
        collectionRef
          .add({
            name,
            title,
            price,
            dimension,
            description,
            url,
            createdOn,
          })
          .then(docRef => {
            setId(docRef.id);
          });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error, id };
};

export default useStorage;
