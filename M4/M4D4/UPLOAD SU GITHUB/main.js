const getData = async (url) => {
    try {
        const data = await fetch(url)
        return await data.json();
    }
    catch (error) {
        console.log(error)
    }
};

getData("https://striveschool-api.herokuapp.com/books").then((res)=>{

res.map(function(book){
const titolo = book.title;
const immagine = book.img;
const prezzo = book.price;
console.log(titolo)
console.log(immagine)
console.log(prezzo)
const imma = document.getElementById("imgs")
imma.src = `${immagine}`
const tit = document.getElementById("title")
tit.innerHTML = "Titolo:"+" "+`${titolo}`
const prez = document.getElementById("price")
prez.innerText = "Prezzo:"+" "+`${prezzo}`
const div = document.getElementsByClassName("card-body")
titolo.forEach(element => {
    div.appendChild(tit)
});
immagine.forEach(element=>{
    div.appendChild(imma)
});
prezzo.forEach(element =>{
div.appendChild(prez)
})
// div.appendChild(immagine, titolo, prezzo)
})
console.log(res)

})

