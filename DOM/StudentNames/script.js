let studentsArray = ["Velimir", "Goran", "Aleksndar", "Slave", "Vlatko", "Andrej", "Stefanija"];
let button = document.getElementById("button");

button.addEventListener("click", function(e){
    let unorderedList = document.createElement("ul");
    for(let studentArray of studentsArray){
        let listItem = document.createElement("li");
        listItem.innerText = studentArray;
        unorderedList.appendChild(listItem);
    }
    e.target.parentNode.appendChild(unorderedList);
})