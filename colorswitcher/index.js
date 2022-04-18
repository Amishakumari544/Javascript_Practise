// create arr of colors

const colors = ["blue","green","red","orange"];
// console.log(colors);

const btn = document.getElementById("btn");
const span = document.getElementById("span");

btn.addEventListener("click",function(){
    let random = getRandom();
    console.log(random);
    document.body.style.backgroundColor = colors[random];
    // text
    span.textContent = colors[random];
    console.log(random);
})

function getRandom(){
    
    return  Math.floor(Math.random() * colors.length) // this will put the colors from 0 - 3 and since random will give
    //us floating point we have to change in number so we are using floor/ciel

}