const apiWeather = (() => {
  const getData = async (city) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=efb1c5442d9f74c1c186780238e45f35`, { mode: 'cors' });
      const apiData = await response.json();

      console.log(apiData.coord.lon);
      console.log(apiData.coord.lat);
      console.log(apiData.weather[0]);
      console.log(apiData.main.temp);
      console.log(apiData.main.temp_min);
      console.log(apiData.main.temp_max);
      console.log(apiData.main.pressure);
      console.log(apiData.main.humidity);
      console.log(apiData.wind.speed);
      console.log(apiData.wind.deg);
      console.log(apiData.sys.country);
      console.log(apiData.sys.sunrise);
      console.log(apiData.sys.sunset);
    } catch (error) {
      alert('error');
    }
  };

  return { getData };
})();

export default apiWeather;
