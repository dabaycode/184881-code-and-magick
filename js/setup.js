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

/**
 * anonymous function - Возвращает индекс рандомного элемента массива.
 *
 * @param  {array} colorsArray - входной массив.
 * @return {number} - индекс ранжомного элемента массива.
 */
var randomColorIndex = function (colorsArray) {
  return (Math.floor(Math.random() * colorsArray.length));
};


/**
 * randomColor - меняет фоновый цвет элемента.
 *
 * @param  {object} changedNode - входной элемент.
 * @param  {array} colorsArray - входной массив цветов.
 * @param  {string} prop - значение изменяего свойства.
 * @param  {object} event - принимает событие click и связанные объекты.
 * @return {undefined} - выход из функции.
 */
function randomColor(changedNode, colorsArray, prop, event) {
  if (prop === 'fill') {
    changedNode.style.fill = colorsArray[randomColorIndex(colorsArray)];
  }
  if (prop === 'background') {
    changedNode.style.background = colorsArray[randomColorIndex(colorsArray)];
  }

  return;
}


/**
 * anonymous function - открывает окно персонажа. Удаляет класс invisible.
 *
 */
setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});


/**
 * anonymous function - закрывает окно персонажа. Добавляет класс invisible.
 *
 * @return {type}  description
 */
setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});


/**
 * Вызывает функцию randomColor при событии click на элемент с #wizardCoat.
 */
wizardCoat.addEventListener('click', randomColor.bind(null, wizardCoat, wizardCoatColors, 'fill'));

/**
 * Вызывает функцию randomColor при событии click на элемент с #wizardEyes.
 */
wizardEyes.addEventListener('click', randomColor.bind(null, wizardEyes, wizardEyesColors, 'fill'));

/**
 * Вызывает функцию randomColor при событии click на элемент c .setup-fireball-wrap
 */
setupFireball.addEventListener('click', randomColor.bind(null, setupFireball, fireballColors, 'background'));
