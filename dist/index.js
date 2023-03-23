"use strict";
const listElement = document.querySelector('#list');
const inputElement = document.querySelector('#item');
const button = document.querySelector('#add-btn');
function addItem() {
    let currentItem = inputElement === null || inputElement === void 0 ? void 0 : inputElement.value;
    if (inputElement) {
        inputElement.value = " ";
    }
    const subListElement = document.createElement('li');
    const spanElement = document.createElement('span');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn', 'btn');
    deleteBtn.setAttribute('title', 'delete item from shopping list');
    deleteBtn.setAttribute('type', 'button');
    subListElement.appendChild(spanElement);
    if (currentItem) {
        spanElement.textContent = currentItem;
    }
    subListElement.appendChild(deleteBtn);
    deleteBtn.textContent = 'Delete';
    listElement === null || listElement === void 0 ? void 0 : listElement.appendChild(subListElement);
    function deleteItem() {
        listElement === null || listElement === void 0 ? void 0 : listElement.removeChild(subListElement);
    }
    deleteBtn.addEventListener('click', deleteItem);
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', addItem);
