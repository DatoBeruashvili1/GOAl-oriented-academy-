class VowelConsonantChecker {
    constructor() {
        this.vowels = ['a', 'e', 'i', 'o', 'u'];
    }

    checkCharacter(ch) {
      
        const char = ch.toLowerCase();

        
        if (char.length !== 1 || !/[a-z]/.test(char)) {
            console.log('Please enter a valid single alphabet character.');
            return;
        }

   
        if (this.isVowel(char)) {
            console.log(`${char} is a vowel.`);
        } else {
            console.log(`${char} is a consonant.`);
        }
    }

    isVowel(char) {
        return this.vowels.includes(char);
    }
}


function runChecker() {
    const checker = new VowelConsonantChecker();
    const userInput = prompt("Enter a character:"); 

    if (userInput) {
        checker.checkCharacter(userInput);
    } else {
        console.log('No input provided.');
    }
}


runChecker();