// Targeting All The Elements Started

const WomenCollectionCards = document.querySelectorAll(".card-div");
const ProductDetailsDiv = document.querySelector("#product-description");
const nav = document.querySelector("nav");
const productSection = document.querySelector("#products");
const productDetailsMainImg = document.querySelector('.main-image img');
const productDetailsSmallImages = document.querySelectorAll(".image img");

// Targeting All The Elements Ended

// Product Details Logic Started
WomenCollectionCards.forEach(currentCard => {
    
    currentCard.addEventListener('click', () => {
        
        const currentCardMainImg = currentCard.querySelector(".image-div img");

        ProductDetailsDiv.style.display = "flex";
        nav.style.display = 'none';
        productSection.style.display = "none";
        productDetailsMainImg.src = currentCardMainImg.src;

            const currentCardSmallImages = currentCard.querySelectorAll(".product-photos img");

        let i = 0;
        while(i < 5){
            productDetailsSmallImages[i].src = currentCardSmallImages[i].src;
            i++;
        }


})
});
// Product Details Logic Ended



