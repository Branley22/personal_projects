// Variables
const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const overlayDiv = document.getElementById('overlay');
const lives = document.querySelectorAll('img');
const button = document.getElementsByTagName('button');
let phraseUl = document.querySelector('#phrase ul');


// In-game variables
let missed = 0;

// array
const phrases = [
  'captain america', 
  'thor', 
  'ironman', 
  'hulk', 
  'spider man'
];

// Add event listener to start button
startButton.addEventListener('click', () => {
  overlayDiv.style.display = 'none';
});

// Create getRandomPhraseAsArray function
function getRandomPhraseAsArray(arr) {
  return phrases[Math.floor(Math.random() * arr.length)].split('');
}
randomPhrase = getRandomPhraseAsArray(phrases);

// Set the game display
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i ++) {
    let li = document.createElement('li');
    li.textContent = arr[i].toLowerCase();
    phrase.appendChild(li);
    if (li.textContent !== ' ') {
      li.className = 'letter';
    } else {
      li.className = 'space';
    }
  }
}
addPhraseToDisplay(randomPhrase);

// Create checkLetter function
function checkLetter(button) {
  const letter = document.querySelectorAll('li');
  let letterFound = null;
  for (let i = 0; i < letter.length; i++) {
    if (button === letter[i].textContent.toLowerCase()) {
      letter[i].classList.add('show');
      letter[i].style.transition = '1s ease-in';
      letterFound = true;
    }
  };
  return letterFound;
};

// Add event listener to keyboard
keyboard.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.className = 'chosen';
    e.target.disabled = true;
    const match = checkLetter(e.target.textContent.toLowerCase());

    if (match === null) {
      missed++;
      const lostLife = 5 - missed;
      const lives = document.querySelectorAll('img');
      lives[lostLife].setAttribute("src", "images/lostHeart.png");
    }
    checkWin();
  }
});

// checkWin function
function checkWin() {
  const letterC = document.querySelectorAll('.letter');
  const show = document.querySelectorAll('.show');
  const title = document.querySelector('.title')

  if(letterC.length === show.length) {
    overlayDiv.className = 'win';
    title.textContent = 'Lets Go! You Won!';
    overlayDiv.style.display = 'flex';
  } else if (missed >= 5) {
    overlayDiv.className = 'lose';
    title.textContent = 'You lose! Try again next time';
    overlayDiv.style.display = 'flex';
  }
  resetGame();
};

// Reset Game
function resetGame() {
startButton.textContent = 'Play Again?';
startButton.addEventListener('click', () => {
location.reload();
  });
};

