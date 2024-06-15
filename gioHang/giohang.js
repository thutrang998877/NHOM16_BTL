document.addEventListener('DOMContentLoaded', function() {
    const decreaseButton = document.querySelector('.decrease');
    const increaseButton = document.querySelector('.increase');
    const quantityInput = document.querySelector('.item-quantity input');
    const itemPrice = 299000; // Price in VND
    const totalPriceElement = document.querySelector('.total-price p:nth-child(2)');

    decreaseButton.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
            updateTotalPrice();
        }
    });

    increaseButton.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
        updateTotalPrice();
    });

    function updateTotalPrice() {
        let currentValue = parseInt(quantityInput.value);
        let totalPrice = currentValue * itemPrice;
        totalPriceElement.textContent = `${totalPrice.toLocaleString()}₫`;
    }
});
