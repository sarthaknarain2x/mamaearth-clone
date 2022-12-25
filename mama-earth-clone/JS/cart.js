var mamaEarthData = JSON.parse(localStorage.getItem("mamaEarthProducts"));

var data = JSON.parse(localStorage.getItem("CartItems")) || [];

var loggedUser = JSON.parse(localStorage.getItem("userDetail"));
var userID = [];

if (loggedUser != null) {
    var userID = loggedUser;      
}
var usercart = []
data.forEach(element => {
    if(element.userEmail == userID[0].email)
    usercart.push(element)
});
console.log(usercart);

let counter = 0;

var container  = document.querySelector(".left-section");
if(usercart.length == 0 || usercart == undefined || usercart == null)
{
    container.innerHTML = `<h1>No Products in your cart</h1>`;
}

else{    
var totalAmount = 0;
usercart.forEach(item => {
    var tempData = []
    mamaEarthData.forEach(el => {
        if(el.id == item.productId)
            tempData.push(el);
    })
    // console.log(tempData)
    totalAmount += tempData[0].price;
    container.innerHTML += 
    `
    <div class = "card">
    <div><img src = ${tempData[0].imgUrl[0]}></div>   
    <div id="titleNprice">
    <h3>${tempData[0].title}</h3>
    <p><span class="iconify" data-icon="icons8:rupee"></span>${tempData[0].price}</p>
    </div>  
            
    `
    counter++
})

var tax = (totalAmount/100 *2) +" "+ "(2% Gst charges)"

var final = totalAmount+(totalAmount/100 *2)
var totalPrice = document.querySelectorAll("#total-price");
var finalPrice = document.querySelectorAll("#final-price");
totalPrice[0].innerHTML = '<span class="iconify" id="priceSummaryIcon" data-icon="icons8:rupee"></span>'+ totalAmount ;
finalPrice[0].innerHTML = '<span class="iconify" id="priceSummaryIcon"data-icon="icons8:rupee"></span>'+ final;
}
//======================================================================================================================

let GST = document.getElementById('GstCharges')

GST.textContent ="+"+ tax

console.log(final)

// localStorage.setItem('the_counter',JSON.stringify(counter))

// document.getElementById('coup').addEventListener('click',discount)

function discount(){
    var dis = document.getElementById('coupon').value
    var ded = final - 300;
    var ded2 = final - 500;
    if(dis == "MASAI300" || dis == "CHRISTMAS300" ){
       
        finalPrice[0].innerHTML = '<span class="iconify" id="priceSummaryIcon"data-icon="icons8:rupee"></span>'+ ded;
        alert('Coupon applied ₹300 deducted')
    }else if(dis == "SALE500" || dis == "MAMAEARTH500"){
        
        finalPrice[0].innerHTML = '<span class="iconify" id="priceSummaryIcon"data-icon="icons8:rupee"></span>'+ ded2;
        alert('Coupon applied ₹500 deducted')
    }
}

//==========================================================================================================================
function erase(){
    localStorage.removeItem("CartItems");
    alert('ALL ITEMS REMOVE FROM CART !!')
    window.location.reload();
}
//====================================================================================================
function redirectToPayment() {
    window.location.href = "payment.html";
}
function redirectToProductPage() {
    window.location.href = "products.html";
}
