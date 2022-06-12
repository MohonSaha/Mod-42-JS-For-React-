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

