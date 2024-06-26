import React, { useState, useEffect } from 'react';
import '../scss/Title.scss';
import { motion } from 'framer-motion';
function Title() {
  const [kendrickLamarQuote, setKendrickLamarQuote] = useState(null);
  const [appropriateQuote, setAppropriateQuote] = useState(false);
  const kendrickLamarAPI = () => {
    fetch('https://api.kanye.rest')
      .then(res => res.json())
      .then(data => setKendrickLamarQuote(data.quote))
      .then(() => console.log(kendrickLamarQuote));
  };
  useEffect(() => {
    kendrickLamarAPI();
  }, []);
  const checkIfApporitate = () => {
    const inappropriateWords = ['porn', 'fuck', 'shit', 'f#%k', 'sex'];
    let kendrickLamarQuoteArray = kendrickLamarQuote.split(' ');
    for (let inappropriateWord of inappropriateWords) {
      if (kendrickLamarQuoteArray.indexOf(inappropriateWord) !== -1) {
        return false;
      }
    }
    return true;
  };
  useEffect(() => {
    if (kendrickLamarQuote && !checkIfApporitate()) {
      console.log('this quote is not apporiate');
      kendrickLamarAPI();
    } else setAppropriateQuote(true);
  }, [kendrickLamarQuote]);
  return (
    <motion.div
      className='title'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      // transition={{ delay: 0.5 }}
    >
      {appropriateQuote && (
        <h2 className='kanye-west-quote'>{kendrickLamarQuote}</h2>
      )}
      <p>-Kendrick Lamar</p>
    </motion.div>
  );
}

export default Title;
