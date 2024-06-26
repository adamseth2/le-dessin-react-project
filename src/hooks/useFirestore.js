import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
import { collection, getDocs } from '@firebase/firestore';
const useFirestore = collectionName => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function grabImages() {
      const documents = await getDocs(
        collection(projectFirestore, collectionName)
      );
      let temp = [];
      documents.forEach(doc => {
        temp.push({ ...doc.data(), id: doc.id });
      });
      setDocs(temp);
    }
    grabImages();
    //old firebase code
    // const unsub = projectFirestore
    //   .collection(collection)
    //   .orderBy('createdOn', 'desc')
    //   .onSnapshot(snap => {
    //     let documents = [];
    //     snap.forEach(doc => {
    //       documents.push({ ...doc.data(), id: doc.id });
    //     });
    //     setDocs(documents);
    //   });
    // return () => unsub();
  }, [collectionName]);
  return { docs };
};
export default useFirestore;
