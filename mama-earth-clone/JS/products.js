// function redirectToIndividualPage(){
//     window.location.href = "IndividualProductPage.html"
// } 
 
 //===================== Display Products from local Storage Start============================//

var data = JSON.parse(localStorage.getItem("mamaEarthProducts"));
// var data = JSON.parse(localStorage.getItem("mamaEarthProducts")) || [];
console.log(data);
var main = document.getElementById("main");

showProducts(data);
function showProducts(data){
    main.innerHTML = "";
        data.forEach(item => {
            main.innerHTML += 
            `
            <div class="card">
            <div  onclick = "individualprod('${item.title}')">
                <div class="tagsName tag">Best Seller</div>
                <img src="${item.imgUrl[0]}">
                <h1 >${item.title}</h1>
                <h4>${item.rating}<span class="iconify" data-icon="dashicons:star-filled"></span></h4>
                <h3><span class="iconify" data-icon="icons8:rupee"></span>${item.price}</h3>
                </div>
                <button onclick = "addToCart('${item.id}')">Add to Cart</button>
             </div>
            `
           
        });
        
              // var iPpage = main.title;
        // main.addEventListener("click",function (){
        //     redirectToIndiProduct(iPpage);
        //     console.log(data.title);
        //   });
    }
 //=================== Display Products from local Storage END=============================//    

 //======================= Add Products To Cart Start==================================//

//  var userdetails = JSON.parse.localStorage.getItem("userDetails");

function individualprod(title){
    console.log(title)
    redirectToIndiProduct(title);
}

 var cart = [];

//  console.log(userDetails);
let m  = JSON.parse(localStorage.getItem('CartItems')) || []

let counter = JSON.parse(localStorage.getItem('the_counter')) || []
var count = 0
 function addToCart(id){
    //  console.log(id);

     var userDetails = JSON.parse(localStorage.getItem("userDetail"));
//  console.log(userDetails);
    //  console.log(userDetails[0].email);

     var e = userDetails[0].email;
     
     var obj = {
         userEmail: e,
         productId: id,
     }

     m.push(obj)
 localStorage.setItem("CartItems",JSON.stringify(m))//{userEmail: "1@gmail.com", productId: "ME02105"}
 count++
 counter = counter + count 
 localStorage.setItem('the_counter',JSON.stringify(counter))
 alert("Successfully added to Cart !!")

 }

//============================ Add Products To Cart End=================================// 

 //================================= Sort function=========================================//
 
 function sortBy()
        {
            
            var temp = document.getElementById("sortByValue").value;
            if(temp == "low")
                {
                    var sorted = data;
                    sorted.sort(function (a,b)
                     {
                       return a.price - b.price;
                    });
                    showProducts(sorted);
                }
           else if(temp == "high")
                {
                    var sorted = data;
                    sorted.sort(function (a,b)
                     {
                        return b.price - a.price;
                    });
                   showProducts(sorted);
                }
            else if(temp == "rate")
            {
                var sorted = data;
                sorted.sort(function (a,b)
                {
                    return b.rating - a.rating;
                });
            showProducts(sorted);
            }
            else if(temp == "default")
                {
                    showProducts(data);
                    
                }
            
        }

        let lclStr = JSON.parse(localStorage.getItem('userDetail'))

        function redirectToIndiProduct(title){
            console.log(title);   
            
            if(lclStr == null){
                alert('Please Login to Continue')
                window.location.href = "signup.html"
              }else{
                localStorage.setItem("inProPage", JSON.stringify(title));  
             window.location.href = "IndividualProductPage.html"
            }
          }
      
//=============================== sort function===================================//

//==========Individual Product Page========================

// function redirectToIndiProduct(iPpage){
//     console.log(iPpage);   
//     localStorage.setItem("inProPage", JSON.stringify(iPpage));   

//   }
