const userInterface = (() => {
  const searchForm = () => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const searchBtn = document.createElement('div');

    input.setAttribute('id', 'input-city');
    input.setAttribute('type', 'text');
    searchBtn.setAttribute('id', 'search');
    searchBtn.innerHTML = 'SEACRH';

    form.append(input, searchBtn);

    return form;
  };

  const cityInfo = () => {
    const cityInfo = document.createElement('div');

    cityInfo.setAttribute('id', 'cityInfo');

    return cityInfo;
  };

  const weatherImg = () => {
    const imageCont = document.createElement('div');
    const weatherImg = document.createElement('img');
    const imageDesc = document.createElement('p');

    weatherImg.setAttribute('id', 'weather-img');
    weatherImg.setAttribute('src', '#');
    imageDesc.setAttribute('id', 'img-desc');

    imageCont.append(weatherImg, imageDesc);

    return imageCont;
  };

  const toggleTemp = () => {
    const toggleCont = document.createElement('div');
    const toggleBtn = document.createElement('input');

    toggleCont.classList.add('toogle-cont');
    toggleBtn.setAttribute('type', 'checkbox');
    toggleBtn.setAttribute('name', 'c');
    toggleBtn.setAttribute('value', 'c');

    toggleCont.appendChild(toggleBtn);

    return toggleCont;
  };

  const tempCont = () => {
    const tempCont = document.createElement('div');
    const temp = document.createElement('p');
    const tempMax = document.createElement('p');
    const tempMin = document.createElement('p');
    const toggleBtn = toggleTemp();

    temp.setAttribute('id', 'temp');
    tempMax.setAttribute('id', 'temp-max');
    tempMin.setAttribute('id', 'temp-min');

    tempCont.append(temp, toggleBtn, tempMax, tempMin);

    return tempCont;
  };

  const windCont = () => {
    const windCont = document.createElement('div');
    const speed = document.createElement('p');
    const deg = document.createElement('p');

    speed.setAttribute('id', 'speed');
    deg.setAttribute('id', 'deg');

    windCont.append(speed, deg);

    return windCont;
  };

  const atmCont = () => {
    const atmCont = document.createElement('div');
    const pressure = document.createElement('p');
    const humidity = document.createElement('p');

    pressure.setAttribute('id', 'pressure');
    humidity.setAttribute('id', 'humidity');

    atmCont.append(pressure, humidity);

    return atmCont;
  };

  const sunCont = () => {
    const sunCont = document.createElement('div');
    const sunrise = document.createElement('p');
    const sunset = document.createElement('p');

    sunrise.setAttribute('id', 'sunrise');
    sunset.setAttribute('id', 'sunset');

    sunCont.append(sunrise, sunset);

    return sunCont;
  };

  const locationCont = () => {
    const location = document.createElement('div');
    const lon = document.createElement('p');
    const lat = document.createElement('p');

    lon.setAttribute('id', 'lon');
    lat.setAttribute('id', 'lat');

    location.append(lon, lat);

    return location;
  };

  const weatherInfo = () => {
    const weatherInfo = document.createElement('div');

    weatherInfo.append(
      cityInfo(),
      weatherImg(),
      tempCont(),
      windCont(),
      atmCont(),
      sunCont(),
      locationCont(),
    );

    return weatherInfo;
  };

  const weatherCont = () => {
    const weatherCont = document.createElement('main');

    weatherCont.append(weatherInfo());

    return weatherCont;
  };

  const loadUI = () => {
    const content = document.getElementById('content');

    content.append(searchForm(), weatherCont());
  };

  const render = (weather) => {
    const cityInfo = document.getElementById('cityInfo');
    const weatherImg = document.getElementById('weather-img');
    const imdDesc = document.getElementById('img-desc');
    const temp = document.getElementById('temp');
    const tempMax = document.getElementById('temp-max');
    const tempMin = document.getElementById('temp-min');
    const speed = document.getElementById('speed');
    const deg = document.getElementById('deg');
    const pressure = document.getElementById('pressure');
    const humidity = document.getElementById('humidity');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    const lon = document.getElementById('lon');
    const lat = document.getElementById('lat');

    cityInfo.innerHTML = `${weather.get('city')}, ${weather.get('country')}`;
    weatherImg.src = `http://openweathermap.org/img/w/${weather.get('image').icon}.png`;
    imdDesc.innerHTML = weather.get('image').main;
    temp.innerHTML = `${weather.get('temp').toFixed(1)}°C`;
    tempMax.innerHTML = `max: ${weather.get('temp_max').toFixed(1)}°C`;
    tempMin.innerHTML = `min: ${weather.get('temp_min').toFixed(1)}°C`;
    speed.innerHTML = `${weather.get('speed')} m/s`;
    deg.innerHTML = `${weather.get('deg')}°`;
    pressure.innerHTML = `${weather.get('pressure')}hPa`;
    humidity.innerHTML = `${weather.get('humidity')}%`;
    sunrise.innerHTML = `sunrise: ${weather.get('sunrise')}`;
    sunset.innerHTML = `sunset: ${weather.get('sunset')}`;
    lon.innerHTML = `longitude: ${weather.get('lon')}`;
    lat.innerHTML = `latitude: ${weather.get('lat')}`;
  };

  return { loadUI, render };
})();

export default userInterface;
