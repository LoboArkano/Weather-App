import apiWeather from './apiWeather';
import userInterface from './interface';

const searchEvent = () => {
  const searchBtn = document.getElementById('search');

  searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const input = document.getElementById('input-city');

    userInterface.render(await apiWeather.getData(input.value));
  });
};

const getWeather = async () => {
  userInterface.loadUI();
  userInterface.render(await apiWeather.getData('guadalajara'));
  searchEvent();
};

export default getWeather;
