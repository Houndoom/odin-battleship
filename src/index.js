import { gameControl } from './gameControl.js';
import { displayControl } from './displayControl.js';
import './style.css';

displayControl.startSetup();

document.querySelector('.start button').addEventListener('click', enter);

function enter() {
  const nameInput = document.getElementById('name-input');
  if (nameInput.checkValidity()) {
    gameControl.createPlayers(nameInput.value, 'Computer');
    displayControl.clearMain();
    displayControl.gameSetup(10, nameInput.value, 'Computer');
    gameControl.turnSetup();
  } else {
    nameInput.setCustomValidity('Please enter a name.');
  }
}