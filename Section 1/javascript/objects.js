const user = {
    name: 'Raju',
    email: 'raju@mail.com',
    password: 'abc123'
};

console.log(user.name);
console.log(user['email']);

console.log(user.address);
user.address = 'Lucknow';

console.log(user);

user.name = 'Raju Rastogi';

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand: 'Samsung',
    model: 's22',
    price: 50000,
    colors: ['white', 'black', 'gray']
};

console.log(smartphone.price);
smartphone.price = 60000;
console.log(smartphone);
console.log(smartphone.colors[2]);
smartphone.colors.push('red')
console.log(smartphone);


const phoneList = [
    {
        brand: 'Samsung',
        model: 's22',
        price: 50000,
        colors: ['white', 'black', 'gray']
    },
    {
        brand: 'Apple',
        model: 'iphone 15 pro',
        price: 120000,
        colors: ['blue', 'white']
    },
    {
        brand: 'Redmi',
        model: '13C',
        price: 13000,
        colors: ['gold', 'black', 'blue']
    },
    {
        brand: 'Vivo',
        model: 't4x',
        price: 25000,
        colors: ['blue', 'white']
    },
    {
        brand: 'Realme',
        model: 'm10',
        price: 18000,
        colors: ['black', 'white']
    },
];

console.log(phoneList.length);

console.log(phoneList[2]);

console.log(phoneList[2].colors[1]);
phoneList[4].price = 25000;

console.log(phoneList);