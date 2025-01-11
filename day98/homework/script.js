function setUsername() {
    const username = document.getElementById('username').value;
    if (username) {
      
      localStorage.setItem('username', username);
      localStorage.setItem('score', 0);
      localStorage.setItem('difficulty', 2);
      showGame();
    } else {
      alert('გთხოვთ შეიტანოთ სახელი');
    }
  }

  
  function showGame() {
    const username = localStorage.getItem('username');
    document.getElementById('user-name').textContent = username;
    document.getElementById('name-container').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');

    
    document.getElementById('score').textContent = localStorage.getItem('score');
    document.getElementById('difficulty-level').textContent = `1-${localStorage.getItem('difficulty')}`;

    
    generateRandomNumber();
  }

  
  function changeBackgroundColor() {
    const color = document.getElementById('color-picker').value;
    document.body.style.backgroundColor = color;
  }

  let targetNumber = null;

  
  function generateRandomNumber() {
    const difficulty = localStorage.getItem('difficulty');
    const upperLimit = Math.pow(2, difficulty);
    targetNumber = Math.floor(Math.random() * upperLimit) + 1;
    document.getElementById('difficulty-level').textContent = `1-${upperLimit}`;
  }


  function checkGuess() {
    const userGuess = document.getElementById('guess-input').value;
    const score = parseInt(localStorage.getItem('score'));

    if (parseInt(userGuess) === targetNumber) {
      localStorage.setItem('score', score + 1);
      document.getElementById('score').textContent = score + 1;

     
      const newDifficulty = parseInt(localStorage.getItem('difficulty')) + 1;
      localStorage.setItem('difficulty', newDifficulty);


      generateRandomNumber();
    } else {
      alert('არასწორი რიცხვი, სცადეთ კიდევ!');
    }

    document.getElementById('guess-input').value = '';
  }


  window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
      showGame();
    }
  }