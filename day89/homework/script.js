function createStudentMap(students) {
    const studentMap = new Map();
    
    for (const [name, score] of students) {
        studentMap.set(name, score);
    }
    
    return studentMap;
}


const students = [
    ["Alice", 90],
    ["Bob", 85],
    ["Charlie", 92]
];

const studentScoresMap = createStudentMap(students);
console.log(studentScoresMap);



function removeDuplicates(arr) {
    return [...new Set(arr)];
}


const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); 


function increaseScores(studentScores) {
    const updatedScores = new Map();
    
    for (const [name, score] of studentScores) {
        updatedScores.set(name, score + 5);
    }
    
    return updatedScores;
}


const originalScores = new Map([
    ["Alice", 90],
    ["Bob", 85],
    ["Charlie", 92]
]);

const updatedScoresMap = increaseScores(originalScores);
console.log(updatedScoresMap);