'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

var i = 1;
var j = 1;
var k = 1;

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = wizardCoatColors[i];
  if (i < wizardCoatColors.length - 1) {
    i++;
  } else {
    i = 0;
  }
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizardEyesColors[j];
  if (j < wizardEyesColors.length - 1) {
    j++;
  } else {
    j = 0;
  }
});

setupFireball.addEventListener('click', function () {
  setupFireball.style.background = fireballColors[k];
  if (k < fireballColors.length - 1) {
    k++;
  } else {
    k = 0;
  }
});
