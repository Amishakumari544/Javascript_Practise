// call , apply , bind

let name1 = {
    firstname : "amisha",
    lastname : "kumari",
    // printName : function () { // not  a good method 
    //     console.log(this.firstname + " " + this.lastname);
    // } 
}

let printName = function (hometown) { // not  a good method
    console.log(this.firstname + " " + this.lastname +" " + hometown);
} 

printName.call(name1, "jsr");
// call -> use in function borrowing
let name2 = {
    firstname : "alia",
    lastname : "bhatt",

}
// we are borrowing from one function to another using call
printName.call(name2,"mumbai")   

// in apply we will use array only


let name4 = {
    firstname : "amisha",
    lastname : "kumari",
    // printName : function () { // not  a good method 
    //     console.log(this.firstname + " " + this.lastname);
    // } 
}

let printName1 = function (hometown) { // not  a good method
    console.log(this.firstname + " " + this.lastname +" " + hometown);
} 

printName1.apply(name4, ["jsr"]);
// apply -> use in function borrowing
let name3 = {
    firstname : "alia",
    lastname : "bhatt",

}
// we are borrowing from one function to another using apply
printName1.apply(name3,["mumbai"])   


// bind
// Whereas Bind creates a new function that will have this set to the first parameter passed to bind().

let ans = printName1.bind(name3,["banguluru"]) 
console.log(ans);
ans();