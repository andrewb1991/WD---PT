
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

const credentialPost = {
  method: 'POST',
  headers: { 'Authorization': username },
}
const credentialGet = {
  method: 'GET',
  headers: { 'Authorization': username },
}

const credentialDelete = {
  method: 'DELETE',
  headers: { 'Authorization': username },
}

const credentialPut = {
  method: 'PUT',
  headers: { 'Authorization': username },
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

const mainCard = document.getElementById("mainContainer")
const editCard = document.getElementById("editContainer")

const createManageCard = (data, id) => {
  const card = document.createElement("div")
  card.classList.add("card", "col-lg-3", "col-md-6", "col-sm-6", "m-2")
  const cardBody = document.createElement("div")
  cardBody.classList.add("card-body")
  const immagine = document.createElement("img")
  immagine.classList.add("card-img-top")
  immagine.src = `${data.imageUrl}`
  const titolo = document.createElement("h5")
  titolo.classList.add("card-title")
  titolo.innerText = `${data.name}`
  const brand = document.createElement("h5")
  brand.innerText = `${data.brand}`
  const prezzo = document.createElement("h5")
  prezzo.innerText = `${data.price}` + "€"
  let newid = document.createElement("h5")
  newid.id = "dataID"
  newid.innerText = `${data._id}`
  const deleteBtn = document.createElement("button")
  deleteBtn.classList.add("btn", "btn-danger", "m-2")
  deleteBtn.innerText = "Delete Product"
  deleteBtn.id = "deleteBtn"
  const editBtn = document.createElement("button")
  editBtn.classList.add("btn", "btn-secondary", "m-2",)
  editBtn.innerText = "Edit Product"
  editBtn.id = "editBtn"
  editCard.append(card)
  card.append(immagine, cardBody)
  cardBody.append(titolo, brand, prezzo, id, deleteBtn, editBtn)
  deleteBtn.addEventListener("click", e =>{
    e.preventDefault()
    confirm("Are you sure to delete this product?")
      deleteData(id)
  });
  const editProduct = document.getElementById("editProduct")
  editProduct.addEventListener("click", (e =>{
    confirm("Edit this product?")
    e.preventDefault()
      editData(id)
    }
  ))
  editBtn.addEventListener("click", e =>{
  $('#myModal').modal(`toggle`)
  e.preventDefault()
  confirm("Are you sure to edit this product? The action is irreversible!")
  })

}




getData(url, credentialGet).then((res) => {
  console.log(res)
  res.map(data => {
    const savedTitle = data.name
    console.log(savedTitle)
    const savedImg = data.imageUrl
    console.log(savedImg)
    const savedBrand = data.brand
    console.log(savedBrand)
    const savedId = data._id
    console.log(savedId)
    createManageCard(data, data._id)
  })
})

const nameProduct = document.getElementById("nameProduct")
const nameBrand = document.getElementById("nameBrand")
const nameDescr = document.getElementById("nameDescr")
const nameImg = document.getElementById("nameImg")
const namePrice = document.getElementById("namePrice")
const editName = document.getElementById("editName")
const editBrand = document.getElementById("editBrand")
const editDescr = document.getElementById("editDescr")
const editImg = document.getElementById("editImg")
const editPrice = document.getElementById("editPrice")
const submitProduct = document.getElementById("submitProduct")


const getDataForm = async (id) => {
  const newName = nameProduct.value
  const newBrand = nameBrand.value
  const newDescr = nameDescr.value
  const newImg = nameImg.value
  const newPrice = namePrice.value
  const products = {
    "name": newName,
    "brand": newBrand,
    "description": newDescr,
    "imageUrl": newImg,
    "price": newPrice,
  };
  console.log(products)
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: `POST`, headers: {
      "Authorization": username,
      "Content-type": "application/json"

    }, body: JSON.stringify(products)
  })
}

const deleteData = async (id) =>{
await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,  {
  method: `DELETE`, headers: {
    "Authorization": username,
    "Content-type": "application/json"

  },
  
}).then((res)=>{
  console.log(res)
  })
} 


submitProduct.addEventListener("click", e => {
  e.preventDefault()
  if(confirm("Add this Item?")){
      getDataForm()
  }
})

const editData = async (id) =>{
   const editNames = editName.value
  const editBrands = editBrand.value
  const editDescrs = editDescr.value
  const editImgs = editImg.value
  const editPrices = editPrice.value
  const editProducts = {
    "name": editNames,
    "brand": editBrands,
    "description": editDescrs,
    "imageUrl": editImgs,
    "price": editPrices,
  }
  console.log(editProducts)
await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
method: `PUT`, headers:{
"Authorization": username,
"Content-type": "application/json"
}
, body: JSON.stringify(editProducts)
}).then((res)=>{
console.log(res)
})
}
