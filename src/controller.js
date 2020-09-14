import apiWeather from './apiWeather';
import userInterface from './interface';

const getWeather = (city) => {
  userInterface.loadUI(apiWeather.getData(city));
};

export default getWeather;