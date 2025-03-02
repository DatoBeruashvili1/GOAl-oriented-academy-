function shiftString(inputString) {

    const result = new Array(inputString.length + 25).fill(''); 

    for (let index = 0; index < inputString.length; index++) {
        const char = inputString[index];

        const shift = char.charCodeAt(0) - 'A'.charCodeAt(0); 
        const newPosition = index + shift;

        
        result[newPosition] = char;
    }

    return result.join('').replace(/ +$/, ''); 
}


const inputStr = "BA";
const outputStr = shiftString(inputStr);
console.log(outputStr)