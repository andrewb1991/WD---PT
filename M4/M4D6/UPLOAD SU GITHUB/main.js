const getData = async (url) => {
    try {
        const data = await fetch(url)
        return await data.json();
    }
    catch (error) {
        console.log(error)
    }
}

getData("https://jsonplaceholder.typicode.com/users").then((res)=>{
console.log(res)
res.map(data =>{
const name = data.name
const username = data.username
const email = data.email
const addName = document.createElement("h5")
addName.innerText = `${data.name}`
console.log(name)  
const card = document.getElementById("newCard")
const addUsername = document.createElement("h5")
addUsername.innerText = `${data.username}`
console.log(username)
console.log(email)  
const addEmail = document.createElement("h5")
addEmail.innerText = `${data.email}`
const mainCard = document.getElementById("mainCard")
const div = document.createElement("div")
div.style.border = "2px solid yellow"
div.style.width = "16rem"
div.style.margin = "2rem"
mainCard.append(div)
div.append(card, addName, addUsername, addEmail)
});
})
