function minAndMax(numbers) {

    if (numbers.length === 0) {
        return null;
    }
    
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    
    return [min, max];
}


const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const result = minAndMax(numbers);
console.log(result)