let color = document.getElementById('color');
let fontSize = document.getElementById('fontSize');
let input = document.getElementById('items');
let button = document.getElementById('button');
let result = document.getElementById('result');

button.addEventListener('click', function(e){
    let unorderedList = document.createElement('ul');
    let inputItems = input.value.split(",");
    for(let inputItem of inputItems) {
        let listItem = document.createElement('li');
        listItem.innerText = inputItem;
        listItem.style.color = color.value;
        listItem.style.fontSize = fontSize+"px";
        unorderedList.appendChild(listItem);
    }
    result.appendChild(unorderedList);
    color.value = "";
    fontSize.value = "";
    input.value = "";
    e.preventDefault();
})