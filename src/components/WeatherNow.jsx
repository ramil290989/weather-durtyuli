import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import getDate from '../utils/getDate.js';
import WeatherDataContext from '../context/WeatherDataContext.jsx';
import Header from './Header.jsx';
import TempDescriptionFeel from './TempDescriptionFeel.jsx';
import WindHumidityPressure from './WindHumidityPressure.jsx';

const WeaterNow = () => {
  const { t } = useTranslation();
  const { data } = useContext(WeatherDataContext);
  const weatherNow = data.fact;
  const city = t('city');
  const date = getDate(data.now);
  const iconName = weatherNow.icon;
  const tempNow = weatherNow.temp > 0
    ? `+${weatherNow.temp}°`
    : `${weatherNow.temp}°`;
  const windSpeed = `${weatherNow.wind_speed}${t('wind.speed')}`;
  const windDirection = t(`wind.direction.${weatherNow.wind_dir}`);
  const weatherDescription = t(`weatherDescription.${weatherNow.condition}`);
  const tempFeel = weatherNow.feels_like > 0
    ? `${t('temp.feel')} +${weatherNow.feels_like}°`
    : `${t('temp.feel')} ${weatherNow.feels_like}°`;
  const humidity = `${weatherNow.humidity}%`;
  const pressure = `${weatherNow.pressure_mm} ${t('pressure')}`
  return (
    <div>
      <div className="bg-indigo-900 mx-auto text-gray-200 py-4">
        <Header
          city={city}
          date={date}
        />
        <TempDescriptionFeel
          tempNow={tempNow}
          iconName={iconName}
          weatherDescription={weatherDescription}
          tempFeel={tempFeel}
        />
        <WindHumidityPressure
          windSpeed={windSpeed}
          windDirection={windDirection}
          humidity={humidity}
          pressure={pressure}
        />
      </div>
    </div>
  );
};

export default WeaterNow;
