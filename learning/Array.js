let minimist = require('minimist')
let fs = require("fs");


let args = minimist(process.argv);

let arr = [44,5,6,7,8];
// for (let i = 0; i < 10; i++) {
//     arr.push(i);
    
// }
// let str = arr.join("\n")
// console.log(str);
// console.log(arr);
arr.push(10)
arr.pop() // delete
arr.push(30)

arr.unshift(111) // starting index
console.log(arr);
arr.shift() // pop from start removes 111
 // console.log(arr);
 arr.slice(1,3) // 1 se chalu kre or 3 htaade 
arr.reverse() 



