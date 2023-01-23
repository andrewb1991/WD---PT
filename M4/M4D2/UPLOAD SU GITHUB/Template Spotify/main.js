const createEl = (type, attributes, ...children) => {
    const element = document.createElement(type);
    Object.keys(attributes).forEach((key) => {
        element.setAttribute(key, attributes[key])
    })
    children.forEach((child) => {
        typeof child === "string"
            ? element.appendChild(document.createTextNode(child)) : element.appendChild(child)
    })
    return element;
};

const cardContainer = document.getElementById("cardContainer");
const cardManeskin = document.getElementById("cardManeskin");
const cardMamhood = document.getElementById("cardMamhood");
const cardAlbum = document.getElementById("cardAlbum")
const uniqueBtn = document.getElementById("unique");
console.log(uniqueBtn);


const getData = async (url) => {
    try {
        const data = await fetch(url)
        return await data.json();
    }
    catch (error) {
        console.log(error)
    }
};

const createCard = (data, container) => {
    const card = createEl("div", { class: "card-container", id: "card-container" },
        createEl("div", { class: "card-img", id: "card-img", style: `background-image: url(${data.album.cover})` }),
        createEl("h1", { class: "card-title" }, `${data.title}`),
        createEl("h4", { class: "card-info" }, `${data.artist.name}`),
        createEl("h5", {class: "card-album"}, `${data.album.title}` )

    )
    container.appendChild(card)
}

const createList = (data, container)=>{
    const list = createEl("li", {id: "cardAlbum"}, `${data.album.title}`)
    container.appendChild(list)
}

getData("https://striveschool-api.herokuapp.com/api/deezer/search?q=pinguini%20tattici%20nucleari")
    .then((response) => {
        const albums = response.data.map(album => album.album.title);
        console.log(albums)
       const artists = 
    response.data.slice(0, 3).map((artist) => createCard(artist, cardContainer))
    });

getData("https://striveschool-api.herokuapp.com/api/deezer/search?q=maneskin").then((response) => {
    response.data.slice(0, 3).map((artist) => createCard(artist, cardManeskin))
    console.log(response)
});

getData("https://striveschool-api.herokuapp.com/api/deezer/search?q=mahmood`").then((response) => {
    response.data.slice(0, 3).map((artist) => createCard(artist, cardMamhood))
});

getData("https://striveschool-api.herokuapp.com/api/deezer/search?q=pinguini%20tattici%20nucleari")
.then((response) => {
    const albums = response.data.map(album => album.album.title);
    console.log(albums)
   const artists = 
response.data.slice(0, 3).map((cardContainer) => createList(cardContainer, cardAlbum))
});

getData("https://striveschool-api.herokuapp.com/api/deezer/search?q=mahmood`")
.then((response) => {
    const albums = response.data.map(album => album.album.title);
    console.log(albums)
   const artists = 
response.data.slice(0, 3).map((cardContainer) => createList(cardContainer, cardAlbum))
});

getData("https://striveschool-api.herokuapp.com/api/deezer/search?q=maneskin")
.then((response) => {
    const albums = response.data.map(album => album.album.title);
    console.log(albums)
   const artists = 
response.data.slice(0, 3).map((cardContainer) => createList(cardContainer, cardAlbum))
});

const cardCount = document.getElementsByClassName("card-container");

const count = cardCount.length;
console.log(count)

uniqueBtn.addEventListener("click", event => {
    console.log(`Gli album unici presenti in questa pagina sono:`+ ` ` + `${cardCount.length}`)});

