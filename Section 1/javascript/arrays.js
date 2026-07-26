const arr = [546, 'hello', false, null];

console.log(Array.isArray(arr));

const movies = ['12th Fail', 'Sitare Zameen Par', 'Chhichore',
    'Avatar', 'Spiderman'];

// Indexing
console.log(movies[1]);
console.log(movies.indexOf('Avatar'));
console.log(movies.indexOf('Avatar 2'));

console.log(movies.at(-2));

// slicing

console.log(movies.slice(1, 4));

console.log(movies.slice(3, 5));
console.log(movies.length);

console.log(movies.slice(-2));

// adding and removing elements

movies.push('Obession');
movies.unshift('Iron man');

console.log(movies);

movies.pop();
movies.shift();

console.log(movies);

// movies.splice(2, 2); // removing elements from any index
// movies.splice(1, 2, 'tare zameen par', '3 idiots'); // replacement
movies.splice(3, 0, 'tare zameen par', '3 idiots');  // insertion

console.log(movies);