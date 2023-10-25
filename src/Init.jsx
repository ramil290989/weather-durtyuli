import React from 'react';
import initI18n from './initI18n.js';
import App from './App.jsx';

const Init = async () => {
  await initI18n();

  return (
    <>
      <App />
    </>
  )
};

export default Init;
