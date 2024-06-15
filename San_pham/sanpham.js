// JavaScript để thêm chức năng vào nút wishlist
document.addEventListener('DOMContentLoaded', function () {
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');

    wishlistButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('added');
            if (this.classList.contains('added')) {
                this.textContent = '❤️';
            } else {
                this.textContent = '🤍';
            }
        });
    });
});
