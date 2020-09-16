const userInterface = (() => {
  const searchForm = () => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const searchBtn = document.createElement('div');

    searchBtn.innerHTML = 'SEACRH';

    form.append(input, searchBtn);

    return form;
  };

  const loadUI = (dataWeather) => {
    const content = document.getElementById('content');

    content.append(searchForm());
  };

  return { loadUI };
})();

export default userInterface;
