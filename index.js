// Targeting All The Elements Started
let shippingFee = 200;
const orderNumber = Math.floor(Math.random() * 1000000);
const form = document.querySelector("#form");
const ProductCollectionCards = document.querySelectorAll(".card-div");
const ProductDetailsDiv = document.querySelector("#product-description");
const nav = document.querySelector("nav");
const productSection = document.querySelector("#products");
const productDetailsMainImg = document.querySelector('.main-image img');
const productDetailsSmallImages = document.querySelectorAll(".image img");
const productDetailsProductName = document.querySelector(".right-div h2");
const productDetailsProductCode = document.querySelector(".skuNumber");
const productDetailsProductPrice = document.querySelector(".price");
const productDetailsProductDiscount = document.querySelector(".discount");
const productDetailsCurrentPrice = document.querySelector(".current-price");
const productDetailsColors = document.querySelectorAll("#color option");
const backButton = document.querySelector(".back-button");
const orderButton = document.querySelector(".order-button");
const orderSection = document.querySelector("#order");
const cancelButton = document.querySelector(".cancel-button");
const productDetailsSize = document.querySelector("#size");
const productDetailsSelectedColor = document.querySelector(".selected-color");
// Targeting All The Elements Ended




// Product Details Logic Started
ProductCollectionCards.forEach(currentCard => {
    currentCard.addEventListener('click', () => {
        const currentCardMainImg = currentCard.querySelector(".image-div img");
        const currentCardProductName = currentCard.querySelector(".product-name");
        const currentCardProductCode = currentCard.querySelector(".product-code"); 
        const currentCardProductPrice = currentCard.querySelector(".product-price");
        const currentCardProductDiscount = currentCard.querySelector(".product-discount");  
        const currentCardColors = currentCard.querySelectorAll(".product-color option");

        productDetailsProductName.textContent = currentCardProductName.textContent;
        productDetailsProductCode.textContent = currentCardProductCode.textContent;
        productDetailsProductPrice.textContent = currentCardProductPrice.textContent;
        productDetailsProductDiscount.textContent  = currentCardProductDiscount.textContent;

        productDetailsCurrentPrice.textContent =  parseInt(productDetailsProductPrice.textContent)- parseInt(productDetailsProductPrice.textContent/100) * parseInt(productDetailsProductDiscount.textContent);

        ProductDetailsDiv.classList.toggle("fade-in2");

        let color = 0
        while(color < 4){
            productDetailsColors[color].textContent = currentCardColors[color].textContent;
            productDetailsColors[color].value = currentCardColors[color].value;
            color++;
        }

        if (currentCardMainImg) {
            ProductDetailsDiv.style.display = "flex";
            nav.style.display = 'none';
            productSection.style.display = "none";
            productDetailsMainImg.src = currentCardMainImg.src;

            const currentCardSmallImages = currentCard.querySelectorAll(".product-photos img");

            let i = 0;
            while (i < 5 && currentCardSmallImages[i]) {
                productDetailsSmallImages[i].src = currentCardSmallImages[i].src;
                i++;
            }            
        }
    });
});

// backButton and cancelButton logic started

backButton.addEventListener("click", function(){
    open("women-products.html", "_parent");
})

cancelButton.addEventListener("click", function(){
    open("women-products.html", "_parent");

})

// backButton and cancelButton logic ended

// product details small images logic started

productDetailsSmallImages.forEach(function(curImg){
        curImg.onclick = function() {
            productDetailsMainImg.src = curImg.src;
        }
})

// product details small images logic ended

// orderButton logic started

// targeting order form elements

const productNameInput = document.getElementById("product-name");
const productCodeInput = document.getElementById("product-code");
const productSizeInput = document.getElementById("product-size");
const productColorInput = document.getElementById("product-color");
const productShippingInput = document.getElementById("product-shipping");
const productCurrentPriceInput = document.getElementById("current-price");
const productQuantityInput = document.getElementById("product-quantity");
const productSubTotalInput = document.getElementById("product-sub-total");
const productGrandTotalInput = document.getElementById("product-grand-total");
const customerName = document.getElementById("customer-name");
const customerEmail = document.getElementById("customer-email");
const customerWhatsapp = document.getElementById("customer-whatsapp");
const customerAddress = document.getElementById("customer-address");
const confirmOrderBtn = document.getElementsByClassName("confirm-order-btn")[0];
const orderNumberInput = document.getElementById("order-number");

// targeting order form elements


orderButton.addEventListener('click', function(){
    
    // form data logic started

    productNameInput.value = productDetailsProductName.textContent;
    productCodeInput.value = productDetailsProductCode.textContent;
    productSizeInput.value = productDetailsSize.value;
    productColorInput.value = productDetailsSelectedColor.value;
    productShippingInput.value = shippingFee;
    orderNumberInput.value = "WC-" + orderNumber;

    productCurrentPriceInput.value = parseInt(productDetailsCurrentPrice.textContent);
     
    let TotalPrice = parseFloat(productCurrentPriceInput.value)* parseFloat(productQuantityInput.value);
    productSubTotalInput.value = TotalPrice;
    
    let grandTotal = TotalPrice + shippingFee;
    productGrandTotalInput.value = grandTotal;

    productQuantityInput.addEventListener('click', function(){
    
    let TotalPrice = parseFloat(productCurrentPriceInput.value)* parseFloat(productQuantityInput.value)
    productSubTotalInput.value = TotalPrice;

    let grandTotal = TotalPrice + shippingFee;
    productGrandTotalInput.value = grandTotal;
})
    
    orderSection.style.display = "block";
    ProductDetailsDiv.style.display = 'none';
    orderSection.classList.toggle("fade-in");
    // form data logic ended
    
})


form.addEventListener('submit', function(e){
    
    e.preventDefault();

    // posting form data to whatsapp logic started
   
    let url = "https://wa.me/923350020257?text=" +
   "*ROYAL THREAD*" + '%0a'+ "%0a" + 
   "*CUSTOMER DETAILS*" + "%0a" + "%0a" + 
   "*Name:* " + customerName.value + "%0a" +
   "*Email:* " + customerEmail.value + "%0a" +
   "*WhatsApp:* " + customerWhatsapp.value + "%0a" +
   "*Shipping Address:* " + customerAddress.value + "%0a" + "%0a" +
   "*ORDER DETAILS*" + "%0a" + "%0a" +
   "*Order Number:* "+ orderNumberInput.value + "%0a" +
   "*Product:* " + productNameInput.value + "%0a" + 
   "*Product Code:* " + productCodeInput.value +  "%0a" + 
   "*Size:* " + productSizeInput.value +  "%0a" +
   "*Color:* " + productColorInput.value +  "%0a" +
   "*Shipping Fee:* PKR. " + productShippingInput.value + "%0a" +
   "*Current Price:* PKR. " + productCurrentPriceInput.value +  "%0a" +
   "*Quantity:* " + productQuantityInput.value +  "%0a" +
   "*Sub Total:* PKR. " + productSubTotalInput.value +  "%0a" +
   "*Grand Total:* PKR. " + productGrandTotalInput.value+ "%0a" + "%0a" +
   "*Thank You For Choosing Royal Thread, Where Elegance Meets Style.*";
   
   window.open(url);
   
   // posting form data to whatsapp logic ended 

    // posting form data to email logic started
    
    let emailBody = "<b>CUSTOMER DETAILS</b>" + "<br>" + "<br>" + 
    "<b>Name: </b>" + customerName.value + "<br>" +
    "<b>Email: </b>" + customerEmail.value + "<br>" +
    "<b>WhatsApp: </b>" + customerWhatsapp.value + "<br>" +
    "<b>Shipping Address: </b>" + customerAddress.value + "<br>" + "<br>" +
    "<b>ORDER DETAILS</b>" + "<br>" + "<br>" +
    "<b>Order Number: </b>"+ orderNumberInput.value  + "<br>" +
    "<b>Product: </b>" + productNameInput.value + "<br>" + 
    "<b>Product Code: </b>" + productCodeInput.value +  "<br>" +
    "<b>Size: </b>" + productSizeInput.value +  "<br>" +
    "<b>Color: </b>" + productColorInput.value +  "<br>" +
    "<b>Shipping Fee: </b>PKR. " + productShippingInput.value + "<br>" +
    "<b>Current Price: </b>PKR. " + productCurrentPriceInput.value +  "<br>" +
    "<b>Quantity: </b>" + productQuantityInput.value +  "<br>" +
    "<b>Sub Total: </b>PKR. " + productSubTotalInput.value +  "<br>" +
    "<b>Grand Total: </b>PKR. " + productGrandTotalInput.value + "<br>" + "<br>" +
    "<b>Thank you for choosing Royal Thread, where elegance meets style.</b>";

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hafsalodhi2023@gmail.com",
        Password : "BCCA4002AE7D73B6C5D7F346A6C87B6CA404",
        To : customerEmail.value,
        From : "hafsalodhi2023@gmail.com",
        Subject : 'ORDER RECEIPT',
        Body : emailBody,
    })
    // posting form data to email logic ended
})
// orderButton logic started

// Product Details Logic Ended
