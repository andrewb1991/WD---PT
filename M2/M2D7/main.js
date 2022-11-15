//INPUT, una listeners è una funzione, eventi ce ne sono una marea ma quelli importanti sono pochissimi


// console.log(document.getElementById("test");
// const input = document.querySelector(`input[name="test"]`);
// document.addEventListener(`input`, function(event){
//     console.log(`input event fired!`);
// })

// function clickMe(event){
//     alert(`Ciao!`)
//     console.log(event.target)
// }

function myFn(){
    console.log(`FIRED`);
}
const button = document.querySelector(`button`);
button.onclick = myFn;

window.onload = (`load`, myFn);
button.addEventListener(`click`, myFn);

// const b2 = document.getElementById(`2`);
// b2.addEventListener(`click`, clickMe)