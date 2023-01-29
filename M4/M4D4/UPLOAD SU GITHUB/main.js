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
console.log(res)
const titles = res.map((e)=>{
return e.title
})
const imgs = res.map((e)=>{
    return e.img;
})
const prices = res.map((e)=>{
    return e.price;
})
console.log(titles)
console.log(imgs)
console.log(prices)
const immagine = document.getElementById("imgs")
immagine.src = `${imgs}`
const titolo = document.getElementById("title")
titolo.innerHTML = `${titles}`
const prezzo = document.getElementById("price")
prezzo.innerText = `${prices}`
const div = document.getElementsByClassName("card-body")

div.appendChild(immagine, titolo, prezzo)

})

