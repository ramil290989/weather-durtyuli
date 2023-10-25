import React from 'react';

import windIco from '../img/icons/ic_wind.svg';
import humidityIco from '../img/icons/ic_humidity.svg';
import pressureIco from '../img/icons/ic_pressure.svg';

const WindHumidityPressure = ({
  windSpeed,
  windDirection,
  humidity,
  pressure,
}) => {
  return (
    <div className="flex flex-col mt-8 place-content-center gap-y-2 sm:flex-row sm:gap-x-16">
      <div className="flex flex-row m-auto w-64 sm:m-0 sm:w-auto">
        <img className="w-8 h-8" src={windIco} alt="wind" />
        <p className="text-xl text-center ml-2">{windSpeed}</p>
        <p className="text-xl ml-2">{windDirection}</p>
      </div>
      <div className="flex flex-row m-auto w-64 sm:m-0 sm:w-auto">
        <img className="w-8 h-8" src={humidityIco} alt="humidity" />
        <p className="text-xl ml-2">{humidity}</p>
      </div>
      <div className="flex flex-row m-auto w-64 sm:m-0 sm:w-auto">
        <img className="w-8 h-8" src={pressureIco} alt="pressure" />
        <p className="text-xl ml-2">{pressure}</p>
      </div>
    </div>
  );
};

export default WindHumidityPressure;
