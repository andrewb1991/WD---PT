const firstApi = "https://striveschool-api.herokuapp.com/books"

const getData = async (url) => {
    try{
        const data = await fetch(url);
    return await data.json();
    }
    catch(error){
    console.log(error)
    }
};

  
getData(firstApi).then((response)=>{
    const books = response.data.slice(0,49).map(books => album.data.title);
    console.log(books)

})
console.log(getData("https://striveschool-api.herokuapp.com/books"))
console.log(books.title)

// fetch(firstApi)
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   const books = book.title;
//   console.log(books)
//   const img = books.map(photo => book.src.medium)
