import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('https://type.fit/api/quotes')
      .then(response => {
        const randomQuote = response.data[Math.floor(Math.random() * response.data.length)];
        setQuote(`${randomQuote.text} `);
      });
  }, []);

  return <div>{quote}</div>;
}

export default Quote;
