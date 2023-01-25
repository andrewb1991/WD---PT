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
const getData = async (url, param) => {
    try {
        const data = await fetch(url)
        return await data.json();
    }
    catch (error) {
        console.log(error)
    }
};

getData(api, options).then((response)=>{
    const titles = response.photos.map(title => title.alt)
    console.log(titles)

})
