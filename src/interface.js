const userInterface = (() => {
  const searchForm = () => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const searchBtn = document.createElement('div');

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
    imageDesc.setAttribute('id', 'img-desc');

    imageCont.append(weatherImg, imageDesc);

    return imageCont;
  };

  const tempCont = () => {
    const tempCont = document.createElement('div');
    const temp = document.createElement('p');
    const tempMax = document.createElement('p');
    const tempMin = document.createElement('p');

    temp.setAttribute('id', 'temp');
    tempMax.setAttribute('id', 'temp-max');
    tempMin.setAttribute('id', 'temp-min');

    tempCont.append(temp, tempMax, tempMin);

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

  return { loadUI };
})();

export default userInterface;
