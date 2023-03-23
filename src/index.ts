const listElement: HTMLElement | null = document.querySelector('#list');
const inputElement: HTMLInputElement | null = document.querySelector('#item');
const button: HTMLButtonElement | null = document.querySelector('#add-btn');

function addItem():void {
  //storing the current value of the input element in a variable
  let currentItem = inputElement?.value;
  //emptying the input element by setting its value to an empty string
  if(inputElement) {
    inputElement.value = " ";
  }

  const subListElement: HTMLLIElement = document.createElement('li');
  const spanElement: HTMLSpanElement = document.createElement('span');
  const deleteBtn: HTMLButtonElement = document.createElement('button');
  deleteBtn.classList.add('delete-btn', 'btn');
  deleteBtn.setAttribute('title', 'delete item from shopping list');
  deleteBtn.setAttribute('type', 'button')

  subListElement.appendChild(spanElement);

  // setting the text content if current item is present
  if(currentItem) {
    spanElement.textContent = currentItem;
  }

  subListElement.appendChild(deleteBtn);

  // setting the text content 
  deleteBtn.textContent = 'Delete';

  // appending the subList item as a child of the <ul>
  listElement?.appendChild(subListElement);

  // Attaching an event handler to the delete button, 
  // so that when clicked it will delete the entire list item it is inside
  function deleteItem():void {
    listElement?.removeChild(subListElement);
  }
  deleteBtn.addEventListener('click', deleteItem);
}

button?.addEventListener('click', addItem)