


// const api = "https://api.pexels.com/v1/search?query=nature";
// const token = "KD8N2WgcxfoxJ7Cf3MLRjbN2JnFW7zO0eBYYkK3QHBDn2ttUggtArf76";

// const options = {
//     method: `GET`,
//     headers: {
//         // 'Accept': 'application/json',
//         // 'Content-Type': 'application/json',
//         'Authorization': token,
//     }

// }

// const pexContainer = document.getElementById("pexContainer")
// console.log(pexContainer)

// async function getPhotos() {
//     return fetch(api, options).then(res => res.json()).then((res) => {
//         const data = res.photos
//         console.log(data)
//     })
// }
// console.log(getPhotos());

// async function getImage() {
//     return fetch(api, options).then(res => res.json()).then((res) => {
//         const images = res.photos.map(image => image.src.tiny)
//         console.log(images);
//     })
// }
// console.log(getImage());

// async function getTitle() {
//     return fetch(api, options).then(res => res.json()).then((res) => {
//         const titles = res.photos.map(title => title.alt)
//         console.log(titles)
//         })
//     }

// console.log(getTitle());

// async function getAuthor() {

//     return fetch(api, options).then(res => res.json()).then((res) => {
//         const authors = res.photos.map(author => author.photographer)
//         console.log(authors)
//     })
// }
// console.log(getAuthor())


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
 
const div = document.getElementById("pexContainer");
const card = document.createElement("div")
card.classList.add("card", "col-4");
card.append(div);


  fetch(api, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let photos = data.photos;
      console.log(photos)
      photos.map(function(photo){
    let img = document.createElement("img");
    img.classList.add("card-img-top"); 
    img.src = `${photo.src.medium}`;
    let title = document.createElement("h5");
    title.classList.add("card-title")
    let author = document.createElement("h5");
    author.classList.add("card-text")

    console.log(`${photo.src.small}`);
    title.innerHTML = `${photo.alt}`;
    console.log(`${photo.alt}`);
    author.innerHTML = `${photo.photographer}`;
    console.log(`${photo.photographer}`);

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(author);
    div.appendChild(card);


    })
    })

