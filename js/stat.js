'use strict';

var names = ['Иван', 'Игнат', 'Олег', 'Андрей', 'Алина'];
var times = [1.33, 54.4, 34.4, 11.1, 32.2, 16.7];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNames(arr, amount) {
  var result = ['Вы'];

  for (var i = 1; i <= amount - 1; i++) {
    var randomIndex = getRandomInt(0, arr.length - 1);
    result.push(arr[randomIndex]);

    arr = arr.filter(function (item, index) {
      return index !== randomIndex;
    });
  }

  return result;
}

function getRandomTimes(arr, amount) {
  var result = [];

  for (var i = 1; i <= amount; i++) {
    var randomIndex = getRandomInt(0, arr.length - 1);
    result.push(arr[randomIndex]);

    arr = arr.filter(function (item, index) {
      return index !== randomIndex;
    });
  }

  return result;
}

var renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(120, 30, 320, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 320, 270);
  ctx.fillRect(100, 10, 320, 270);

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 140;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 70;

  for (i = 0; i < times.length; i++) {
    var name = names[i];
    time = times[i];

    var height = step * time;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255,0,0,1)';
    } else {
      ctx.fillStyle = 'rgba(0,0,' + getRandomInt(100, 255) + ',1)';
    }
    ctx.fillRect(histoX + columnIndent * i, 270 - height - 30, 30, height);

    ctx.fillStyle = '#000';
    ctx.fillText(name + ':' + time.toFixed(0), histoX + columnIndent * i, 100 + histoHeight + 20);
  }

};

var canvas = document.querySelector('canvas');
renderStatistics(canvas.getContext('2d'), getRandomNames(names, 4), getRandomTimes(times, 4));
