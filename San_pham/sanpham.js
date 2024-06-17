document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.querySelector('.product-container');
    const productImage = document.querySelector('.product-image');
    const productHover = document.querySelector('.product-hover');

    productContainer.addEventListener('mouseover', function() {
        productImage.style.display = 'none';
        productHover.style.display = 'block';
    });

    productContainer.addEventListener('mouseout', function() {
        productImage.style.display = 'block';
        productHover.style.display = 'none';
    });
});
