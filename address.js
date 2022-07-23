let saveHomeAddress = (e) => {
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
    alert("Address has been saved")
    window.location.reload();
    
}
