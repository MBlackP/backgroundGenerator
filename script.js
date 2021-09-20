var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randomButton = document.querySelector('.randomButton');

function changeGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

    css.textContent = body.style.background + ';';
}

function randomColors() {
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    color1.value = '#' + randomColor1;
    color2.value = '#' + randomColor2;

    changeGradient();
}

randomButton.addEventListener('click', randomColors);
color1.addEventListener('input', changeGradient);
color2.addEventListener('input', changeGradient);
