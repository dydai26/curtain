
// Відкриття модального вікна з передачею необхідних параметрів
function openModal(imageSrc, description, pricePerMeter, productCode) {
    // Встановлюємо дані в модальне вікно
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-price').textContent = pricePerMeter;
    document.getElementById('modal-product-code').textContent = productCode;
    
    // Зберігаємо дані для калькуляції
    document.getElementById('modal').dataset.price = pricePerMeter;
    document.getElementById('modal').dataset.productCode = productCode;

    // Скидаємо значення поля для довжини та загальної вартості
    document.getElementById('length').value = '';
    document.getElementById('total-price').textContent = 'Загальна вартість: -- грн';

    // Показуємо модальне вікно
    document.getElementById('modal').style.display = 'flex';
}
// Закриття модального вікна
function closeModal(event) {
    if (event.target.id === 'modal') {
        document.getElementById('modal').style.display = 'none';
    }
}
// Розрахунок загальної вартості
function calculatePrice() {
    const length = parseFloat(document.getElementById('length').value);
    const pricePerMeter = parseInt(document.getElementById('modal').dataset.price);
    const tapePrice = 10;  // Ціна стрічки за метр
    const workPrice = 30;  // Вартість роботи за метр

    // Розрахунок загальної вартості
    if (!isNaN(length) && length > 0) {
        const totalPrice = (length * pricePerMeter) + (length * tapePrice) + (length * workPrice);
        document.getElementById('total-price').textContent = `Загальна вартість: ${totalPrice} грн`;
    } else {
        document.getElementById('total-price').textContent = 'Загальна вартість: -- грн';
    }
}
