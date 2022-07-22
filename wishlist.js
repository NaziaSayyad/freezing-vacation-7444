
let addToWishlist = () =>{
    let container = document.getElementById("container");
    let data = JSON.parse(localStorage.getItem("products")) || [];
    console.log(data)    
    let div = document.createElement("div");
    data.forEach(element => {
            let img = document.createElement("img");
            img.src = element.image;
            let title = document.createElement("p");
            title.innerText = element.title;
            let description = document.createElement("p");
            description.innerText = element.description;
            let price = document.createElement("p");
            price.innerText = `₹${element.price}`;
            let btn = document.createElement("btn");
            btn.setAttribute("click", addToBag())
            div.append(img, title, description, price, btn);
        })
        
        container.append(div)    
    }

    let addToBag = () =>{
        let data = JSON.parse(localStorage.getItem("products")) || [];
    console.log(data)
    }

