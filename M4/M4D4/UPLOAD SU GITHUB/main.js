const getData = async (url) => {
    try {
        const data = await fetch(url)
        return await data.json();
    }
    catch (error) {
        console.log(error)
    }
};

getData("https://striveschool-api.herokuapp.com/books").then((responseData)=>{
console.log(responseData)
const books = responseData;
    books.forEach(title => {
        books.title
        console.log(title.title)
        const titles = document.getElementById("title")
        titles.innerText = "Titolo:" + " " + title.title
        })
        books.forEach(image =>{
        image.img
        console.log(image.img)
        const imgs = document.getElementById("imgs")
        imgs.src = image.img
        })
        books.forEach(price =>{
        price.price
        console.log(price.price)
        const prezzo = document.getElementById("price")
        prezzo.innerText = "Prezzo:"+ " " + price.price

        
        })
    
    })
  