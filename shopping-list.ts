const inputText = document.querySelector('#inputText') as HTMLInputElement;
const button = document.querySelector('button') as HTMLElement;
const myList = document.querySelector('#myList') as HTMLElement;

button.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.textContent = inputText.value.trim();
    inputText.value === '' ? alert('Bitte geben Sie einen Artikel ein') : myList.appendChild(listItem);
    inputText.value = '';
});