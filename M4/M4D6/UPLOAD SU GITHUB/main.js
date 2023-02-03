const createCard = (data) => {
    const addName = document.createElement("h5")
    addName.innerText = `${data.name}`
    const card = document.getElementById("newCard")
    const addUsername = document.createElement("h5")
    addUsername.innerText = `${data.username}`
    const addEmail = document.createElement("h5")
    addEmail.innerText = `${data.email}`
    const mainCard = document.getElementById("mainCard")
    const div = document.createElement("div")
    div.style.border = "2px solid yellow"
    div.style.width = "16rem"
    div.style.margin = "1rem"
    mainCard.append(div)
    div.append(card, addName, addUsername, addEmail)
}


const getData = async (url) => {
    try {
        const data = await fetch(url)
        return await data.json();
    }
    catch (error) {
        console.log(error)
    }
}

getData("https://jsonplaceholder.typicode.com/users").then((res) => {
    console.log(res)
    res.map(data => {

        const name = data.name
        const username = data.username
        const email = data.email
        console.log(name)
        console.log(username)
        console.log(email)
        createCard(data)
        const searchBar = document.getElementById("inputSearch")
        searchBar.addEventListener("input", e => {
            const research = e.target.value
            console.log(research)
            getData("https://jsonplaceholder.typicode.com/users").then((res) => {
                res.filter(data => {
                    const resultName = data.name.includes(research)
                    const buttonSearch = document.getElementById("buttonSearch")
                    buttonSearch.addEventListener("click", (e)=>{
                    createCard(resultName)
                    
                })

})
            })

        })
    })
})
