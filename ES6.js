const numbers = [89, 54, 98, 121];
const student = {
    name: 'Mohon Saha',
    age: 20,
    Movies: ['kign Khan', 'Dhakar Mastan']
}

// 1. Template String:
const about = `My Name id ${student.name}. My age is ${student.age}. My First movei is ${student.Movies[0]}`
console.log(about);

// 2. arrow function 

// Zero parameter:
const getFiftyFive = () => 55;

// Single parameter:
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
// Multi Parameter
const addThree = (x, y, z) => x + y + z;
// Multiline Parameter
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// 3.Spread Operator : To make new array


// create a new array from an older array and add a element 
const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);

const newNumbers = [...numbers];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);


