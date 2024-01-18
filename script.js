// script.js

let timer;
let startTime;
let isRunning = false;
let lapCount = 1;

function startStopwatch() {
  if (!isRunning) {
    startTime = Date.now() - (lapCount > 1 ? (Date.now() - startTime) : 0);
    timer = setInterval(updateDisplay, 1000);
    isRunning = true;
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  lapCount = 1;
  document.getElementById('lapTimes').innerHTML = '';
  document.querySelector('.display').textContent = '00:00:00';
}

function lapTime() {
  if (isRunning) {
    let currentTime = new Date(Date.now() - startTime);
    let lapTime = formatTime(currentTime);

    let lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    document.getElementById('lapTimes').appendChild(lapItem);
    lapCount++;
  }
}

function updateDisplay() {
  let currentTime = new Date(Date.now() - startTime);
  let formattedTime = formatTime(currentTime);
  document.querySelector('.display').textContent = formattedTime;
}

function formatTime(time) {
  let hours = time.getUTCHours().toString().padStart(2, '0');
  let minutes = time.getUTCMinutes().toString().padStart(2, '0');
  let seconds = time.getUTCSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
