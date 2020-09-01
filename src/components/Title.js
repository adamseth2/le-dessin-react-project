import React, { useState, useEffect } from 'react';
import { title } from '../scss/Title.module.scss';

function Title() {
  const [kanyeWestQuote, setKanyeWestQuote] = useState(null);
  useEffect(() => {
    fetch('https://api.kanye.rest')
      .then(res => res.json())
      .then(data => setKanyeWestQuote(data.quote))
      .then(() => console.log(kanyeWestQuote));
  }, []);

  return (
    <div className={title}>
      <h2 className='kanye-west-quote'>{kanyeWestQuote}</h2>
      <p>-Kanye West</p>
    </div>
  );
}

export default Title;
