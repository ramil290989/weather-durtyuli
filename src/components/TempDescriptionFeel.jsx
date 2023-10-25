import React from 'react';
import getWeatherIcon from '../utils/weatherIcoGetter.js';
import tempIco from '../img/icons/ic_temp.svg';

const TempDescriptionFeel = ({
  tempNow,
  iconName,
  weatherDescription,
  tempFeel,
}) => {
  const weatherIcon = getWeatherIcon(iconName);
  return (
    <div className="flex flex-col m-2 gap-4 place-content-center sm:flex-row">
      <div className="flex flex-row place-content-center">
        <img className="h-16 w-16" src={tempIco} alt="temp" />
        <p className="text-6xl">{tempNow}</p>
        <img className="h-16 w-16" src={weatherIcon} alt="weatherIcon" />
      </div>
      <div className="m-auto sm:m-0">
        <p className="text-2xl">{weatherDescription}</p>
        <p className="text-2xl">{tempFeel}</p>
      </div>
    </div>
  );
};

export default TempDescriptionFeel;
