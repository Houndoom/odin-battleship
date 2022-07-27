import { gameControl } from './gameControl.js';
import { displayControl } from './displayControl.js';
import './style.css';

displayControl.startSetup();

/* Get name and start game */

document.querySelector('.start button').addEventListener('click', enter);

// Make it work on Enter key
document.querySelector('.start input').addEventListener("keydown", e => {
  if (e.key === "Enter") enter();
});

function enter() {
  const nameInput = document.getElementById('name-input');
  if (nameInput.checkValidity()) {
    gameControl.createPlayers(nameInput.value, 'Computer');
    displayControl.clearMain();
    displayControl.gameSetup(10, nameInput.value, 'Computer');
    gameControl.turnSetup();
  } else {
    nameInput.setCustomValidity('Please enter a name.');
    nameInput.reportValidity();
  }
}

