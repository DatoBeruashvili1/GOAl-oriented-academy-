
function countFirstLetter(str) {
    if (str.length === 0) {
        return 0; 
    }

    const firstLetter = str[0]; 
    let count = 0; 

    
    for (let char of str) {
        if (char === firstLetter) {
            count++;
        }
    }

    return count; 
}


console.log(countFirstLetter("apple"));
console.log(countFirstLetter("banana")); 
console.log(countFirstLetter(""));
console.log(countFirstLetter("Aardvark"));