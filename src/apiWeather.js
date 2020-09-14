const apiWeather = (() => {
  const localTime = (time) => {
    const date = new Date(time * 1000);
    const timestr = date.toLocaleTimeString();

    return timestr;
  };

  const getData = async (city) => {
    const weather = new Map();

    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=efb1c5442d9f74c1c186780238e45f35`, { mode: 'cors' });
      const apiData = await response.json();

      weather.set('lon', apiData.coord.lon);
      weather.set('lat', apiData.coord.lat);
      weather.set('image', apiData.weather[0]);
      weather.set('temo', apiData.main.temp - 273.15);
      weather.set('temp_min', apiData.main.temp_min - 273.15);
      weather.set('temp_max', apiData.main.temp_max - 273.15);
      weather.set('pressure', apiData.main.pressure);
      weather.set('humidity', apiData.main.humidity);
      weather.set('speed', apiData.wind.speed);
      weather.set('deg', apiData.wind.deg);
      weather.set('country', apiData.sys.country);
      weather.set('sunrise', localTime(apiData.sys.sunrise));
      weather.set('sunset', localTime(apiData.sys.sunset));
    } catch (error) {
      alert('error');
    }

    return weather;
  };

  return { getData };
})();

export default apiWeather;
