let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = 
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function start() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = '';
}

function lap() {
  const laps = document.getElementById("laps");
  const li = document.createElement("li");
  li.innerText = document.getElementById("display").innerText;
  laps.appendChild(li);
}
