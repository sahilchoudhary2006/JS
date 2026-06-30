// ARRAYS
const myArr = [0,1,2,3,4,5]
const array = ["sahil", "sue", "jheuwqfji"]

const myArr2 = new Array(1,2,5,6,7)
// console.log(myArr2);


// console.log(myArr[1]);

// Array methods 

myArr.push(6)
// console.log(myArr)

myArr.pop();
// console.log(myArr)

myArr.unshift(9)
// console.log(myArr);


myArr.shift();
// console.log(myArr)

const newArr = myArr.join();
// console.log(newArr)
// console.log(myArr)

// console.log(typeof newArr)

// PART 2 

const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["spiderman", "flash", "batman"]

marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes)  // iss se array ke andar array aa raha h 

let all = marvel_heroes.concat(dc_heroes);
// console.log(all)

const allHeroes = [...marvel_heroes, ...dc_heroes]

// console.log(allHeroes);

const anotherarray = [1,2,[3,4],5,6,[7,8,[9,0]]]   // array ke andar arraya h bahjg complicated h iss case me flat use karte h 

const newanotherarray = anotherarray.flat(Infinity);

console.log(newanotherarray);

console.log(Array.isArray("Sahil"))  // ye array thoidi h ye toh string h 
console.log(Array.from("Sahil")) // iska array bana de raha h 

console.log(Array.from({name: "sahil"}));  //isko covert nahi kar paayega isliye empty array de raha h 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));