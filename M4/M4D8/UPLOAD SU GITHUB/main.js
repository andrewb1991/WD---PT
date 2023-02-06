
// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzU1MzEzODQsImV4cCI6MTY3Njc0MDk4NH0.pwa6emp1MRUP-Wx5bV08IMYPckaUd6LUmoamuRlFok4

// You can use it in your request setting the headers in this way:

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzU1MzEzODQsImV4cCI6MTY3Njc0MDk4NH0.pwa6emp1MRUP-Wx5bV08IMYPckaUd6LUmoamuRlFok4"
// }
// })


const url = "https://striveschool-api.herokuapp.com/api/product/";

const username = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzU1MzEzODQsImV4cCI6MTY3Njc0MDk4NH0.pwa6emp1MRUP-Wx5bV08IMYPckaUd6LUmoamuRlFok4";

const dataImage = document.getElementById("dataImage")
const dataTitle = document.getElementById("dataTitle")
const dataBrand = document.getElementById("dataBrand")
const dataId = document.getElementById("dataId")
const credentialPost = {method:'POST',
headers: {'Authorization': username}, 
}
const credentialGet = {method:'GET',
headers: {'Authorization': username}, 
}

const credentialDelete = {method:'DELETE',
headers: {'Authorization': username}, 
}

const getData = async (url, credentialPost) => {
  try {
      const data = await fetch(url, credentialPost)
      return await data.json();
  }
  catch (error) {
      console.log(error)
  }
}

// const deleteData = async ("https://striveschool-api.herokuapp.com/api/product/"+`${dataId}`, credentialDelete) => {
//   try {
//       const data = await fetch("https://striveschool-api.herokuapp.com/api/product/"+`${dataId}`, credentialDelete)
//       return await data.json();
//   }
//   catch (error) {
//       console.log(error)
//   }
// }
// const createEl = (type, attributes, ...children) => {
//   const element = document.createElement(type)

//   Object.keys(attributes).forEach((key) => {
//       element.setAttribute(key, attributes[key])
//   })

//   children.forEach(child => {
//       typeof child === 'string'
//           ? element.appendChild(document.createTextNode(child))
//           : element.appendChild(child)
//   })

//   return element
// }
// const createCard = (data, container) =>{
//   const cardWithText = createEl('li', {},
//   createEl('a', {class: 'card', href: '#'},
//       createEl('p', {class: 'card-category'}, `${data.category}`),
//       createEl('h3', {class: 'card-title'}, `${data.title}`),
//       createEl('div', {class: 'card-img-cont'},
//           createEl('img', {
//               class: 'card-img',
//               alt: 'alt text',
//               src: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large.jpg'
//           })
//       ),
//       createEl('p', {}, `${data.description}`)
//   )
// )
// container.appendChild(cardWithText);
// }


getData(url, credentialGet).then((res) => {
  console.log(res)
  res.forEach(data =>{
  const savedTitle = data.name
  console.log(savedTitle)
  const savedImg = data.imageUrl
  console.log(savedImg)
  const savedBrand = data.brand
  console.log(savedBrand)
  const savedId = data._id
  console.log(savedId)
  dataImage.src = savedImg
  dataTitle.innerText = `${savedTitle}`  
  dataBrand.innerText = `${savedBrand}`
  })
  })

const nameProduct = document.getElementById("nameProduct")
const nameBrand = document.getElementById("nameBrand")
const nameDescr = document.getElementById("nameDescr")
const nameImg = document.getElementById("nameImg")
const namePrice = document.getElementById("namePrice")
const submitProduct = document.getElementById("submitProduct")
const deleteProduct = document.getElementById("deleteProduct")


const getDataForm = async (e) =>{
const newName = nameProduct.value
const newBrand = nameBrand.value
const newDescr = nameDescr.value
const newImg = nameImg.value
const newPrice = namePrice.value
const products = {
  "name": newName, 
  "brand": newBrand,
  "description":newDescr,
  "imageUrl":newImg,
  "price": newPrice,
  };
  console.log(products)

  fetch("https://striveschool-api.herokuapp.com/api/product/", {method: `POST`, headers: {
  "Authorization": username,
  "Content-type": "application/json"


}, body: JSON.stringify(products)
})};


submitProduct.addEventListener("click", e =>{
getDataForm()
})

deleteProduct.addEventListener("click", e =>{
deleteData()

})
