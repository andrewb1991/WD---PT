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
        const cards = res.photos.map(card => card.src.tiny)
        console.log(cards)
        
        })
}
console.log(getPhotos())
