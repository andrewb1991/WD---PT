
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

const credential = {method:'POST',
headers: {'Authorization': username}
}

// const postData = async (url, credential) =>{
//     try{
//         const data = await fetch(url, credential)
//           return await data.json();
//         }
//     catch (error) {
//         console.log(error)
//     }
// }



//     const sendData = await fetch(`https://epicode-crud-api.onrender.com/products`, {
//     method: `POST`,
//     headers: {"Content-type": "application/json"},
//     body: JSON.stringify(formObject),
//     });
    
const sendData = () =>{
    fetch(url, credential)
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
    })
}

sendData()

const nameProduct = document.getElementById("nameProduct")
const nameBrand = document.getElementById("nameBrand")
const nameImg = document.getElementById("nameImg")
const namePrice = document.getElementById("namePrice")


const postDataForm = async (e)=>{
const name = nameProduct.value
console.log(name)
}

    //   const getDataForm = async (e)=>{
    //     const title = addTitle.value;
    //     const description = addDescription.value;
    //     const category = addCategory.value;
    //     const image = addImage.value;
    //     const price = addPrice.value;
    //     const formObject = {
    //         title: title, 
    //         description: description,
    //         category: category,
    //         image: image,
    //         price: price,
    //     }};
        

    //   const getDialog = document.getElementById('modalAddProduct');
    //   const closeModal = document.getElementById(`closeModal`)
    //   const addProduct = document.getElementById('addProduct');
    //   const secondCardContainer = document.getElementById('second-card-list');
    //   const submitProduct = document.getElementById(`submitProduct`);
    //   const addTitle = document.getElementById(`title`);
    //   const addDescription = document.getElementById(`description`);
    //   const addCategory = document.getElementById(`category`);
    //   const addImage = document.getElementById(`image`);
    //   const addPrice = document.getElementById(`price`);
       


    

    //   const createEl = (type, attributes, ...children) => {
    //     const element = document.createElement(type)
    
    //     Object.keys(attributes).forEach((key) => {
    //         element.setAttribute(key, attributes[key])
    //     })
    
    //     children.forEach(child => {
    //         typeof child === 'string'
    //             ? element.appendChild(document.createTextNode(child))
    //             : element.appendChild(child)
    //     })
    
    //     return element
    // }
    // const createCard = (data, container) =>{
    //     const cardWithText = createEl('li', {},
    //     createEl('a', {class: 'card', href: '#'},
    //         createEl('p', {class: 'card-category'}, `${data.category}`),
    //         createEl('h3', {class: 'card-title'}, `${data.title}`),
    //         createEl('div', {class: 'card-img-cont'},
    //             createEl('img', {
    //                 class: 'card-img',
    //                 alt: 'alt text',
    //                 src: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large.jpg'
    //             })
    //         ),
    //         createEl('p', {}, `${data.description}`)
    //     )
    // )
    // container.appendChild(cardWithText);
    // }
    
    //   “`jsx
    //   {
    //   “_id”: “5d318e1a8541744830bef139”, // SERVER GENERATED
    //   “name”: “3310 cellphone”, // REQUIRED
    //   “description”: “An unforgettable icon.”, // REQUIRED
    //   “brand”: “Nokia”, // REQUIRED
    //   “imageUrl”: “https://bit.ly/3CExjRa”, // REQUIRED
    //   “price”: 100, // REQUIRED
    //   “userId”: “admin”, // SERVER GENERATED
    //   “createdAt”: “2021-09-19T09:32:10.535Z”, // SERVER GENERATED
    //   “updatedAt”: “2021-09-19T09:32:10.535Z”, // SERVER GENERATED
    //   “__v”: 0 // SERVER GENERATED
    //   }
    //   “`