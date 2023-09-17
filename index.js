const container = document.getElementById('container');
const newContainer = document.getElementById('container');
const h1 = document.createElement('h1');
const fragment = document.createDocumentFragment();
const squares = document.querySelectorAll('#container')[0].childNodes;
const buttonChangeGrid = document.createElement('button');
const CONTAINER_WIDTH = document.getElementById('container').offsetWidth;
let squaresNumPerSide = 16;
let side = CONTAINER_WIDTH / squaresNumPerSide;
let squaresNum = Math.pow(squaresNumPerSide, 2);

const draw = () => {

  squares.forEach((square, index) => square.addEventListener('mouseover', () => {

    square.style.background = '#333';

  }));

  squares.forEach(square => square.addEventListener('mouseleave', () => {

    square.style.background = '#555';

  }));

}

const createGrid = function () {

  for (let i = 0; i < squaresNum; i++) {

    const div = document.createElement('div');
    div.className = 'square';
    div.style.width = `${side / 16}em`;
    div.style.height = `${side / 16}em`;
    fragment.appendChild(div);

  }

}

window.addEventListener('ready', createGrid());

h1.className = 'title';
h1.textContent = 'Sketch App';

container.before(h1);
container.appendChild(fragment);

buttonChangeGrid.textContent = 'Change Grid';
buttonChangeGrid.className = 'change-grid';
buttonChangeGrid.setAttribute('onclick', 'changeGrid(fragment)');
container.before(buttonChangeGrid);

let changeGrid = () => {
  squaresNumPerSide = Number(prompt('Enter a number'));
  side = CONTAINER_WIDTH / squaresNumPerSide;
  squaresNum = Math.pow(squaresNumPerSide, 2)

  document.querySelectorAll('.square').forEach(square => square.parentNode.removeChild(square)); //Remove squares from container

  buttonChangeGrid.after(newContainer);


  for (let i = 0; i < squaresNum; i++) {
   
    const newDiv = document.createElement('div');
    newDiv.className = 'square';
    newDiv.style.width = `${side / 16}em`;
    newDiv.style.height = `${side / 16}em`;
    fragment.appendChild(newDiv);
  }
  container.appendChild(fragment);
  draw();
};

draw();
