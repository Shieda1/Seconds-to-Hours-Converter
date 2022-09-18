// https://www.omnicalculator.com/conversion/seconds-to-hours-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const hoursRadio = document.getElementById('hoursRadio');
const secondsRadio = document.getElementById('secondsRadio');

let hours;
let seconds = v; 

// labels of the inpust
const variable = document.getElementById('variable');

hoursRadio.addEventListener('click', function() {
  variable.textContent = 'Seconds';
  seconds = v;
  result.textContent = '';
});

secondsRadio.addEventListener('click', function() {
  variable.textContent = 'Hours';
  hours = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(hoursRadio.checked)
    result.textContent = `Hours = ${computehours().toFixed(5)}`;

  else if(secondsRadio.checked)
    result.textContent = `Seconds = ${computeseconds().toFixed(5)}`;
})

// calculation

function computehours() {
  return Number(seconds.value) / 36000;
}

function computeseconds() {
  return Number(hours.value) * 36000;
}