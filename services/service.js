//creating servicearray of objects for card
const serviceArr = [
  {
    title: "Cooking",
    img: "images/cooking.jpeg",
    Description:
      "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal.",
    price: "50",
  },
  {
    title: "Grocery",
    img: "./images/grocery.jpg",
    Description:
      "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal.",
      price: "60"  
  },
  {
    title: "Health",
    img: "./images/health.jpg",
    Description:
      "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal.",
    price: "100"  
  },
  {
    title: "Entertainment",
    img: "./images/entertainment.jpeg",
    Description:
      "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal.",
    price: "150"
  },
  {
    title: "Spa",
    img: "./images/spa.jpg",
    Description:
      "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal.",
    price: "70"
  },
  {
    title: "Laundry",
    img: "./images/laundry.jpg",
    Description:
      "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal.",
    price: "30"
  },
  {
    title: "Special-Care",
    img: "./images/special-care.jpg",
    Description:
      "Our care team provides thoughtful in-home cooking services for seniors to ensure you have the most enjoyable culinary experience at every meal.",
    price: "170"
  },
];

//adding content to servicecard 
let serviceElement = document.getElementById("service");
serviceArr.forEach((service) => {
  let serviceCard = document.createElement("div");
  serviceCard.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${service.img}" class="card-img-top" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">${service.title}</h5>
    <p class="card-text">${service.Description}</p>
    <p id = "price">$${service.price}</p>
    <a href="#" data-id = ${service.title} class="btn btn-primary">Select Service</a>
  </div>
  </div>`;
  serviceElement.appendChild(serviceCard);
});

//adding event listener to display selected service on the side 
let selectServiceBtn = document.querySelectorAll(".btn");
selectServiceBtn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const list = document.querySelectorAll("#listElement");
    let addFlag = true;
    let totalPrice = 0;
    for (let i = 0; i < list.length; i++) {
      //splitting the list to compare only the title value to the selected service
      let listValue = list[i].innerHTML.split(" ");
       totalPrice += Number(listValue[1].replace("-$"," "));
      if (listValue[0] === event.target.getAttribute("data-id")) {
        addFlag = false;
      }
    }

    if (addFlag) {
      const userList = document.getElementById("selectedList");
      if(list.length === 0){
        let heading = document.createElement("h2")
        heading.innerHTML = "Selected Service"
        userList.appendChild(heading)
      }
      let priceElement = serviceArr.find(x => x.title === event.target.getAttribute("data-id")).price;
      userList.innerHTML += `
      <li id = "listElement">${event.target.getAttribute("data-id")} -$${priceElement}</li>`
      let total = document.querySelector(".total")
      total.innerHTML = `Total=${totalPrice += Number(priceElement)}`;
      
    } else {
      alert("Duplicate item");
    }
  });
});
