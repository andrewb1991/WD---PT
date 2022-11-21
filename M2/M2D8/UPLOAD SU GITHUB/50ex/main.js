
// 21
let x = "John";
let y = "Doe";
console.log(`${x} <> ${y}`);
// 22
const myPerson = { name: "Andrea", surname: "Bramucci", email: "andrea.bramucci@gmail.com" };
console.log(myPerson);
// 23
delete myPerson.email;
console.log(myPerson);
// 24
const array = ["ciao", "mi", "chiamo", "Andrea", "Bramucci", "ho", "trenta", "anni", "faccio", "yoga"];
// 25
console.log(array);
// 26
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

function randomArrInt(lenght) {
    const randomArr = [];
    for (let i = 0; i < lenght; i++) {
        randomArr.push(randomInt(0, 100))
    }
    return randomArr;
}
console.log(randomArrInt(100));

// 27
const myArr = randomArrInt(100);
console.log(myArr);
console.log("Min:", Math.min(...myArr));
console.log("Max:", Math.max(...myArr));
// 28



// 29
// 30

//31
const cont = document.getElementById(`container`);
//32
// const tdhtml = document.querySelectorAll(`td`);
//33
const printTd = function () {
    td = null;
    const tds = document.querySelectorAll(`td`);
    for (let i = 0; i < tds.length; i++) {
        console.log(tds);
    }
};
// 34
const changeTitolo = function (newTitle) {
    const title = document.querySelector(`h1`);
    title.innerText = newTitle;
};
// 35
const addNewTr = function () {
    const tables = document.querySelector(`table tr`).parentNode;
    const newRow = document.createElement(`tr`);
    tables.appendChild(newRow);
}

// 36

const addClass = function (cla) {
    const newClass = document.querySelectorAll(`tr`);
    for (const cla of newClass) {
        cla.classList.add(`test`);
    }
};

// 37
const addColoLink = function (links) {
    const newLink = document.querySelectorAll(`a`);
    for (const link of newLink) {
        links.style.color = `red`;
    }
}

// 38
window.onload = function () {
    console.log(`Page loaded`)
}
// 39

const addToTheUl = function (content) {
    const newUl = document.createElement(`li`);
    newUl.innerText = content;
    const uls = document.querySelector(`ul`);
    uls.appendChild(newUl);
};
// 40
const removeLi = function() {
    document.querySelector(`ul`).style.display = `none`;
const tables = document.querySelector(`table tr`).parentNode;
    const newRow = document.createElement(`tr`);
    tables.appendChild(newRow);
};
// 41
// const seeLink = funcion (alink){

// // }
// const seeLink = function (ali) {
//     const alinks = document.querySelectorAll(`a`);
//     for (i = 0; i < alinks.length; i++) {
//         alinks[i].addEventListener(onmouseover,event =>))
//     };
// }

//42

const addButton = function(content) {
    const newButton = document.createElement(`button`);
    newButton.innerText = content;
    newButton.innerHTML = `Elimina Immagini`;
    const btns = document.querySelector(`table`);
    btns.appendChild(newButton);
    btns.addEventListener("click", function imageToRemove() {
        const imagesRem = document.querySelectorAll(`img`);
        for(img of imagesRem){
        img.style.display = `none`;
        }
    });
    };
// 43
const addButtonTab = function(content) {
    const newButtonTab = document.createElement(`button`);
    newButtonTab.innerText = content;
    newButtonTab.innerHTML = `Elimina Tabella`;
    const btnsTab = document.querySelector(`table`);
    btnsTab.appendChild(newButtonTab);
    btnsTab.addEventListener("click", function TabToRemove(){
    const tabsRem = document.querySelectorAll(`table`);
    for(tab of tabsRem){
    tab.style.display = `none`;
    }
    });
};

//44
const calcSum = function (number){
    const elem = document.querySelectorAll(`td`);


}
