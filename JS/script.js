const totalPreviousPrice = document.getElementById("total-previous-price");
const discount = document.getElementById("discount");
const totalCurrentPrice = document.getElementById("total-current-price");

let total = 0;
function handleClick(data) {

    const element = data.childNodes[7].childNodes[1].innerText;
    const li = document.createElement("li");
    li.innerText = element;
    li.style.fontSize = "1.25rem";
    li.style.fontWeight = "500";
    li.style.marginTop = "0.25rem";
    li.style.margin = "1rem";
    const div = document.getElementById("price-send");
    div.appendChild(li);

    const price = parseFloat(data.childNodes[7].childNodes[3].innerText.split(" ")[0]);
    
    total += price;
    totalPreviousPrice.innerText = total.toFixed(2) + 'TK';

    if (total > 0){
        const purchaseBtn = document.getElementById("purchase-btn");
        purchaseBtn.disabled = false;
        purchaseBtn.style.backgroundColor = "#E527B2";
        purchaseBtn.style.color = "#fff";
    } 
    
    if (total >= 200){
        const btnApply = document.getElementById("btn-apply");
        btnApply.disabled = false;
        btnApply.style.backgroundColor = "#E527B2";
        btnApply.style.color = "#fff"; 

        btnApply.addEventListener("click", function(){
            console.log(total);
            console.log("clicked");
            const couponCode = document.getElementById("coupon-code");
            if (couponCode.value === "SELL20"){
                const discountPrice = total * 0.2;
                discount.innerText = discountPrice.toFixed(2) + 'TK';
                totalCurrentPrice.innerText = (total - discountPrice).toFixed(2) + 'TK';
            }
            else{
                alert("Invalid Coupon Code");
            }
        })  
     
        
    }

}
