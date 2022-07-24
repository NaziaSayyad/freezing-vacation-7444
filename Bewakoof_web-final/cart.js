document.querySelector(".checkout").addEventListener("click",function(){
    
    window.location.href="payment.html";
})



let cartdata = () =>{
    let bagData = JSON.parse(localStorage.getItem("bagData")) || [];
    console.log("storage value:", bagData);
    if(bagData.length == 0){
        emptyBag();
    }

    else{
        let bagData = JSON.parse(localStorage.getItem("bagData")) || [];
    bagData.innerText = null;

    let bagCount = document.getElementById("bagCount");
    bagCount.innerText = `My Bag ${bagData.length} item(s)`;

        let headerdiv = document.getElementById("headerdiv");
        headerdiv.setAttribute("class", "welcometext")

        let car = document.createElement("img");
        car.src = "	https://images.bewakoof.com/web/Red-truck.png";

        let freedel = document.createElement("div");
        freedel.innerText = "Yay! You get FREE delivery on this order";
        
        headerdiv.append(car, freedel)
    
        let container = document.getElementById("cartItems");
        container.innerHTML = null
        
         bagData.forEach( function(element,index){
           
            let details = document.createElement("div")
            let img = document.createElement("img");
            img.src =   element.image;

            console.log(img,"img:")
            img.setAttribute("class", "wishlistimg");

            let title = document.createElement("p");
            title.innerText =   element.title;
            
            let description = document.createElement("p");
            description.innerText =  element.description;
            
            let price = document.createElement("p");
            price.innerText = `₹${element.price} 40% OFF`;
            
            let saved = document.createElement("p");
            saved.innerText = `You saved ₹${1200 - (+(element.price))}!`;
            pricesum(element.price);

            let drop = document.createElement("div");
            let size = document.createElement("select");

            let opt1 = document.createElement("option");
            opt1.innerText = "S";

            let opt2 = document.createElement("option");
            opt2.innerText = "L";
            let opt3 = document.createElement("option");
            opt3.innerText = "XL";
            let opt4 = document.createElement("option");
            opt4.innerText = "2XL";
            let opt5 = document.createElement("option");
            opt5.innerText = "3XL";
            size.append(opt1, opt2, opt3, opt4, opt5)

            let qty = document.createElement("select");
            let opt11 = document.createElement("option");
            opt11.innerText = "1";
            let opt12 = document.createElement("option");
            opt12.innerText = "2";
            let opt13 = document.createElement("option");
            opt13.innerText = "3";
            let opt14 = document.createElement("option");
            opt14.innerText = "4";
            let opt15 = document.createElement("option");
            opt15.innerText = "S";
            let opt16 = document.createElement("option");
            opt16.innerText = "6";
            let opt17 = document.createElement("option");
            opt17.innerText = "7";
            let opt18 = document.createElement("option");
            opt18.innerText = "8";
            let opt19 = document.createElement("option");
            opt19.innerText = "9";
            let opt20 = document.createElement("option");
            opt20.innerText = "10";

            qty.append(opt11, opt12, opt13, opt14, opt15, opt16, opt17, opt18, opt19, opt20)

            drop.append(size, qty)
            drop.setAttribute("class", "drop")

            let buttons = document.createElement("div")
            buttons.setAttribute("class", "buttons")
            let remove = document.createElement("button");
            remove.innerText="Remove";
            remove.addEventListener("click", function(){
                rem_product(element,index);
            });
            
            let addToWishlist = document.createElement("button");
            addToWishlist.innerText="Move to Wishlist";
            addToWishlist.addEventListener("click", ()=>{
                addToWishlist(element.id);
                window.location.href="wishlist.html";
            })
            buttons.append(remove, addToWishlist)
            details.append(title, description, price, saved, drop)
            let box = document.createElement("div");
            box.setAttribute("class","box")
            
            box.append(details, img)
            container.append(box, buttons)
         });
    }
    
}
let rem_product = (index)=>{
    bagData.splice(index,1);
    localStorage.setItem("cart_item",JSON.stringify(bagData))
}
let sum = 0
let payment=0
function pricesum(price){
        
        sum+=(+price)
        totalsum = document.getElementById("totalPrice");
        totalsum.innerText = `₹${+sum}`;
        finalprice(+sum)
        savings(+sum)
        console.log(sum)
    }

function finalprice(totalsum){
    console.log(totalsum)
    let discount = document.getElementById("discount")
    discount.innerText= "-₹700";
    let payment = totalsum-700;
    let topay = document.getElementById("topay")
    topay.innerText = `₹${payment}`
    let carltvalue = document.getElementById("cartvalue")
    carltvalue.innerHTML = `₹${payment}`;
}

function savings(sum){
    let savings = document.getElementById("savings");
    savings.innerText = `You are saving ₹ ${sum -700-345} on this order`;

}

let emptyBag = () =>{

    let container1 = document.getElementById("headerdiv");
    let container2 = document.getElementById("cartItems");
    let container = document.getElementById("container");
    let container3 = document.getElementById("wishlist");
        container.innerHTML = null
        container1.innerHTML = null
        container2.innerHTML = null
        container3.innerHTML = null
        let div = document.createElement("div")
        div.setAttribute("class", "emptycart")
        let img = document.createElement("img");
        img.src = "https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png";
        let emptytext = document.createElement("p");
        emptytext.innerText = "Nothing in the bag";
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

        container.append(div)
    }
let wishlist = () =>{

    let wishlistData = JSON.parse(localStorage.getItem("wishlistData")) || [];
    console.log("whi:",wishlistData);

    let wishlist = document.getElementById("wishlist");
    wishlist.innerText = null;

    let bagCount = document.getElementById("bagCount");
    bagCount.innerText = `My Bag ${wishlistData.length} item(s)`;

    wishlistData.forEach(element => {
            let wishlista = document.createElement("a");
            wishlista.setAttribute("href", "http://127.0.0.1:5500/index.html")
            let wishlistimg = document.createElement("img");
            wishlistimg.src = element.image;
            wishlistimg.setAttribute("class", "wishlistimg")
            let wishlisttitle = document.createElement("p");
            wishlisttitle.innerText = element.title;
            let wishlistdescription = document.createElement("p");
            wishlistdescription.innerText = element.description;
            let wishlistprice = document.createElement("p");
            wishlistprice.innerText = `₹${element.price} 40% OFF`;
            let wishlisttribeprice = document.createElement("p");
            wishlisttribeprice.innerText = `₹${+(element.price )- 50} For TriBe Members`;
            let wishlistbtn = document.createElement("btn");
            wishlistbtn.innerText="MOVE TO BAG";
            wishlistbtn.setAttribute("class", "movetobag");
            wishlistbtn.addEventListener("click", function(){
                addToBag(element.id)
            });
            wishlista.append(wishlistimg)
            let wishlistdiv = document.createElement("div");
            wishlistdiv.setAttribute("class", "item")
            wishlistdiv.append(wishlista, wishlistprice, wishlisttribeprice,  wishlistbtn);
            wishlist.append(wishlistdiv)
        })
    }

    function addToBag(id){
        window.location.reload()
        let bagData = JSON.parse(localStorage.getItem("bagData")) || [];
        let wishlistData = JSON.parse(localStorage.getItem("wishlistData")) || [];
        wishlistData.forEach(el =>{
            if(id == el.id){
                bagData.push(el)
            }
        })
        localStorage.setItem("bagData", JSON.stringify(bagData));
    }
    wishlist()
    