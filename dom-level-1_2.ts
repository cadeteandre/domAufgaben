const button = document.querySelector('button') as HTMLElement;
const example = document.getElementsByClassName('example') as HTMLCollection;

let isOriginalColor = true;
button.addEventListener('click', () => {
    for(let i: number = 0; i < example.length; i++) {
        const element = example[i] as HTMLElement;
        if(isOriginalColor) {
            element.style.backgroundColor = '#000';
            element.style.color = '#fff';
        } else {
            element.style.backgroundColor = '';
            element.style.color = '';
        }
    };
    isOriginalColor = !isOriginalColor;
});