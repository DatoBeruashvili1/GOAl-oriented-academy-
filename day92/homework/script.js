// 1
function unionOfSets(setsArray) {
    const unionSet = new Set();
    
    for (const set of setsArray) {
        for (const item of set) {
            unionSet.add(item);
        }
    }
    
    return unionSet;
}
const result = unionOfSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]);
console.log(result)

// 2
function symmetricDifference(setA, setB) {
    const resultSet = new Set();

    for (const item of setA) {
        if (!setB.has(item)) {
            resultSet.add(item);
        }
    }

    for (const item of setB) {
        if (!setA.has(item)) {
            resultSet.add(item);
        }
    }

    return resultSet;
}


const symDiffResult = symmetricDifference(new Set([1, 2, 3]), new Set([3, 4, 5]));
console.log(symDiffResult)








// 3

function isSubset(setA, setB) {
    for (const item of setA) {
        if (!setB.has(item)) {
            return false;
        }
    }
    return true;
}

const isSubsetResult = isSubset(new Set([1, 2]), new Set([1, 2, 3]));
console.log(isSubsetResult)


// 4

function characterFrequency(str) {
    const frequencyMap = new Map();

    for (const char of str) {
        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char) + 1);
        } else {
            frequencyMap.set(char, 1);
        }
    }

    return frequencyMap;
}
// 5
const charFreqResult = characterFrequency("hello");
console.log(charFreqResult)

function invertMap(originalMap) {
    const invertedMap = new Map();

    for (const [key, value] of originalMap) {
        invertedMap.set(value, key); // Set the value as the key and the key as the value
    }

    return invertedMap;
}

// Example usage:
const invertedResult = invertMap(new Map([['a', 1], ['b', 2], ['c', 1]]));
console.log(invertedResult)
