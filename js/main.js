const fpsEl = document.getElementById("fps");
let secondsPassed;
let oldTimestamp = 10;
let fps;

const initial_speed = 1;
const initial_capacity = 10;

var speed = initial_speed;
var capacity = initial_capacity;

const speed_event = document.querySelector("#speed");
const speed_text = document.querySelector("#speed_text");

const capacity_event = document.querySelector("#capacity");
const capacity_text = document.querySelector("#capacity_text");

const time_text = document.querySelector("#time");


document.addEventListener("click", event => {
  if (event.target === speed_event) {
    speed++;
    speed_text.textContent = "speed is " + speed;
  } else if (event.target == capacity_event) {
    capacity++;
    capacity_text.textContent = "capacity is " + capacity;
  }
});

function gameLoop(timestamp){
  const timeElapsed = performance.now();
  // render game code here
  secondsPassed = (timestamp - oldTimestamp) / 1000;
  oldTimestamp = timestamp;
  
  fps = Math.round(1 / secondsPassed);

  fpsEl.textContent = "FPS: fps";

  
  speed += secondsPassed;
  speed_text.textContent = "speed is " + speed.toFixed(2);
  
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

