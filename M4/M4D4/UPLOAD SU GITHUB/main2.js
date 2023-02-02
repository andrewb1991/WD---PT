const getData = async (url) => {
    try {
        const data = await fetch(url)
        return await data.json();
    }
    catch (error) {
        console.log(error)
    }
}


getData("https://striveschool-api.herokuapp.com/books").then((res)=>{
console.log(res)
res.map(data =>{
const titles = data.title
console.log(titles)
const prices = data.price
console.log(prices)
const images = data.img
console.log(images)
const row = document.getElementById("contenitore")
const div = document.createElement("div")
div.classList.add("card", "col-md-3", "col-sm-6", "m-1")
div.style.width = `18rem`
const immagine = document.createElement("img")
immagine.classList.add("img-card-top", "m-2")
immagine.src = `${data.img}`
const divCard = document.createElement("div")
divCard.classList.add("card-body")
const titoli = document.createElement("h5")
titoli.innerText = "TITOLO:" + " " + `${data.title}`
titoli.style.margin = "1em";
const prezzi = document.createElement("h5")
prezzi.innerText = "PREZZO:" + " " + `${data.price}` + "€"
const buttonCard = document.createElement("div")
buttonCard.classList.add("d-flex", "justify-content-between")
const btnAdd = document.createElement("div")
btnAdd.classList.add("btn", "btn-light")
btnAdd.innerText = "Add to Cart"

btnAdd.addEventListener("click", (e) => {
    const cart = document.getElementById("cart")
    const addBadge = document.createElement("span")
    addBadge.classList.add("badge", "badge-secondary")
    addBadge.style.backgroundColor = "green"
    addBadge.innerText = "Added to Cart"
    div.appendChild(addBadge)
    const newUl = document.createElement("ul")
    const newLi = document.createElement("li")
    newLi.innerText = `${data.title} ${data.price}` + "€"
    const emptyCart = document.createElement("button")
    emptyCart.classList.add("btn", "btn-light")
    emptyCart.innerText = "Delete Item"
    newLi.style.display = "inline"
    emptyCart.addEventListener("click", e =>{
        alert("Are You Sure?")
    newLi.style.display = "none"
    emptyCart.style.display = "none"
    })
    cart.append(newUl, emptyCart)
    newUl.appendChild(newLi)


})
const btnSkip = document.createElement("div")
btnSkip.classList.add("btn", "btn-light")
btnSkip.innerText = "Skip"
btnSkip.addEventListener("click", (e) => {
    alert("Are you sure to skip this item?")
    div.style.display = "none"

})

const bigBart = document.getElementsByClassName("dropdown-menu")
const emptyAll = document.createElement("div")
emptyAll.classList.add("btn", "btn-light")
emptyAll.innerText = "Delete All Items"
emptyAll.append(bigBart)


row.append(div)
div.append(immagine)
div.append(divCard)
divCard.append(titoli, prezzi, buttonCard)
buttonCard.append(btnAdd, btnSkip)



})
})



