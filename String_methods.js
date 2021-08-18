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
