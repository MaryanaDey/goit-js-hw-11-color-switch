const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  refs = {
      body: document.querySelector('body'),
      buttonStart: document.querySelector('[data-action=start]'),
      buttonStop: document.querySelector('[data-action=stop]'),
  }

  refs.buttonStart.addEventListener('click', onStartButton);
  refs.buttonStop.addEventListener('click', onStopButton);

  let intervalId;

  function onStartButton(e) {
      intervalId = setInterval(() => {
          refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
      }, 1000); 
      refs.buttonStart.disabled = true;
  }

  function onStopButton(e) {
      clearInterval(intervalId);
      refs.buttonStart = false;
  }