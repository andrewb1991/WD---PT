const getData = async (url) => {
    try {
        const data = await fetch(url)
        return await data.json();
    }
    catch (error) {
        console.log(error)
    }
};

getData("https://striveschool-api.herokuapp.com/books").then((res) => {
    console.log(res)
    res.map(data => {
        const titles = data.title
        console.log(titles)
        const prices = data.price
        console.log(prices)
        const images = data.img
        console.log(images)
    const row = document.getElementById("contenitore")
    const div = document.createElement("div")
    div.classList.add("card", "col-sm-6", "carta")
    div.style.width = `18rem`
    const immagine = document.createElement("img")
    immagine.classList.add("img-card-top")
    immagine.src = `${data.img}`
    const divCard = document.createElement("div")
    divCard.classList.add("card-body")
    const titoli = document.createElement("h2")
    titoli.innerText = "TITOLO:" + " " + `${data.title}`
    const prezzi = document.createElement("h2")
    prezzi.innerText = "PREZZO:" + " " + `${data.price}` + "€"
    row.append(div)
    div.append(immagine)
    div.append(divCard)
    divCard.append(titoli, prezzi)

});



})