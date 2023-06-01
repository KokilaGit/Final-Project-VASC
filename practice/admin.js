// import {ProductController} from "./productController";

// DOM VARIABLES

const productForm = document.getElementById("productForm");
const productRows = document.getElementById("productRows");


const productController = new ProductController();




const displayProductInventory = function(){
    let productArr = productController.getLocalStorage()
    productRows.innerHTML = ''
    productArr.forEach(product => {
        let row = document.createElement("tr");
        row.setAttribute("data-id", product.id);
        row.innerHTML = `
        <td><img src="${product.url}" height=50px width=50px></td>
        <td>${product.title}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        `
        productRows.append(row)
    })

    console.log(productArr)

}



// EVENT LISTENERS
productForm.addEventListener("submit", function(event){
    event.preventDefault()
    const productUrl = document.getElementById("productURL").value
    const productTitle = document.getElementById("productTitle").value
    const productDescription = document.getElementById("productDescription").value
    const productPrice = document.getElementById("productPrice").value

    productController.addProduct(productUrl, productTitle, productDescription, productPrice)
    productController.setLocalStorage()
    
    displayProductInventory()


    productForm.reset()
})

displayProductInventory()