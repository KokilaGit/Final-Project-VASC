// import ProductController from "./productController";

const productCards = getElementById("productCards");

const productController = new ProductController();




const displayProductCards = function(){
    let productArr = productController.getLocalStorage();
    productCards.innerHTML = '';
    productArr.forEach(product => {
        let card = document.createElement("div")
        card.classList.add("col-3","m-4")
        card.innerHTML = `
        <div class="card">
        <img src="${product.url}" class="card-img-top" alt="Card image">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.price}</p>
          <p class="card-text">${gear.description}</p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>`
        productCards.append(card)
    })
}



displayProductCards()