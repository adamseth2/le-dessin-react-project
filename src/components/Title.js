import React, { useState, useEffect } from 'react';
import { title } from '../scss/Title.module.scss';

function Title() {
  const [kanyeWestQuote, setKanyeWestQuote] = useState(null);
  const [appropriateQuote, setAppropriateQuote] = useState(false);
  const kanyeWestApi = () => {
    fetch('https://api.kanye.rest')
      .then(res => res.json())
      .then(data => setKanyeWestQuote(data.quote))
      .then(() => console.log(kanyeWestQuote));
  };
  useEffect(() => {
    kanyeWestApi();
  }, []);
  const checkIfApporitate = () => {
    const inappropriateWords = ['porn', 'fuck', 'shit', 'f#%k', 'sex'];
    let kanyeWestQuoteArray = kanyeWestQuote.split(' ');
    for (let inappropriateWord of inappropriateWords) {
      if (kanyeWestQuoteArray.indexOf(inappropriateWord) !== -1) {
        return false;
      }
    }
    return true;
  };
  useEffect(() => {
    console.log('bobbbdadadadadadwe');
    if (kanyeWestQuote && !checkIfApporitate()) {
      console.log('this quote is not apporiate');
      kanyeWestApi();
    } else setAppropriateQuote(true);
  }, [kanyeWestQuote]);
  return (
    <div className={title}>
      {appropriateQuote && (
        <h2 className='kanye-west-quote'>{kanyeWestQuote}</h2>
      )}
      <p>-Kanye West</p>
    </div>
  );
}

export default Title;
