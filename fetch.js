//1. JSON stringify and parse
const student = {
    name: 'Mohon Saha',
    age: 20,
    Movies: ['kign Khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON)
console.log(studentObj);

// 2. fetch 
fetch('url')
.then(res => res.json())
.then(data => console.log(data));

// keys and valus 

const keys = Object.keys(student);
const values = object.values(student);

// for
const numbers = [23, 45, 68, 89, 90];
numbers.forEach(num => console.log(num));
numbers.map(num => num*2);



// for of on array like object
// loop on an object usuing for in


// add and remove from an array: 
const products = [
    {name: 'laptop', price: 32000, brand: 'lenevo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'},
];

const newProduct = {name: 'Webcam', price: 700, brand: 'Lal'};

// Add copy products array and then add Newproduct:
const newProducts = [...products, newProduct];


// create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');



