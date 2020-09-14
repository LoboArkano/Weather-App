import getWeather from './controller';

const app = (() => {
  const start = () => {
    getWeather();
  };

  return { start };
})();

export default app;
