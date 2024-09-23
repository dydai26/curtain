







// Функція для відкриття модального вікна замовлення
function openOrderModal() {
    document.getElementById("orderModal").style.display = "flex";
    calculatePrice();  // Оновлюємо початкові значення
}

// Функція для закриття модального вікна
function closeOrderModal() {
    document.getElementById("orderModal").style.display = "none";
}


