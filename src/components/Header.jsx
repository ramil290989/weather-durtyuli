import React from 'react';
import logo from '../img/logo.svg';

const Header = ({ date, city }) => {
  return (
    <div>
      <img className="mx-auto pt-2 pb-2 sm:pb-4" src={logo} alt="logo" />
      <p className="text-4xl text-center sm:text-5xl">{city}</p>
      <p className="text-base pt-2 text-center sm:text-2xl sm:mb-8">{date}</p>
    </div>
  );
};

export default Header;
