let tbody = document.getElementById("tbody");
let button = document.getElementById("button");

function printUsers(users) {
    let rows = "";

    for(let user of users) {
        rows += `<tr>`
        rows += `<td style="border: 1px solid;">${user.id}</td>`;
        rows += `<td style="border: 1px solid;">${user.name}</td>`;
        rows += `<td style="border: 1px solid;">${user.username}</td>`;
        rows += `<td style="border: 1px solid;">${user.email}</td>`;
        rows += `<td style="border: 1px solid;">${user.address.city}</td>`;
        rows += `<td style="border: 1px solid;">${user.phone}</td>`;
        rows += `<td style="border: 1px solid;">${user.website}</td>`;
        rows += `<td style="border: 1px solid;">${user.company.name}</td>`;
        rows += `</tr>`
    }
    tbody.innerHTML = `${rows}`;
}

button.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            return response.json();
        })
        .then(function (users) { 
            console.log(users);
            printUsers(users);
        })
        .catch(function (err) {
            console.log(err);
        })
})

