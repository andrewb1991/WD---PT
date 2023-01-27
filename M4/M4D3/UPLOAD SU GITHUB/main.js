
function createCard ({src, alt, photographer, id, api}){
const myModal = new bootstrap.Modal(`#imageModal`)
let div = document.createElement("div")
div.classList.add("col-md-4")

let card = document.createElement("div")
card.classList.add("card", "mb-4", "shadow-sm")
let img = document.createElement("img")
img.classList.add("bd-placeholder-img", "card-img-top")
img.src = src.medium

let cardBody = document.createElement("div")
cardBody.classList.add("card-body")

let h4 = document.createElement("h4")
h4.classList.add("card-text")
h4.innerText = alt

let h5 = document.createElement("h5")
h5.classList.add("card-text")
h5.innerText = photographer

let flex = document.createElement("div")
flex.classList.add("d-flex", "justify-content-between", "align-items-center")

let group = document.createElement("div")
group.classList.add("btn-group")

let btn = document.createElement("button")
btn.classList.add("btn","btn-sm", "btn-outline-secondary")
btn.innerText = "Nascondi"
btn.addEventListener("click", (e)=>{
  div.classList.add("d-none")
})
let btnV = document.createElement("button")
btnV.classList.add("btn","btn-sm", "btn-outline-secondary")
btnV.innerText = "View"
btnV.addEventListener("click", (e)=>{
  location.href=url
  document.getElementById("modalImg").src = src.original
  myModal.show()
})

let small = document.createElement("small")
small.classList.add("text-muted")
small.innerText = id

group.append(btn, btnV)
flex.append(group, small)
cardBody.append(p, flex)
card.append(img, cBody)
div.append(card)


return div
}



function getData(p=1){
  const api = "https://api.pexels.com/v1/search?query=tech";
  const token = "KD8N2WgcxfoxJ7Cf3MLRjbN2JnFW7zO0eBYYkK3QHBDn2ttUggtArf76";
  const options = {
  method: `GET`,
  headers: {
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json',
      'Authorization': token,
  }
}
return fetch(api,options).then(res=>res.json()).then((res)=>{
  if(res.error){
  return []
}
  return res.photos
})

}

console.log(getData())


window.addEventListener("DOMContentLoaded", (e)=>{
  let page = 1
  let mainContent = document.getElementById("mainContent")

  getData().then(res=>{
      let apis = res.map((e)=>{
          return e.url
      })
      console.log("URLs", apis);
  })
  document.getElementById("loadBTN").addEventListener("click", (e)=>{
    getData(p=1).then(res=>{
        console.log(res);
        mainContent.innerHTML = ""
        res.forEach((el)=>{
            const c = creaCard(el)
            mainContent.append(c)
})



      })
  })
})
// fetch(api, options)
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const photos = data.photos;
//   console.log(photos)
//   photos.map(function(photo){
//     const img = photo.src.medium;
//     const title = photo.alt;
//     const author = photo.photographer;
// const immagine = document.createElement("img");
// immagine.classList.add("card-img-top")
// immagine.src = `${img}`
// console.log(`${photo.src.large}`);
// let titolo = document.createElement("h3");
// titolo.classList.add("card-title")
// titolo.innerHTML = `${title}`;
// console.log(`${photo.alt}`);
// let autore = document.createElement("h5");
// autore.classList.add("card-text")
// autore.innerHTML = `${author}`;
// console.log(`${photo.photographer}`);
// const div = document.getElementById("pexContainer");
// const container = document.getElementsByClassName("container")
//   div.append(container)
//   div.appendChild(immagine);
//   div.appendChild(titolo);
//   div.appendChild(autore);
// })
  
// });





// const ids = document.getElementById("photoId");
// ids.innerText = `${photo.id}`;



// const btnClose = document.getElementById("btnClose");

// btnClose.addEventListener("click", event =>{
// div.style.display = `none`;
// console.log(btnClose);
