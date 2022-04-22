// let increment = document.getElementsByClassName('increment')
// let reset = document.getElementsByClassName('reset')
// let decrement = document.getElementsByClassName('decrement')

// we are going to use foreach -> callback function = to make all the btns function together


// initial count
// let count = 0;
// let value = document.querySelector('#value') // for single one
let btns  = document.querySelectorAll(".btn"); // for multiple class which have common btn class

btns.forEach(function(btn){
    // console.log(btn); -> we can check here if we are getting or not each elements
    btn.addEventListener("click",function(e){ //we are using event to check each button

        // currentTarget tells us on which element the event was attached or the element whose eventListener
        //  triggered the event. event. target tells where the event started
        console.log(e.currenTarget.classList);
    })

})