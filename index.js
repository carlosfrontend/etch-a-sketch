const container = document.getElementById('container');
const h1 = document.createElement('h1');
const fragment = document.createDocumentFragment();

for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.className = 'square';
  fragment.appendChild(div);
}


h1.className = 'title';
h1.textContent = 'Sketch App';

container.before(h1);
container.appendChild(fragment);

