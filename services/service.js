const serviceArr = [
  {title: "Cooking",
   img: "images/cooking.jpeg",
   Description: "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal." },
   {title: "Grocery",
   img:"./images/grocery.jpg",
   Description: "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal." },
   {title: "Health",
   img:"./images/health.jpg"  ,
   Description: "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal." },
   {title: "Entertainment",
   img:"./images/entertainment.jpeg"  ,
   Description: "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal." },
   {title: "Spa",
   img:"./images/spa.jpg"  ,
   Description: "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal." },
   {title: "Laundry",
   img:"./images/laundry.jpg"  ,
   Description: "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal." },
   {title: "Special-Care",
   img:"./images/special-care.jpg"  ,
   Description: "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal." }]


let serviceElement = document.getElementById("service");
serviceArr.forEach(service => {
  let serviceCard = document.createElement("div");
  serviceCard.classList.add("col-4");
  serviceCard.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${service.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${service.title}</h5>
    <p class="card-text">${service.Description}</p>
    <a href="#" class="btn btn-primary">Select Service</a>
  </div>
  </div>`
  

  serviceElement.appendChild(serviceCard);
})

