import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

// eslint-disable-next-line
const Home = () => {
  const [input, setInput] = useState('');

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSeach = () => {};

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
