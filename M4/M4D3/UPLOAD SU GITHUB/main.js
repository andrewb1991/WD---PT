document.querySelector("html")

// const getData =  fetch('https://api.pexels.com/v1/search?query=nature&per_page=1', {
//   headers: {Authentication: 'bYCWSCPjJWamQwXs3zmmBArA2SB08eHzzwWefZpkiyLkETmVHSsFn2dU'}
// })
//    .then(resp => resp.json())
//    .then(json => console.log(json))
//    const getData = async () => {
//     try{
//         const data = await fetch(`https://api.pexels.com/v1/search?query=nature&per_page=1`, Authentication: 'bYCWSCPjJWamQwXs3zmmBArA2SB08eHzzwWefZpkiyLkETmVHSsFn2dU'});
//     return await data.json();
//     }
//     catch(error){
//     console.log(error)
//     }
// };

const getData = async (url) => {
    try {
        const data = await fetch(url)
        return await data.json();
    }
    catch (error) {
        console.log(error)
    }
};