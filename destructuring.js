// array destructuring 
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y]= [42, 65]
// const [x, y]= numbers;
// console.log(x, y);

// make array by number 
function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90, 34]
const [first, second] = boxify(90, 34);
// console.log(boxify(90,34));
// console.log(first);

const student = {
    name: 'Mohon Saha',
    age: 20,
    Movies: ['kign Khan', 'Dhakar Mastan']
}

// const [firstMovei, secondMovie] = ['kign Khan', 'Dhakar Mastan']
const [firstMovei, secondMovie] = student.Movies;

// Object destructuring 

// const {name, age} = {name: 'Mohon Saha', age: 20};

const {name, age, id} = {id:2001, name: 'Mohon Saha', age: 20};

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 65,
        address: 'jumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;
const {weight, address} = employee.specification;
const {brand} = employee.specification.watch;



