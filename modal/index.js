'use strict';

const showModal = document.querySelectorAll('.show-modal'); //'.' is only for selector
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');   

// it will increment and get all the buttons I will loop over nodelist which has two btns
const openmodal =()=>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 1; i < showModal.length; i++) {
    // addEventListener and eventHandler are pretty much same   
    showModal[i].addEventListener('click',openmodal)
        // anonymous function which has no name

    // Repeatetive code 
    closeModal.addEventListener('click',function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
        console.log("dlete");
    })
    // when we click outside the modal it should be hidden
    overlay.addEventListener('click',function(){

        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })
    // optimize code better than previous
    const closemodal =()=>{
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
  
    modal.addEventListener('click',closemodal);
    overlay.addEventListener('click',closemodal);
}