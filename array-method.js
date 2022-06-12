const products = [
    {name: 'laptop', price: 32000, brand: 'lenevo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'},


];

// map 
const brands = products.map(product => product.brand);
console.log(brands);

const prices = products.map(product => product.price)
console.log(prices);

// single line 
products.forEach(product =>console.log(product));
products.forEach(product =>console.log(product.color));

// multiline 
products.forEach(product => {
    
});

// filter (will return an array)
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

// filter 
const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);


// find (only gives the first item that will match) (output will be an object)
const special = products.find(p => p.name.includes('n'));