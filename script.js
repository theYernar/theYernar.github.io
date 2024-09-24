// Открытие модального окна для выбора товара
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

// Закрытие модального окна выбора товара
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Открытие модального окна для добавления товара
function openAddProductModal() {
    document.getElementById('add-product-modal').style.display = 'flex';
}

// Закрытие модального окна добавления товара
function closeAddProductModal() {
    document.getElementById('add-product-modal').style.display = 'none';
}

// Закрытие модальных окон при клике вне их содержимого
window.onclick = function(event) {
    if (event.target === document.getElementById('modal')) {
        closeModal();
    } else if (event.target === document.getElementById('add-product-modal')) {
        closeAddProductModal();
    }
}
