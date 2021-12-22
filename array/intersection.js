let arr2D = [
    [45,7,21,5,40], // 45 , 7 , 21, 5 , 40
    [45,72,2,52,40], // 45  , 40
    [45,7,21,5,40], // 45 , 7 , 21 , 40
    [45,7,21,57,4], // 45 ,7 , 21 
]

let result = arr2D.reduce((pv,cv,ci,oarr) => {
   console.log(pv + cv);
    let inter = pv.filter(v =>cv.includes(v))
    return inter;
});
console.log(result);