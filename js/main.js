const fpsEl = document.getElementById("fps");
let secondsPassed;
let oldTimestamp = 10;
let fps;

let names = []; // array of possible names generated

const initial_speed = 1;
const initial_capacity = 10;

var speed = initial_speed;
var capacity = initial_capacity;

const speed_event = document.querySelector("#speed");
const speed_text = document.querySelector("#speed_text");

const capacity_event = document.querySelector("#capacity");
const capacity_text = document.querySelector("#capacity_text");

const book_event = document.querySelector("#add-book");
const library = document.querySelector("#library");

const time_text = document.querySelector("#time");

// Loading in files
//const reader = new FileReader();
/* I dont know what this rawFile stuff really means
   but I need it to load the names.txt file */

read_file();




document.addEventListener("click", event => {
  if (event.target === speed_event) {
    speed++;
    speed_text.textContent = "speed is " + speed;
  } else if (event.target == capacity_event) {
    capacity++;
    capacity_text.textContent = "capacity is " + capacity;
  } else if (event.target == book_event) {
    addBook();
  }
});



function gameLoop(timestamp){
  const timeElapsed = performance.now();
  // render game code here
  secondsPassed = (timestamp - oldTimestamp) / 1000;
  oldTimestamp = timestamp;
  
  fps = Math.round(1 / secondsPassed);

  fpsEl.textContent = "FPS: " + fps;

  
  speed += secondsPassed;
  speed_text.textContent = "speed is " + speed.toFixed(2);
  
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

function addBook() {
  var book = document.createElement("div");
  book.className = "book";
  book.style.backgroundColor = getRandomColor();
  book.textContent = getRandomName();
  library.appendChild(book);
}

// Generates a random color, necessary for library books to appear unique
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generates a random name for the book
function getRandomName() {
  const random_index = Math.floor(Math.random() * names.length);
  const random_name = name[random_index];
  console.log(random_name);
  return random_name;
}

function read_file() {
  var rawFile = new XMLHttpRequest();
  rawFile.open("get", "static/names.json");
  rawFile.onload = () => {
    try {
      const json = JSON.parse(rawFile.responseText);
      console.log("step 1")
      populateRankings(json);
    } catch (e) {
        console.warn("Could not load json");
    }
    /*
    if(rawFile.readyState === 4) {
      if(rawFile.status === 200 || rawFile.status == 0) {
        var names = rawFile.responseText.trim().split('\n');
        console.log("success");
      }
    }*/
  };
  rawFile.send();
}

function populateRankings(json) {
  console.log(json);
}


