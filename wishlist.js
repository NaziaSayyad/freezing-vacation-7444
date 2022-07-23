
let addToWishlist = () =>{
    
    
    let wishlistData = JSON.parse(localStorage.getItem("wishlistData")) || [];
    if(wishlistData.length == 0){
        emptyWishlist();
    }
    else{
        let container = document.getElementById("container");
    container.innerText = null;

    wishlistData.forEach(element => {
            let a = document.createElement("a");
            a.setAttribute("href", "http://127.0.0.1:5500/index.html")
            a.setAttribute("class", "container")
            let img = document.createElement("img");
            img.src = element.image;
            img.setAttribute("class", "wishlistimg")
            let title = document.createElement("p");
            title.innerText = element.title;
            let description = document.createElement("p");
            description.innerText = element.description;
            let price = document.createElement("p");
            price.innerText = `₹${element.price} 40% OFF`;
            let tribeprice = document.createElement("p");
            tribeprice.innerText = `₹${+(element.price )- 50} For TriBe Members`;
            let btn = document.createElement("btn");
            btn.innerText="MOVE TO BAG";
            btn.setAttribute("class", "movetobag");
            btn.addEventListener("click", function(){
                addToBag(element.id)
            });
            a.append(img)
            let div = document.createElement("div");
            div.setAttribute("class", "item")
            div.append(a, price, tribeprice,  btn);
            container.append(div)
        })
    }
        
            
    }
    let emptyWishlist = ()=>{
        let title = document.getElementById("title");
        title.innerText = null;

        let container2 = document.getElementById("container2");
        container2.innerHTML = null
        let div = document.createElement("div")
        div.setAttribute("class", "emptyWishlist")
        let img = document.createElement("img");
        img.src = "https://images.bewakoof.com/web/group-3x-1509961969.png";
        let emptytext = document.createElement("p");
        emptytext.innerText = "Your Wishlist is Empty !";
        let btn = document.createElement("button")
        let anchor = document.createElement("a");
        anchor.setAttribute("href", "index.html")
        btn.innerText = "Continue Shopping";
        btn.setAttribute("class", "continueShop");
        let div2 = document.createElement("div")
        div2.setAttribute("class", "divider")
        let emptytext2 = document.createElement("p");
        emptytext2.innerText = "You could try one of these categories:";
        emptytext2.setAttribute("class", "try")

        let div3 = document.createElement("div")
        div3.setAttribute("class", "bottomdiv")
        let table = document.createElement("table");
        table.setAttribute("class", "table");
        let p2 = document.createElement("p");
        let tr2 = document.createElement("tr");
        let tr3 = document.createElement("tr");
        let a2 = document.createElement("a");
        a2.setAttribute("href", "http://127.0.0.1:5500/index.html/menstopwear");
        let td2 = document.createElement("td");
        let a3 = document.createElement("a");
        a3.setAttribute("href", "http://127.0.0.1:5500/index.html/mensBottomwear");
        let td3 = document.createElement("td");
        let a4 = document.createElement("a");
        a4.setAttribute("href", "http://127.0.0.1:5500/index.html/mensFootwear")
        let td4 = document.createElement("td");
        let a5 = document.createElement("a");
        a5.setAttribute("href", "http://127.0.0.1:5500/index.html/mensBestsellers");
        let td5 = document.createElement("td");
        
        let div4 = document.createElement("div");
        div4.setAttribute("class", "bottomdiv")
        let table2 = document.createElement("table");
        table2.setAttribute("class", "table");
        let p3 = document.createElement("p");
        let tr4 = document.createElement("tr");
        let tr5 = document.createElement("tr");
        let a6 = document.createElement("a");
        a6.setAttribute("href", "http://127.0.0.1:5500/index.html/womensTopwear");
        let td6 = document.createElement("td");
        let a7 = document.createElement("a");
        a7.setAttribute("href", "http://127.0.0.1:5500/index.html/womensBottomwear");
        let td7 = document.createElement("td");
        let a8 = document.createElement("a");
        a8.setAttribute("href", "http://127.0.0.1:5500/index.html/womensFootwear")
        let td8 = document.createElement("td");
        let a9 = document.createElement("a");
        a9.setAttribute("href", "http://127.0.0.1:5500/index.html/womensBestsellers");
        let td9 = document.createElement("td");
        
        p2.innerText = "Men";
        td2.innerText = "Topwear";
        td3.innerText = "Bottomwear";
        td4.innerText = "Footwear";
        td5.innerText = "Bestsellers";
        a2.append(td2);
        a3.append(td3);
        a4.append(td4);
        a5.append(td5);
        tr2.append(a2, a3)
        tr3.append(a4, a5)
        table.append(tr2, tr3)
        div3.append(p2, table)
        anchor.append(btn)
        

        p3.innerText = "Women";
        td6.innerText = "Topwear";
        td7.innerText = "Bottomwear";
        td9.innerText = "Bestsellers";
        a6.append(td6);
        a7.append(td7);
        a8.append(td8);
        a9.append(td9);
        tr4.append(a6, a7)
        tr5.append(a8, a9)
        table2.append(tr4, tr5)
        div4.append(p3, table2)
        anchor.append(btn)
        div.append(img, emptytext, anchor, div2, emptytext2, div3, div4);

        container2.append(div)
    }

    function addToBag(id){
        
        let bagData = JSON.parse(localStorage.getItem("bagData")) || [];
        let wishlistData = JSON.parse(localStorage.getItem("wishlistData")) || [];
        wishlistData.forEach(el =>{
            if(id == el.id){
                bagData.push(el)
            }
        })
        let bagCount = document.getElementById("bagCount")
        bagCount.innerText = bagData.length;
        console.log(bagData.length);
        localStorage.setItem("bagData", JSON.stringify(bagData));
    }

