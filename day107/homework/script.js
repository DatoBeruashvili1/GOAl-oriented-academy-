
const items = [
    new Item("Laptop", 999.99, "A high-performance laptop for all your needs."),
    new Item("Smartphone", 499.99, "A latest model smartphone with amazing features."),
    new Item("Headphones", 199.99, "Noise-cancelling over-ear headphones."),
    new Item("Smartwatch", 299.99, "A smartwatch with fitness tracking capabilities."),
];


function displayItems() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = ''; 

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.display();
        itemList.appendChild(listItem);
    });
}


function displayTotalPrice() {
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}


document.addEventListener('DOMContentLoaded', () => {
    displayItems();
    displayTotalPrice();
});