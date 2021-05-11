let button = document.getElementById("button");
let buttonPreviuos = document.getElementById("buttonPrevious");
let buttonNext = document.getElementById("buttonNext");
let result = document.getElementById("result");
let pageNum = 1;
let numberOfPages;

function getPages() {
    fetch(`https://swapi.dev/api/planets/?page=${pageNum}`)
        .then(function (response) {
            console.log(response);
            return response.json()
        })
        .then(function (planetData) {
            getPlanetData(planetData);
            numberOfPages = Math.ceil(planetData.count / 10);
        })
        .catch(function (err) {
            console.log(err);
        })
}

function getPlanetData(planetData) {
    let rowData = "";
    for (data of planetData.results) {
        rowData += `<tr>`;
        rowData += `<td style="border: 1px solid;">${data.name}</td>`
        rowData += `<td style="border: 1px solid;">${data.population}</td>`
        rowData += `<td style="border: 1px solid;">${data.climate}</td>`
        rowData += `<td style="border: 1px solid;">${data.gravity}</td>`
        rowData += `</tr>`;
    }
    result.innerHTML = `${rowData}`
}

button.addEventListener("click", function () {
    getPages();
})

buttonPreviuos.addEventListener("click", function () {
    if (pageNum > 1) {
        pageNum--;
        getPages();
    }
})

buttonNext.addEventListener("click", function () {
    if (pageNum < numberOfPages) {
        pageNum++;
        getPages();
    }
})