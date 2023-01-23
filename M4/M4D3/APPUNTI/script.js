const createEl = (type, attributes, ...children) => {
    const element = document.createElement(type);
    Object.keys(attributes).forEach((key) => {
        element.setAttribute(key, attributes[key])
    })
    children.forEach((child) => {
        typeof child === "string"
            ? element.appendChild(document.createTextNode(child)) : element.appendChild(child)
    })
    return element;
};


const getData = async (url) => {
    // try {
        const data = await fetch(url)
        return await data.json();
    }
    // catch (error) {
    //     console.log(error)
    // }
// };


getData("https://dummyjson.com/#:~:text=GET-,/products,-//%20get%20all%20products").then((response) =>{
response.data.map(product => products.title);
console.log(response);
});







// 