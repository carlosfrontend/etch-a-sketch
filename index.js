const main = document.getElementById('main');
const buttonsGroup = document.getElementById('buttons-group');
const container = document.getElementById('container');
const newContainer = document.getElementById('container');
const fragment = document.createDocumentFragment();
const squares = document.querySelectorAll('#container')[0].childNodes;
const buttonChangeGrid = document.getElementById('change-grid');
const normalButton = document.getElementById('normal');
const eraseButton = document.getElementById('eraser');
const cleanButton = document.getElementById('clean');
const grayScaleButton = document.getElementById('gray-scale');
const CONTAINER_WIDTH = document.getElementById('container').offsetWidth;
let squaresNumPerSide = 16;
let side = CONTAINER_WIDTH / squaresNumPerSide;
let squaresNum = Math.pow(squaresNumPerSide, 2);

const cleanDraw = () => {
  squares.forEach(square => square.style.background = '#fff');
  draw();
}

const erase = () => {

  squares.forEach(square => square.addEventListener('mouseover', () => {

    square.style.background = '#fff';

  }));

  squares.forEach(square => square.addEventListener('mouseleave', () => {

    square.style.background = '#fff';

  }));

}

const draw = () => {
  squares.forEach(square => square.addEventListener('mouseover', () => {

    square.style.background = '#555';

  }));

  squares.forEach(square => square.addEventListener('mouseleave', () => {

    square.style.background = '#555';

  }));

}

const drawGray = () => {


    let opacity = 0;

    squares.forEach(square => square.addEventListener('mouseover', () => {

      opacity += parseFloat(.1);

      if(opacity >= 1){

        opacity = 0.1;

      }

      square.style.background = `rgba(0,0,0,${opacity.toFixed(1)})`;

      
    }));
    
    squares.forEach(square => square.addEventListener('mouseleave', () => {
  
      square.style.background = `rgba(0,0,0,${opacity.toFixed(1)})`;      
         
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
container.appendChild(fragment);

let changeGrid = () => {

  squaresNumPerSide = Number(prompt('Enter a number of squares per side. Must be between 16 and 100.'));
  side = CONTAINER_WIDTH / squaresNumPerSide;
  squaresNum = Math.pow(squaresNumPerSide, 2);

  if (squaresNumPerSide >= 16 && squaresNumPerSide <= 100) {

    document.querySelectorAll('.square').forEach(square => square.parentNode.removeChild(square)); //Remove squares from container

    buttonChangeGrid.after(newContainer);

    for (let i = 0; i < squaresNum; i++) {

      const newDiv = document.createElement('div');
      newDiv.className = 'square';
      newDiv.style.width = `${side / 16}em`;
      newDiv.style.height = `${side / 16}em`;
      fragment.appendChild(newDiv);

    }
  } else {

    if (squaresNumPerSide > 100) {
      cleanDraw();
      alert('Your Number is greater than 100.\nTry Again!');
      return false;

    } else if (squaresNumPerSide < 16) {
      cleanDraw();
      alert('Your Number is smaller than 16.\nTry Again!');
      return false;

    }

  }
  main.appendChild(container);
  main.appendChild(buttonsGroup);
  container.appendChild(fragment);

};

cleanButton.addEventListener('click', cleanDraw);
normalButton.addEventListener('click', draw);
eraseButton.addEventListener('click', erase);
grayScaleButton.addEventListener('click', drawGray);
draw();