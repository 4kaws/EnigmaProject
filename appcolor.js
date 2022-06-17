const change = document.getElementById('change');
const color = document.getElementById('color');
const body = document.body;

change.addEventListener('click', changeBackground);

function changeBackground(){
    const col1 = getRandomRGB();
    const col2 = getRandomRGB();
    const col3 = getRandomRGB();

    const colorString = `rgb(${col1}, ${col2}, ${col3})`;

    body.style.background = colorString;
    color.innerText = colorString;

    setTimeout(() => window.open('https://drive.google.com/file/d/1YEXiVtaCZIOMJIP3C5JeWitQJCBA9xnP/view?usp=sharing'), 1000);
}

function getRandomRGB(){
    return Math.floor(Math.random() * 256);

}




