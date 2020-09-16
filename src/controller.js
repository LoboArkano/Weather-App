import apiWeather from './apiWeather';
import userInterface from './interface';

const getWeather = async () => {
  userInterface.loadUI();
  userInterface.render(await apiWeather.getData('guadalajara'));
};

export default getWeather;
