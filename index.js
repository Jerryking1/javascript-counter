// const countElement = document.getElementById('count');
// const increaseButton = document.querySelector('#increase');
// const decreaseButton = document.getElementById('decrease');
// const resetButton = document.getElementById('reset');

// let count = 0;

// function updateCount() {
//     countElement.innerHTML = count;
// }

// increaseButton.addEventListener('click', () => {
//     count++; 
//     updateCount();
// });

// decreaseButton.addEventListener('click', () => {
//     count--;
//     updateCount();
// });


// resetButton.addEventListener('click', () => {
//     count = 0;
//     updateCount();
// });


// console.log(updateCount());

const countElement = document.getElementById('count');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset')

let count = 0;

function updateCount(){
    countElement.innerHTML = count;

}

increaseButton.addEventListener("click", ()=>{
    count++;
    updateCount()
})

resetButton.addEventListener("click", ()=>{
    count = 0;
    updateCount()
})


decreaseButton.addEventListener("click", ()=>{
    count--;
    updateCount()
})
updateCount()