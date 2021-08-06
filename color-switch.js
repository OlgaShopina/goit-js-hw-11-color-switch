const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-action="start"'),
  stop: document.querySelector('button[data-action="stop"'),
}

let colorChange;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener('click', startColorSwitch);
refs.stop.addEventListener('click', stopColorSwitch);

function changeColorBackground(colorsArr) {
  const randomColor = randomIntegerFromInterval(0, colorsArr.length - 1);
  refs.body.style.background = colorsArr[randomColor];
}

function startColorSwitch() {
refs.stop.removeAttribute('disabled');
  refs.start.setAttribute('disabled', true);

colorChange = setInterval(() => {
  changeColorBackground(colors);
 }, 1000);
}

function stopColorSwitch() {
  clearInterval(colorChange);
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', true);
}