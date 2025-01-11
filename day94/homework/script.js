// 1
function welcomeUser(name, callback) {
    setTimeout(() => {
      callback(`Welcome, ${name}!`);
    }, 2000);
  }
  

  function printMessage(message) {
    console.log(message);
  }

  welcomeUser('dato', printMessage);
// 2
  function printMessageAfterDelay(message, callback) {
    setTimeout(() => {
      console.log(message); 
      callback(); 
    }, 2000);
  }
  
  function processCompleted() {
    console.log("Process completed!");
  }
  

  printMessageAfterDelay('Hello, this is your message!', processCompleted);

// 3
function calculateSquares(numbers, callback) {
    const squaredNumbers = [];
    
    
    let count = 0;
    numbers.forEach((number, index) => {
      setTimeout(() => {
        squaredNumbers[index] = number * number;
        count++;
  

        if (count === numbers.length) {
          callback(squaredNumbers);
        }
      }, 1000 * (index + 1)); 
    });
  }
  
  function handleResult(squaredNumbers) {
    console.log('Squared Numbers:', squaredNumbers);
  }

  const numbers = [1, 2, 3, 4, 5];
  calculateSquares(numbers, handleResult);