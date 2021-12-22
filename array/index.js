let arr = [3,6,2,77,33,44];
let array = [{
            age:50,gender:'F',
            age:120,gender:'M',
            age:70,gender:'F',
            age:20,gender:'F',
        }]

let even = (ele) => ele %2 === 0;
console.log(arr.some(even));

// let comparision = (ele) => ele.gender === 'F' && ele.age >= 100 && ele.age <=20;
let comparision = array.some(function(ele){
    if(ele.gender === 'F' && ele.age >=20 && ele.age <=30){
        return true;
    }else{
        return false;
    }
})
// console.log(array.some(comparision));
console.log(comparision);