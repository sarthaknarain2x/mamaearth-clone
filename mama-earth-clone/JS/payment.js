function makePayment(){
    var FN = document.getElementById("userAddress-FN").value.length
    var LN = document.getElementById("userAddress-LN").value.length
    var EI = document.getElementById("userAddress-EI").value.length
    var PN = document.getElementById("userAddress-PN").value.length
    var PC = document.getElementById("userAddress-PC").value.length
    var Ci = document.getElementById("userAddress-Ci").value.length
    var St = document.getElementById("userAddress-St").value.length
    var Ad = document.getElementById("userAddress-Ad").value.length
    var CN = document.getElementById("cardNo").value.length
    var Da = document.getElementById("date").value.length
    var CV = document.getElementById("cvv").value.length

    if(FN ==0 || LN ==0 ||EI ==0 ||PN >10 || PN < 10||PC ==0 ||Ci ==0 ||St ==0 ||Ad ==0 ||CN >16 || CN < 16||Da >4 || Da < 4||CV >3 || CV < 3 ){
         
        if(PN >10 || PN < 10){ 
                                    
            return alert("ENTER VALID NUMBER");
        }
        if(CN >16 || CN < 16){
            return alert("ENTER VALID CARD NUMBER");
        }
        
        if(Da >4 || Da < 4){
            return alert("ENTER VALID EXPIRY DATE");
        }
        if(CV >3 || CV < 3){
            return alert("ENTER VALID CVV");
        }

        return alert("ENTER VALID DETAILS!!!")

    } 
    else{
        window.location.href = "FinalPage.html";
        return alert("PAYMENT SUCCESSFUL, YOUR ORDER IS ON THE WAY  !!!")
       
    }
}