import apiWeather from './apiWeather';
import userInterface from './interface';

const searchEvent = () => {
  const searchBtn = document.getElementById('search');

  searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const input = document.getElementById('input-city');
    const toggleBtn = document.getElementById('toggle-temp');

    toggleBtn.name = 'c';
    userInterface.render(await apiWeather.getData(input.value));
  });
};

const toggleTemp = (tempArr, tempUnit) => {
  let newTemp = 0;

  tempArr.forEach((temp) => {
    if (tempUnit === 'c') {
      newTemp = ((parseInt(temp.innerHTML, 10) - 32) * (5 / 9)).toFixed(0);
      temp.innerHTML = `${newTemp}°C`;
    } else {
      newTemp = ((parseInt(temp.innerHTML, 10) * 1.8) + 32).toFixed(0);
      temp.innerHTML = `${newTemp}°F`;
    }
  });
};

const toggleEvent = () => {
  const toggleBtn = document.getElementById('toggle-temp');

  toggleBtn.addEventListener('change', (e) => {
    e.preventDefault();

    const temp = document.getElementById('temp');
    const tempMax = document.getElementById('temp-max');
    const tempMin = document.getElementById('temp-min');

    if (toggleBtn.name === 'c') {
      toggleBtn.name = 'f';
    } else {
      toggleBtn.name = 'c';
    }

    toggleTemp([temp, tempMax, tempMin], toggleBtn.name);
  });
};

const getWeather = async () => {
  userInterface.loadUI();
  userInterface.render(await apiWeather.getData('guadalajara'));
  searchEvent();
  toggleEvent();
};

export default getWeather;
