let hexCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


let btn = document.getElementById('btn');

let bg = document.getElementById('span')

btn.addEventListener('click',function(){
    let hexC = "#"
    // console.log(randomColor);
    // iterate till 6 becase hex can extend upto 6
    for (let index = 0; index < 6; index++) {
        hexC += hexCode[getRandom()]; //directly invoke the function here
        
    }

    bg.textContent = hexC; //text
    document.body.style.backgroundColor = hexC; 
})

function getRandom(){
    return  Math.floor(Math.random() * hexCode.length)
}