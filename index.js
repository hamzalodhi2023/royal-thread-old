// Targeting All The Elements Started
let shippingFee = 200;
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

// targeting order form elements


orderButton.addEventListener('click', function(){
    
    productNameInput.value = productDetailsProductName.textContent;
    productCodeInput.value = productDetailsProductCode.textContent;
    productSizeInput.value = productDetailsSize.value;
    productColorInput.value = productDetailsSelectedColor.value;
    productShippingInput.value = shippingFee;

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

})

// orderButton logic started

// Product Details Logic Ended
