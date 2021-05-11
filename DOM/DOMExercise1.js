let firstDiv = document.getElementById("first");
console.log(firstDiv);

let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);

let lastDiv = firstDiv.nextElementSibling.nextElementSibling;
console.log(lastDiv);

let header3 = lastDiv.lastElementChild;
console.log(header3);

let header1 = lastDiv.firstElementChild;
console.log(header1);

let getText = document.getElementsByClassName("paragraph second")[0].innerText;;
console.log(getText);

header1.innerText = "Changed text.";
header3.innerText = "Also changed text.";

