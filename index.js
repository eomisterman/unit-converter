/**
 * Global variables
 */
let inputVal = 0;

/**
 * Input elements
 */
const inputNumberEl = document.querySelector('#input-number');
console.log(inputNumberEl.value);
console.log(inputVal);
const convertBtnEl = document.querySelector('#convert-btn');
const convertEl = document.querySelectorAll('.convert-num');
const metersEl = document.querySelector('#meters-output');
const feetEl = document.querySelector('#feet-output');
const litersEl = document.querySelector('#liters-output');
const gallonsEl = document.querySelector('#gallons-output');
const kilogramsEl = document.querySelector('#kilograms-output');
const poundsEl = document.querySelector('#pounds-output');

function init() {
  inputNumberEl.value = inputVal;
  convert();
}

init();

/**
 * Event listeners
 */
inputNumberEl.addEventListener('input', updateInput);
convertBtnEl.addEventListener('click', convert);

function updateInput(e) {
  let input = e.target.value ? e.target.value : 0;
  console.log(input);
  inputVal = Number(input);
}

function convert() {
  let meters = (inputVal * 0.3048).toFixed(3);
  let feet = (inputVal * 3.2808).toFixed(3);
  let liters = (inputVal * 3.7854).toFixed(3);
  let gallons = (inputVal * 0.2642).toFixed(3);
  let kilograms = (inputVal * 0.4536).toFixed(3);
  let pounds = (inputVal * 2.2046).toFixed(3);

  convertEl.forEach(el => el.textContent = inputVal);
  metersEl.textContent = meters;
  feetEl.textContent = feet;
  litersEl.textContent = liters;
  gallonsEl.textContent = gallons;
  kilogramsEl.textContent = kilograms;
  poundsEl.textContent = pounds;
}
