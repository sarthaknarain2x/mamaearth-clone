let local = JSON.parse(localStorage.getItem('mamaEarthProducts'))

let userDet = JSON.parse(localStorage.getItem('userDetail'))
var finemail = (userDet[0].email)
let finaldata = []

let local2 = JSON.parse(localStorage.getItem('inProPage')) 
for(var i = 0 ; i<local.length ; i++){
     if(local[i].title == local2){        
      finaldata.push(local[i])
     }
}

// console.log(local)
let cartbtn = document.getElementById('addtocart').addEventListener('click',addingtocart)

let left_up = document.getElementById('left_up')
let left_up_img = document.getElementById('left_up_img')
let left_down = document.getElementById('left_down')

let middle = document.getElementById('middle')
let middle1_1 = document.getElementById('middle1_1')
let middle1_2 = document.getElementById('middle1_2')
let middle1_3 = document.getElementById('middle1_3')
let middle2 = document.getElementById('middle2')
let middle3 = document.getElementById('middle3')
let right = document.getElementById('right')

let rightrMiddleUp = document.getElementById('rightrMiddleUp')
let rightrMiddleDown = document.getElementById('rightrMiddleDown')
let leftrMiddle = document.getElementById('leftrMiddle')
let ratingwala = document.getElementById('ratingwala')

let l1 = document.getElementById('l1')
let l2 = document.getElementById('l2')
let l3 = document.getElementById('l3')
let l4 = document.getElementById('l4')
let l5 = document.getElementById('l5')

let dTop = document.getElementById('dTop')
let dBottom = document.getElementById('dBottom')

let desc1 = document.getElementById('desc1')
let desc2 = document.getElementById('desc2')
let desc3 = document.getElementById('desc3')
let desc4 = document.getElementById('desc4')
let desc5 = document.getElementById('desc5')

let one = document.getElementById('one')
let two = document.getElementById('two')
let two_1 = document.getElementById('two_1')
let two_2 = document.getElementById('two_2')

finaldata.forEach((element)=>{
    let d1 = document.createElement('div')
  
    let img1 = document.createElement('img')
    img1.src = element.imgUrl[0]

    d1.append(img1)
    left_up_img.append(d1)

    let d2 = document.createElement('div')

    let img2 = document.createElement('img')
    img2.src = element.imgUrl[1]

    let img3 = document.createElement('img')
    img3.src = element.imgUrl[2]

    let img4 = document.createElement('img')
    img4.src = element.imgUrl[3]

    let img5 = document.createElement('img')
    img5.src = element.imgUrl[4]

    let img6 = document.createElement('img')
    img6.src = element.imgUrl[5]

    let img7 = document.createElement('img')
    img7.src = element.imgUrl[6]

    d2.append(img2,img3,img4,img5,img6,img7)
    left_down.append(d2)
    //=====================================================

    let ti = document.createElement('p')
    ti.textContent = element.title

    middle1_1.append(ti)

    let rating = document.createElement('p')
    rating.innerHTML = element.rating

    middle1_2.append(rating)

    let rev = document.createElement('p')
    rev.innerHTML = (Math.floor(Math.random() * 200) + 90) + " Reviews"

    middle1_3.append(rev)
    //============================================================================

    let rating2 = document.createElement('p')
    rating2.innerHTML = element.rating

    two_1.append(rating2)

    let rev2 = document.createElement('p')
    rev2.innerHTML = (Math.floor(Math.random() * 200) + 90) + " Reviews"

    two_2.append(rev2)

    //=============================================================================

    let price = document.createElement('p')
    price.textContent = "Price"

    let value = document.createElement('p')
    value.textContent = "₹"+" "+element.price

    let taxes = document.createElement('p')
    taxes.textContent = "Inclusive of all Taxes"

    let left = document.createElement('p')
    left.textContent = "Hurry ! Only"+" "+(Math.floor(Math.random() * 20) + 2) +" "+"Units Left in Stock!"

    middle2.append(price,value,taxes,left)

    //==================================================================================
    let price2 = document.createElement('p')
    price2.textContent = "Price"

    let value2 = document.createElement('p')
    value2.textContent = "₹"+" "+element.price

    let taxes2 = document.createElement('p')
    taxes2.textContent = "Inclusive of all Taxes"

    let left2 = document.createElement('p')
    left2.textContent = "Hurry ! Only"+" "+(Math.floor(Math.random() * 20) + 2) +" "+"Units Left in Stock!"
     one.append(price2,value2,taxes2,left2)

    //================================================================================================

    let rati = document.createElement('p')
    rati.innerHTML = element.rating

    ratingwala.append(rati)

    let revie = document.createElement('p')
    revie.textContent = (Math.floor(Math.random() * 70) + 40) + " " +"Ratings &"+" " +(Math.floor(Math.random() * 70) + 40) +" "+'Reviews' ;

    rightrMiddleDown.append(revie)
    //=======================================

    let meter1 = document.createElement('meter')
    meter1.min = 10;
    meter1.max = 55;
    meter1.value = Math.floor(Math.random() * (55 - 35 + 1)) + 35;

    l1.append(meter1)

    let meter2 = document.createElement('meter')
    meter2.min = 5;
    meter2.max = 55;
    meter2.value = Math.floor(Math.random() * (40 - 30 + 1)) + 30;

    l2.append(meter2)

    let meter3 = document.createElement('meter')
    meter3.min = 10;
    meter3.max = 55;
    meter3.value = Math.floor(Math.random() * (25 - 15 + 1)) + 15;

    l3.append(meter3)

    let meter4 = document.createElement('meter')
    meter4.min = 10;
    meter4.max = 55;
    meter4.value = Math.floor(Math.random() * (15 - 5 + 1)) + 5;

    l4.append(meter4)

    let meter5 = document.createElement('meter')
    meter5.min = 10;
    meter5.max = 55;
    meter5.value = Math.floor(Math.random() * (5 - 0 + 1)) + 0;

    l5.append(meter5)
    //=========================================================================
    let de = element.description

    desc1.textContent = `${de}`
    desc2.textContent = `${de}`
    desc3.textContent = `${de}`
    desc4.textContent = `${de}`
    desc5.textContent = `${de}`

})
function readFurther() {
  var stop = document.getElementById("stop");
  var readMore = document.getElementById("readMore");
  var readButton = document.getElementById("readButton");

  if (stop.style.display === "none") {
    stop.style.display = "inline";
    readButton.innerHTML = "Read more";
    readMore.style.display = "none";
  } else {
    stop.style.display = "none";
    readButton.innerHTML = "Read less";
    readMore.style.display = "inline";
  }
}

let count = 0;
function increase(){
    if(count == 6){
        count = 0;
    }
    count++
    left_up_img.innerHTML = null
    let d1 = document.createElement('div')
    let img1 = document.createElement('img')
    img1.src = local[0].imgUrl[count]
    
    d1.append(img1)
    left_up_img.append(d1)
}
function decrease(){
    if(count == 0){
        count = 6;
    }
    count--
    left_up_img.innerHTML = null
    let d1 = document.createElement('div')
    let img1 = document.createElement('img')
    img1.src = local[0].imgUrl[count]
    
    d1.append(img1)
    left_up_img.append(d1)
}
let m  = JSON.parse(localStorage.getItem('CartItems')) || []

let countd1 = JSON.parse(localStorage.getItem('the_counter')) || []
var countd2 = 0

function addingtocart(){

    console.log(finaldata[0].id)
   
    var obj = {
      userEmail:finemail ,
      
      productId:finaldata[0].id
    }
    m.push(obj)
 localStorage.setItem("CartItems",JSON.stringify(m))//{userEmail: "1@gmail.com", productId: "ME02105"}
 countd2++
 countd1 = countd1 + countd2 
 localStorage.setItem('the_counter',JSON.stringify(countd1))
 alert("Successfully added to Cart !!")
}
