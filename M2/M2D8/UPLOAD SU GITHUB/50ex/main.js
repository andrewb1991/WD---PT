
// 21
let x = "John";
let y = "Doe";
console.log(`${x} <> ${y}`);
// 22
const myPerson = {name:"Andrea", surname:"Bramucci", email:"andrea.bramucci@gmail.com"};
console.log(myPerson);
// 23
delete myPerson.email;
console.log(myPerson);
// 24
const array = ["ciao", "mi", "chiamo", "Andrea", "Bramucci", "ho", "trenta", "anni", "faccio", "yoga"];
// 25
console.log(array);
// 26
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min +1) - min);
}

function randomArrInt(lenght){
    const randomArr = [];
    for( let i = 0; i < lenght; i++){
        randomArr.push(randomInt(0,100))
    }
return randomArr;
}
console.log(randomArrInt(100));

const myArr = randomArrInt;

    const max = Math.max.apply(myArr);
console.log(max);
const min = Math.min.apply(myArr);
console.log(min);

// function minNum(arr) {
//     var min = Math.min.apply(null, arr);
//     console.log(min);
// }