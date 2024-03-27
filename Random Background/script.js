let span = document.querySelector("span");
let button = document.querySelector("button");
let body = document.querySelector("body");

const generateRandomBackground = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let randomColor = `rgb(${x}, ${y}, ${z})`;
    
    span.innerHTML = randomColor;
    span.style.color = randomColor;
    body.style.backgroundColor = randomColor;
}
