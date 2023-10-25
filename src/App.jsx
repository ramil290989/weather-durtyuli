import React, { useEffect, useState } from 'react';
import './App.css';
import WeatherDataContext from './context/WeatherDataContext.jsx';
import WeaterNow from './components/WeatherNow.jsx';

const App = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    fetch('https://weatherserver1-b3mjxecp.b4a.run/api')
      .then((response) => response.json())
      .then(({ weatherData, error }) => {
        setData(weatherData);
        setError(error);
      })
      .catch((fetchErr) => {
        setData(null);
        setError(fetchErr.message);
      });
  }, []);
  return (
   <div className="container mx-auto bg-indigo-950">
    <WeatherDataContext.Provider value={{ data }}>
      { data ? <WeaterNow /> : 'Loading' }
      { error && 'ошибка загрузки' }
    </WeatherDataContext.Provider>
   </div>
  );
};

export default App;
