function outer() {
    var arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(function (){
            console.log(i);
        })
        
    }
    return arr ;
}

console.log("before calling");
var arr = outer();
arr[0]();
arr[1]();
arr[2]();
console.log("after");