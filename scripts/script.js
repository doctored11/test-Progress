import ProgressBlock from './progress.js';

const progressElement = document.querySelector('.progress');
const valueInput = document.getElementById('valueInput');
const animateToggle = document.getElementById('animateToggle');
const hideToggle = document.getElementById('hideToggle');

const progress = new ProgressBlock(progressElement);

valueInput.addEventListener('input', () => {
  const value = Math.min(Math.max(0, valueInput.value), 100);
  progress.setValue(value);
});


animateToggle.addEventListener('change', () => {
  progress.setAnimate(animateToggle.checked);
});

hideToggle.addEventListener('change', () => {
  progress.setHidden(hideToggle.checked);
});
