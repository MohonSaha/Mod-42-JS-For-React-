// 1. How to declare a variable using let and const ? 
const  fatherName = 'Kanchon';
let season = 'rainy';
season = 'winter';

// 2. Condition 
// 6 basic Condition: >, <, ===, !==, <=, >=
// Multiple Condition: &&, ||

if(fatherName == kanchon || season === rainy){
    console.log();
}
else if(fatherName == Kanchon){

}
else{

}

// 3. Array 
// indeX Concepts
// lenght, push, change value by index

const numbers = [89, 54, 98, 121];
numbers[0] = 56;  // Example of change value by index


// 4. Loop 
// for loop
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5.Function 
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(35, 45);

// 6. Objects
// 3 Ways Access Property

const student = {
    name: 'Mohon Saha',
    age: 20,
    Movies: ['kign Khan', 'Dhakar Mastan']
}
const myVariable = 'age';

console.log(student.age);  // direct by property
console.log(student['age']);  // access via property name string
console.log(student[myVariable]);  // access via property name in a variable