


const api = "https://api.pexels.com/v1/search?query=apple";
const token = "KD8N2WgcxfoxJ7Cf3MLRjbN2JnFW7zO0eBYYkK3QHBDn2ttUggtArf76";

const options = {
    method: `GET`,
    headers: {
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json',
        'Authorization': token,
    }

}



async function getPhotos() {
    return fetch(api, options).then(res => res.json()).then((res) => {
        let data = res.photos
        console.log(data)
    })
}
console.log(getPhotos());

async function getImage() {
    return fetch(api, options).then(res => res.json()).then((res) => {
        const images = res.photos.map(image => image.src.tiny)
        console.log(images);
    })
}
console.log(getImage());

async function getTitle() {
    return fetch(api, options).then(res => res.json()).then((res) => {
        const titles = res.photos.map(title => title.alt)
        console.log(titles)
    })
}
console.log(getTitle());

async function getAuthor() {

    return fetch(api, options).then(res => res.json()).then((res) => {
        const authors = res.photos.map(author => author.photographer)
        console.log(authors)
    })
}
console.log(getAuthor())


