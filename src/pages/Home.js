import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

// eslint-disable-next-line
const Home = () => {
  const [input, setInput] = useState('');

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSeach = () => {
    fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };

  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} value={input} />
      <button type="button" onClick={onSeach}>
        Search
      </button>
    </MainPageLayout>
  );
};

export default Home;
