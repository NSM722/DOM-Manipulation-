// DOM manipulation - dynamic shopping list
const mainList = document.querySelector('ul');
const userInput = document.querySelector('input');
const btn = document.querySelector('button');

const btnClick = () => {
  //storing the current value of the input element in a variable
  let currentItem = userInput.value;
  //emptying the input element by setting its value to an empty string
  userInput.value = " ";

  const subList = document.createElement('li');
  const inlineEl = document.createElement('span');
  const newBtn = document.createElement('button');
  newBtn.style.backgroundColor = 'grey';
  newBtn.style.color = 'white';
  newBtn.style.padding = '7px';
  newBtn.style.borderRadius = '3px';

  subList.appendChild(inlineEl);
  // setting the text content 
  inlineEl.textContent = currentItem;

  subList.appendChild(newBtn);
  // setting the text content 
  newBtn.textContent = 'Delete';

  // appending the subList item as a child of the <ul>
  mainList.appendChild(subList);

  // Attaching an event handler to the delete button, 
  // so that when clicked it will delete the entire list item it is inside.
  const delItemFunc = () => mainList.removeChild(subList);
  newBtn.addEventListener('click', delItemFunc);
}

btn.addEventListener('click', btnClick);




