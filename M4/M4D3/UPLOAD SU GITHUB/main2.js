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


const api = "https://api.pexels.com/v1/search?query=people";
const token = "KD8N2WgcxfoxJ7Cf3MLRjbN2JnFW7zO0eBYYkK3QHBDn2ttUggtArf76";
const options = {
  method: `GET`,
  headers: {
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json',
      'Authorization': token,
  }

}

const cardContainer = document.getElementById("pexContainer")

fetch(api, options)
.then((response) => {
  return response.json();
})
.then((data) => {
  const photos = data.photos;
  console.log(photos)
  const img = photos.map(photo => photo.src.medium)
  console.log(img);
  const titles = photos.map(title => title.alt)
  console.log(titles);
  const authors = photos.map(author => author.photographer)
  console.log(authors);

const createCard = (data, div)=>{
    const card = createEl("div", {
    class:"card-container",}, createEl("img", {class: "card-img-top", style: `background-image: url(${img})` }), createEl("h4", {class: "card-title"}, `${title}`),createEl("h5", {class:"card-title"}, `${author}`) )
    card.appendChild(cardContainer)
    }


;

console.log(createCard())