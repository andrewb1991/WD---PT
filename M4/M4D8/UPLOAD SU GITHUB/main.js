// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzU1MzEzODQsImV4cCI6MTY3Njc0MDk4NH0.pwa6emp1MRUP-Wx5bV08IMYPckaUd6LUmoamuRlFok4

// You can use it in your request setting the headers in this way:

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzU1MzEzODQsImV4cCI6MTY3Njc0MDk4NH0.pwa6emp1MRUP-Wx5bV08IMYPckaUd6LUmoamuRlFok4"
// }
// })
const api = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzU1MzEzODQsImV4cCI6MTY3Njc0MDk4NH0.pwa6emp1MRUP-Wx5bV08IMYPckaUd6LUmoamuRlFok4";
const val = {
    method: `GET`,
    headers: {
        "Authorization": token,
    }
}

fetch(api, val).then((res)=>{
    return res.json()
}).then((data)=>{
console.log(data)

})




    // function getData(url, options) {
    //     let searchQuery = url + "?query=people&page="+p+"&per_page=10"
    //     let options = {
    //         method: "GET",
    //         headers: h
    //     }
    //     return fetch(searchQuery, options).then(res=>res.json()).then((res)=>{
    //         if(res.error) {
    //             //alert errore
    //             return []
    //         }
    //         return res.photos
    //     })
    // }