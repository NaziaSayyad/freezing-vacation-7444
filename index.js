function getData(e){
    e.preventDefault();
    let wishlistData = JSON.parse(localStorage.getItem("wishlistData")) || [];
    let products_obj = {};
    let form = document.getElementById("product_form");

    products_obj={

        image : form.image.value,
        title : form.product_name.value,
        description : form.description.value,
        price : form.product_price.value,
        ratings: form.ratings.value,
        id: form.ratings.value
    }
    console.log(products_obj)

    wishlistData.push(products_obj)
    localStorage.setItem("wishlistData", JSON.stringify(wishlistData))
}