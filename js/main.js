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

const first_book_event = document.querySelector("#first_button");

const time_text = document.querySelector("#time");


window.onload = function() {
  read_file();
  requestAnimationFrame(gameLoop);
  new_compare();
}


document.addEventListener("click", event => {
  if (event.target === speed_event) {
    speed++;
    speed_text.textContent = "speed is " + speed;
  } else if (event.target == capacity_event) {
    capacity++;
    capacity_text.textContent = "capacity is " + capacity;
  } else if (event.target == book_event) {
    addBook();
  } else if (event.target == first_book_event) {
    new_compare();
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
  const random_name = names[random_index];
  console.log(random_name);
  return random_name;
}

function read_file() {
  try {
    fetch('./js/static/names.json')
      .then(response => response.json())
      .then(data => {
        names = data.names;
        })
      .catch(error => console.log(error));
  } catch (e) {
    console.warn("Could not load json");
  }
}

const first_book = document.querySelector("#first");
const second_book = document.querySelector("#second");

function new_compare() {
  first_book.style.backgroundColor = getRandomColor();
  second_book.style.backgroundColor = getRandomColor();
  first_book.textContent = getRandomName();
  second_book.textContent = getRandomName();
}
