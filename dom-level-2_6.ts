import { Picture } from "./dom-level-2_6-data";
import { data } from "./dom-level-2_6-data";

console.log(data);

const button = document.querySelector('button') as HTMLElement;
const showResults = document.querySelector('.showResults') as HTMLElement;

button.addEventListener('click', () => {
    const changeImg = showResults.querySelector('img');
    if(changeImg) {
        showResults.removeChild(changeImg);
    };

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomUrl = data[randomIndex].download_url
    const img = document.createElement('img');
    showResults.appendChild(img);
    img.setAttribute('src', randomUrl);
});

// createButton.addEventListener("click", () => {
//     const existingImg = content.querySelector("img");
//     if (existingImg) {
//       content.removeChild(existingImg);
//     }
  
//     const randomIndex = Math.floor(Math.random() * data.length);
//     const randomImgURL = data[randomIndex].download_url;
//     const createImg = document.createElement("img");
//     content.appendChild(createImg);
//     createImg.setAttribute("src", randomImgURL);
//   });