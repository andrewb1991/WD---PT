
  const api = "https://api.pexels.com/v1/search?query=friends";
  const token = "KD8N2WgcxfoxJ7Cf3MLRjbN2JnFW7zO0eBYYkK3QHBDn2ttUggtArf76";
  const options = {
    method: `GET`,
    headers: {
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json',
        'Authorization': token,
    }

}

fetch(api, options)
.then((response) => {
  return response.json();
})
.then((data) => {
  const photos = data.photos;
  console.log(photos)
  photos.map(function(photo){
    const img = photo.src.medium;
    const title = photo.alt;
    const author = photo.photographer;
const immagine = document.createElement("img");
immagine.classList.add("card-img-top")
immagine.src = `${img}`
console.log(`${photo.src.large}`);
let titolo = document.createElement("h3");
titolo.classList.add("card-title")
titolo.innerHTML = `${title}`;
console.log(`${photo.alt}`);
let autore = document.createElement("h5");
autore.classList.add("card-text")
autore.innerHTML = `${author}`;
console.log(`${photo.photographer}`);
const div = document.getElementById("pexContainer");
const container = document.getElementsByClassName("container")
  div.appendChild(immagine);
  div.appendChild(titolo);
  div.appendChild(autore);
  container.append(div
    )
})
  
});





// const ids = document.getElementById("photoId");
// ids.innerText = `${photo.id}`;



// const btnClose = document.getElementById("btnClose");

// btnClose.addEventListener("click", event =>{
// div.style.display = `none`;
// console.log(btnClose);
