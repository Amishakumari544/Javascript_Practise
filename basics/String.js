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