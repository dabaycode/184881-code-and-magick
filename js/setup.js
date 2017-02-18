'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var setupSaveButton = setup.querySelector('.setup-submit');
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
var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

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
 * removeClassAriaHiddenFalse - Удаляет класс у переданного элемента. Устанавливает
 * значение атрибута aria-hidden на false
 *
 * @param  {object} node - DOM - элемент
 * @param  {string} delClass - Класс, которые необходимо удалить
 */
function removeClassAriaHiddenFalse(node, delClass) {
  node.classList.remove(delClass);
  node.setAttribute('aria-hidden', false);
}

/**
 * addClassAriaHidden - Добавляе класс переданному элементу. Устанавливает
 * значение атрибута aria-hidden на true
 *
 * @param  {object} node - DOM - элемент
 * @param  {string} newClass - Класс, которые необходимо добавить
 */
function addClassAriaHidden(node, newClass) {
  node.classList.add(newClass);
  node.setAttribute('aria-hidden', true);
}

/**
 * anonymous function -  при клике, вызывает функцию addClassAriaHidden.
 * Закрывает окно персонажа
 *
 */
setupOpen.addEventListener('click', function () {
  removeClassAriaHiddenFalse(setup, 'invisible');
});

/**
 * anonymous function - при нажатии Enter, вызывает функцию
 * removeClassAriaHiddenFalse. Открывает окно персонажа
 *
 * @return {undefined} - выход из функции
 */
setupOpenIcon.addEventListener('keydown', function () {
  if (event.keyCode === ENTER_KEY_CODE) {
    removeClassAriaHiddenFalse(setup, 'invisible');
  }
});

/**
 * anonymous function -  при клике, вызывает функцию addClassAriaHidden.
 * Закрывает окно персонажа
 *
 * @return {type}  description
 */
setupClose.addEventListener('click', function () {
  addClassAriaHidden(setup, 'invisible');
});

/**
 * anonymous function - при нажатии Enter, вызывает функции addClassAriaHidden.
 * Закрывает окно персонажа
 *
 * @return {undefined} - выход из функции
 */
setupClose.addEventListener('keydown', function () {
  if (event.keyCode === ENTER_KEY_CODE) {
    addClassAriaHidden(setup, 'invisible');
  }
  return;
});

/**
 * anonymous function - при клике, вызывает функцию addClassAriaHidden.
 * Закрывает окно персонажа
 *
 * @return {undefined} - выход из функции
 */
setupSaveButton.addEventListener('click', function () {
  addClassAriaHidden(setup, 'invisible');
});

/**
 * anonymous function - при нажатии Enter, вызывает функцию addClassAriaHidden.
 * Закрывает окно персонажа
 *
 * @return {undefined} - выход из функции
 */
setupSaveButton.addEventListener('keydown', function () {
  if (event.keyCode === ENTER_KEY_CODE) {
    addClassAriaHidden(setup, 'invisible');
  }
  return;
});

/**
 * anonymous function - при нажатии ESC закрывает окно редактирования персонажа
 *
 * @return {undefined} - выход из функции
 */
window.addEventListener('keydown', function () {
  if (event.keyCode === ESC_KEY_CODE) {
    if (setup.classList.contains('invisible')) {
      return;
    } else {
      addClassAriaHidden(setup, 'invisible');
    }
  } else {
    return;
  }
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
