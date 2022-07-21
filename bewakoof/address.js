saveHomeAddress = (e) => {
    e.preventDefault();
    
    let homeArr = [];
    let addressData = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        pincode: document.getElementById("pincode").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        Streetadd: document.getElementById("Streetadd").value,
        area: document.getElementById("area").value,
        landmark: document.getElementById("landmark").value,
    };
    homeArr.push(addressData)
    localStorage.setItem("homeAddress", JSON.stringify(homeArr))
    console.log(addressData)
    
}
saveOfficeAddress = (e) => {
    e.preventDefault();
    let officeArr = [];
    let addressData = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        pincode: document.getElementById("pincode").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        Streetadd: document.getElementById("Streetadd").value,
        area: document.getElementById("area").value,
        landmark: document.getElementById("landmark").value,
    };
    officeArr.push(addressData)
    localStorage.setItem("officeAddress", JSON.stringify(officeArr))
    console.log(addressData)
}
saveOtherAddress = (e) => {
    e.preventDefault();
    let othereArr = [];
    let addressData = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        pincode: document.getElementById("pincode").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        Streetadd: document.getElementById("Streetadd").value,
        area: document.getElementById("area").value,
        landmark: document.getElementById("landmark").value,
    };
    othereArr.push(addressData)
    localStorage.setItem("otherAddress", JSON.stringify(othereArr))
    console.log(addressData)
}