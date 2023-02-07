
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

// const dataImage = document.getElementById("dataImage")
// const dataTitle = document.getElementById("dataTitle")
// const dataBrand = document.getElementById("dataBrand")
// const dataId = document.getElementById("dataId")
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
const mainCard = document.getElementById("mainContainer")
const editCard = document.getElementById("editContainer")
const rowBtn = document.createElement("div")
const editBtn = document.createElement("div")
const deleteBtn = document.createElement("div")
const createManageCard = (data) =>{
  const card = document.createElement("div")
  card.classList.add("card", "col-lg-3", "col-md-6", "col-sm-6", "m-1")
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
  const prezzo = document.createElement("h4")
  prezzo.innerText = `${data.price}` + "€"
  editBtn.classList.add("btn", "btn-danger")
  editBtn.innerText = "Edit Product"
  deleteBtn.classList.add("btn", "btn-danger")
  deleteBtn.innerText = "Delete Product"
  rowBtn.classList.add("row", "d-flex", "justify-content-around")
  editCard.append(card)
  card.append(immagine, cardBody, rowBtn)
  cardBody.append(titolo, brand, prezzo, rowBtn)
  rowBtn.appendChild(editBtn, deleteBtn)
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
  const savedId = data._id
  console.log(savedId)
  // dataImage.src = savedImg
  // dataTitle.innerText = `${savedTitle}`  
  // dataBrand.innerText = `${savedBrand}`
  createManageCard(data)
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

// deleteProduct.addEventListener("click", e =>{
// deleteData()

// })
