const farbeAuswahlen = document.querySelector('#farbeAuswahlen') as HTMLSelectElement;
const button = document.querySelector('#button') as HTMLElement;

button.addEventListener('click', () => {
    farbeAuswahlen[farbeAuswahlen.selectedIndex].remove();
})
