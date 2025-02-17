function bonusTime(salary, bonus) { 
    const total = bonus ? salary * 10 : salary;

    return `$${total}`;
}

console.log(bonusTime(1000, true));  
console.log(bonusTime(1000, false));