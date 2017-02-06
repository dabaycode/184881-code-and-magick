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

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = wizardCoatColors[
    Math.floor(Math.random() * wizardCoatColors.length)
  ];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizardEyesColors[
    Math.floor(Math.random() * wizardEyesColors.length)
  ];
});

setupFireball.addEventListener('click', function () {
  setupFireball.style.background = wizardCoatColors[
    Math.floor(Math.random() * fireballColors.length)
  ];
});
