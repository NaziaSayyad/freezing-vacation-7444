document.querySelector("form").addEventListener("submit",proceed);
function proceed(event){
    event.preventDefault();
    let cardnum=1234567812345678;
    let cvv=123;
    let expiry="02/26";
    let enterednum=document.querySelector("#cardno").value;
    let enteredcvv=document.querySelector("#cvv").value;
    let enteredexpiry=document.querySelector("#date").value;
    
    if(enterednum==cardnum && enteredcvv==cvv && enteredexpiry==expiry){
         window.location.href="otp.html";
        }else{
            alert("Invalid Credentials!");
            document.querySelector("#cardno").value="";
            document.querySelector("#cvv").value="";
            document.querySelector("#date").value="";
          }  
    }

    let x=localStorage.getItem("cart-amount")||[];
    document.querySelector("#amt1").innerHTML=x;
    document.querySelector("#amt2").innerHTML=x;


    let cartitem =JSON.parse(localStorage.getItem("bagData")) || [];
    console.log("cartitem:",cartitem.length)
    console.log("cartitem:",cartitem)
    
    document.querySelector("#quanT").innerHTML=cartitem.length;