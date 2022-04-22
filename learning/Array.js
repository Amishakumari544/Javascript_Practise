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

//  it copies all  item
 arr.slice(1,3) // 1 se chalu kre or 3 htaade 
arr.reverse() 



// array constructor
const arrC = Array(9).fill();  // creates an an empty array
                                                                                                                                                    
console.log(arrC);

const arrf = Array(9).fill(0);              // [
                                            //     0, 0, 0, 0, 0,
                                            //     0, 0, 0, 0
                                            // ]
                                            
                                                                                                                                                    
// console.log(arrf);  

// concat array 
let arr1 = [4,6,64,32,1];
let arr2 = [9,1,4,32,1];

let con = arr1.concat(arr2);
// console.log(con);

// Check an element if it exist in an array.

const numbers = [1, 2, 3, 4, 5]
// console.log(numbers[0]);

const fruits = ['banana', 'orange', 'mango', 'lemon']
let idx = fruits.indexOf('banana');

if(idx === -1){
    // console.log("no item");
}else {
    // console.log(fruits[idx].toString());
}

// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

const numbers2 = [1, 2, 3, 4, 5, 3, 1, 2,4];
const numbers1 = [1, 2, 3, 4, 5, 3, 1, 2];

// console.log(numbers2.lastIndexOf(4)); // prints 8 ->4 
// console.log(numbers1.lastIndexOf(4)); // prints 3 ->4 

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
// includes 

const numbers3 = [1, 2, 3, 4, 5]

// console.log(numbers3.includes(0)); //returns false

// how to check if its array or not?
// Array.isArray:To check if the data type is an array

const numbers4 = [1, 2, 3, 4, 5]
const numbers5 = [1, 2, 3, 4, 5]

// console.log(Array.isArray(numbers4));

// join

// console.log(numbers4.concat(numbers1).join(' ').toString());
// console.log(numbers.join(' '));
// console.log(numbers.join(','));
// console.log(numbers.join('$'));

// splice

// removes items -> according to the condition

//   console.log(numbers5.splice(0,4)) //-> prints 0 to 4 
  console.log(numbers5.splice(0,3)) //-> removes all items
//   console.lozg(numbers5.slice()) //-> 