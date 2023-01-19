// Recuperare dall'endpoint https://epicode-crud-api.onrender.com/products tutti i prodotti presenti nel database e
// mostrarli nelle card del firstCardContainer

// aggiungere un form per aggiungere un prodotto al database
// aggiungere un form per cancellare un prodotto dal database
// aggiungere un form per modificare un prodotto

const getDialog = document.getElementById('modalAddProduct');
const closeModal = document.getElementById(`closeModal`)
const addProduct = document.getElementById('addProduct');
const secondCardContainer = document.getElementById('second-card-list');
const submitProduct = document.getElementById(`submitProduct`);
const addTitle = document.getElementById(`title`);
const addDescription = document.getElementById(`description`);
const addCategory = document.getElementById(`category`);
const addImage = document.getElementById(`image`);
const addPrice = document.getElementById(`price`);


const createEl = (type, attributes, ...children) => {
    const element = document.createElement(type)

    Object.keys(attributes).forEach((key) => {
        element.setAttribute(key, attributes[key])
    })

    children.forEach(child => {
        typeof child === 'string'
            ? element.appendChild(document.createTextNode(child))
            : element.appendChild(child)
    })

    return element
}
const createCard = (data, container) =>{
    const cardWithText = createEl('li', {},
    createEl('a', {class: 'card', href: '#'},
        createEl('p', {class: 'card-category'}, `${data.category}`),
        createEl('h3', {class: 'card-title'}, `${data.title}`),
        createEl('div', {class: 'card-img-cont'},
            createEl('img', {
                class: 'card-img',
                alt: 'alt text',
                src: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large.jpg'
            })
        ),
        createEl('p', {}, `${data.description}`)
    )
)
container.appendChild(cardWithText);
}


const getData = async () => {
    try{
        const data = await fetch(`https://epicode-crud-api.onrender.com/products/`);
    return await data.json();

    }
    catch(error){
    console.log(error)
    }
};

getData().then(products =>{
console.log(products)
products.products.map((product)=> createCard(product, secondCardContainer)) 
});

console.log(getData())
addProduct.addEventListener(`click`, event =>{
getDialog.showModal();
});

closeModal.addEventListener(`click`, event =>{
closeModal.close();
});

const getDataForm = async (e)=>{
const title = addTitle.value;
const description = addDescription.value;
const category = addCategory.value;
const image = addImage.value;
const price = addPrice.value;
const formObject = {
    title: title, 
    description: description,
    category: category,
    image: image,
    price: price,
}};

const sendData = await fetch(`https://epicode-crud-api.onrender.com/products`, {
method: `POST`,
headers: {"Content-type": "application/json"},
body: JSON.stringify(formObject),
});
