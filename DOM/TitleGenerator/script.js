let color = document.getElementById('color');
let fontSize = document.getElementById('fontSize');
let title = document.getElementById('title');
let button = document.getElementById('button');
let result = document.getElementById('result');

button.addEventListener('click', function (e) {
    result.style.color = color.value;
    result.style.fontSize = fontSize.value + "px";
    result.innerHTML = `${title.value}`;
    e.preventDefault();
    color.value = "";
    fontSize.value = "";
    title.value = "";
})