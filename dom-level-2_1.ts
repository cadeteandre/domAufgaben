const navHome = document.querySelector('#navHome') as HTMLAnchorElement;
const navChange = document.querySelector('#navChange') as HTMLElement;

navChange.addEventListener('click', () => {
    const textHome = navHome.textContent

    if(textHome) {
        const homeArr = textHome?.split('').reverse();
        const reversedHome = homeArr?.join('');
        navHome.textContent = reversedHome;
        navHome.style.backgroundColor = 'pink';
    };
});
