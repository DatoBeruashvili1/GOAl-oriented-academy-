function findOdd(arr) {
    const countMap = new Map();

    
    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }


    for (const [num, count] of countMap) {
        if (count % 2 !== 0) {
            return num;
        }
    }
}


console.log(findOdd([7])); 
console.log(findOdd([0])); 
console.log(findOdd([1, 1, 2])); 
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); 