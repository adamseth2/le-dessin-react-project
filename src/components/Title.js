import React, { useState, useEffect } from 'react';
import { title } from '../scss/Title.module.scss';

function Title() {
  const [kanyeWestQuote, setKanyeWestQuote] = useState(null);
  const kanyeWestApi = () => {
    let notAppropriate;
    fetch('https://api.kanye.rest')
      .then(res => res.json())
      .then(data => {
        setKanyeWestQuote(data.quote);
        console.log('bobbbbb');
      })
      .then(() => console.log(kanyeWestQuote));
  };
  useEffect(() => {
    let kanyeWestQuoteNotAppropriate;
    while (kanyeWestQuoteNotAppropriate) {
      // kanyeWest Api
    }
  }, []);
  return (
    <div className={title}>
      <h2 className='kanye-west-quote'>{kanyeWestQuote}</h2>
      <p>-Kanye West</p>
    </div>
  );
}

export default Title;
