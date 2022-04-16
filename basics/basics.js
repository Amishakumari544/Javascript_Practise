// let have Block Scope.

let x = 34
// let x = 34 //'x' has already been declared
console.log(x); 

var y = 56
var y = 89 //updates the y but does'nt gives error
console.log(y); //prints 89

const z = 78
function f(){
const z = 76
console.log(z); // prints 76
}
f();
console.log(z); // 78

let s1 = 22
console.log(typeof s1); //prints number
console.log( s1 ); // prints 22

let s11 = 22
console.log(typeof (s11 + " ")); //prints string
console.log( s11 + " "); // prints undefined

// let s2 = (number)"amisha"
console.log(typeof s); //prints number
// console.log( s2); // prints NaN

let num = 67
num = num + " ";  // string conversion
console.log(typeof (num)); //converted in string

let ns = 67
ns = String(ns);  // string conversion
console.log(typeof (ns));

let ni = "67"
ni = Number(ni);  // number conversion
console.log(typeof (ni));