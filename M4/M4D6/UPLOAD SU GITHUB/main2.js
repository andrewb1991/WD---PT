const dataUsers = []

const loadUsers = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const dataUsers = await res.json();
        console.log(dataUsers)
    }
    catch (err) {
        console.log(err)
    }
}

loadUsers()


const displayUsers = (data) =>{
const htmlString = data.map((user)=>{
const name = user.name
const email = user.email
const username = user.username

})

}
displayUsers()
