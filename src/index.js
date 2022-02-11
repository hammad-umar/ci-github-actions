import attack from './attack';

// Selecting DOM Elements
const creature = document.querySelector('#creature');
const damage = document.querySelector('#damage');
const resultButton = document.querySelector('#resultButton');
const resultTag = document.querySelector('#resultTag');

resultButton.addEventListener('click', () => {
  const result = attack(creature.value, damage.value);
  resultTag.innerHTML = result;
});
