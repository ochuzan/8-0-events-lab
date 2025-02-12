// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!


let palette = document.querySelectorAll('.color')

for (color of palette){
  color.addEventListener('click', (e) => {
    let currentColor = document.querySelector('#current-color');
    currentColor.style.background = e.target.style.background;
  });
}


let cells = document.querySelectorAll('.cell');

for (let cell of cells) {
  cell.addEventListener('click', (e) => {
    let currentColor = document.querySelector('#current-color');
    e.target.style.background = currentColor.style.background;
  });
}

let clearButton = document.createElement('button');
clearButton.setAttribute('type', 'submit');
clearButton.setAttribute('id', 'clear-btn');
clearButton.textContent = 'Clear Canvas';
let currentColor = document.querySelector('#current-color');
currentColor.after(clearButton);

clearButton.addEventListener('click', () => {
  for (let cell of cells) {
    cell.style.background = 'white';
  }
});

// button that changes all cells to current color - Jerry's 
const colorButton = document.querySelector("#color-all");
colorButton.addEventListener("click", () =>{
  for(let cell of cells) {
    cell.style.background = currentColor.style.background;
  }
})


// let fillButton = document.createElement('button');
// fillButton.setAttribute('type', 'submit');
// fillButton.textContent = 'Color Entire Canvas';
// let clearButton = document.querySelector('#current-color');
// currentColor.after(fillButton);