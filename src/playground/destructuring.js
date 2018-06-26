/*
 *
 * OBJECT DESTRUCTURING
 *
*/

// console.log('destructuring');

// const person = {
//   name: 'Muhammad Usman Sharif',
//   age: 40,
//   location: {
//     city: 'Lahore',
//     temprature: 120
//   }
// };

// const {name: fullName = 'Anonymous', age} = person;
// const {city, temprature: temp} = person.location;
// // const name = person.name;
// // const age = person.age;


// console.log(`${fullName} is ${age}.`)

// console.log(`It's ${temp} Fahrenheit in ${city}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

/*
 *
 * ARRAY DESTRUCTURING
 *
*/

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const address = [];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}. `);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [title, small, medium, large] = item;

console.log(`A medium ${title} costs ${medium}`);

