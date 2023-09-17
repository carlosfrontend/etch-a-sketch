const container = document.getElementById('container');
const h1 = document.createElement('h1');
const fragment = document.createDocumentFragment();
let div;
const squares = document.querySelectorAll('#container')[0].childNodes;

for (let i = 0; i < 256; i++) {
  div = document.createElement('div');
  div.className = 'square';
  fragment.appendChild(div);
}

h1.className = 'title';
h1.textContent = 'Sketch App';

container.before(h1);
container.appendChild(fragment);

squares.forEach((square, index) => square.addEventListener('mouseover', () => {
  square.style.background = '#333';
}));

squares.forEach(square => square.addEventListener('mouseleave', () => {
  square.style.background = '#555';
}));

