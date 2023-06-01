class ProductController{
    constructor(){
        this.currentId = 0;
        this.productArray = [];
    }


    addProduct(url, title, price, description){
        const productObj = {
            url,
            title,
            price,
            description,
            id: this.currentId++
        }

        this.productArray.push(productObj);
    }


    setLocalStorage(){
        localStorage.setItem("product", JSON.stringify(this.productArray));
        localStorage.setItem("current-id", JSON.stringify(this.currentId));

    }

    getLocalStorage(){
        this.productArray = JSON.parse(localStorage.getItem("product")) || [];
        this.currentId = JSON.parse(localStorage.getItem("current-id")) || 0;
        return this.productArray;
    }
}