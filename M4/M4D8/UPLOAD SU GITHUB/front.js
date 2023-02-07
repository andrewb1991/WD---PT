
const url = "https://striveschool-api.herokuapp.com/api/product/";

const username = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzU1MzEzODQsImV4cCI6MTY3Njc0MDk4NH0.pwa6emp1MRUP-Wx5bV08IMYPckaUd6LUmoamuRlFok4";

const credentialGet = {method:'GET',
headers: {'Authorization': username}, 
}

const mainContainer = document.getElementById("container")
const secondCardContainer = document.getElementById("secondCardContainer")

const getData = async (url, credentialPost) => {
    try {
        const data = await fetch(url, credentialPost)
        return await data.json();
    }
    catch (error) {
        console.log(error)
    }
  }
  

const createEl = (type, attributes, ...children) => {
  const element = document.createElement(type)

  Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key])
  })

  children.forEach(child => {
      typeof child === 'string'
          ? element.appendChild(document.createTextNode(child))
          : element.appendChild(child)
  })

  return element
}

  getData(url, credentialGet).then((res) => {
    console.log(res)
    res.map(data =>{
    const savedTitle = data.name
    console.log(savedTitle)
    const savedImg = data.imageUrl
    console.log(savedImg)
    const savedBrand = data.brand
    console.log(savedBrand)
    const savedDescr = data.description
    console.log(savedDescr)
    createCard(data)
    })
})

const mainCard = document.getElementById("mainContainer")


const createCard = (data) =>{
    const card = document.createElement("div")
    card.classList.add("card", "col-lg-2", "col-md-5", "col-sm-6", "m-2")
    // card.style.add = "width:6rem"
    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    const immagine = document.createElement("img")
    immagine.classList.add("card-img-top")
    immagine.src = `${data.imageUrl}`
    const titolo = document.createElement("h5")
    titolo.classList.add("card-title")
    titolo.innerText = `${data.name}`
    const brand = document.createElement("h4")
    brand.innerText = `${data.brand}`
    const descr = document.createElement("p")
    descr.innerText = `${data.description}`
    descr.classList.add("card-text")
    const prezzo = document.createElement("h4")
    prezzo.innerText = `${data.price}` + "€"
    mainCard.append(card)
    card.append(immagine, cardBody)
    cardBody.append(titolo, brand, descr, prezzo)
}

  