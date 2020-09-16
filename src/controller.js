import apiWeather from './apiWeather';

const getWeather = () => {
  apiWeather.getData('guadalajara');
};

export default getWeather;
