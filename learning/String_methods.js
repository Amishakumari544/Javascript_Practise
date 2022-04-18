let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'Amisha'

console.log(firstName.toUpperCase())  // ASABENEH

let country = 'India'

console.log(country.toUpperCase())  
let lower = "AMISHA"
console.log(lower.toLowerCase());
// Substr

let str = "amishakumari"
console.log(str.substr(2,3));

// split
let splitt = '30 Days Of JavaScript,Sweden, Norway'

console.log(splitt.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(splitt.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
console.log(splitt.split(''))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
console.log(splitt.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(splitt.split(' , '))  // ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]




// All string methods return a new string. They don't modify the original string.


// Extracting String Parts
// there are 3 methods for ectracting strings
// 1. - > substr(start, length)
// 2. - > slice(start, end)
// 3. - > substring(start, end)

// slice - >substring() is similar to slice().

// The difference is that substring() cannot accept negative indexes.
let str1 = "Apple, Banana, Kiwi";
let part1 = str1.slice(7,6);
console.log(part1);
// console.log(str1.length);

// console.log(str1.trim());


// substring
let str2 = "Apple, Banana, Kiwi";
let part2 = str2.substring(7, 6);
console.log(part2);

// substr() - > similar to slice but , its 2nd argument is length

let str3 = "Apple, Banana, Kiwi";
let part3 = str3.substr(7, 6);

// console.log(part3);


// String Concatenation

let con = str3 + str2;
console.log(con);

let first ;
console.log(first); //prints undefined
// const first1  ;
// console.log(first1); //prints gives error missing initializer
const nullFirst = null ;
console.log(typeof nullFirst); //prints object = its a bug in javascript
