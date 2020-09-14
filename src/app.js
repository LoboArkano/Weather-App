import getWeather from './controller';

const app = (() => {
  const start = () => {
    getWeather('guadalajara');
  };

  return { start };
})();

export default app;
