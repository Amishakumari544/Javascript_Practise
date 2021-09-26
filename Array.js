let minimist = require('minimist')
let fs = require("fs");


let args = minimist(process.argv);

let arr = [];
for (let i = 0; i < 20; i++) {
    arr.push(i);
    
}
let str = arr.join("\n")
console.log(str);
console.log(arr);
arr.push(10)
arr.push(20)
arr.push(30)
Fs.writeFileSync(args.dest,str,"utf-8")