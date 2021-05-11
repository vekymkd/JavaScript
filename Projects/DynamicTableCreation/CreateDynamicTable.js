// Algorithm
/*
Create variables for rows and columns to store values for rows and columns.
Create validation for the values of the rows and columns.
If the input is something else than a number and less than 1, print an error message.
Make function for creating the table, check if the inputs are valid, if valid, create the table.
Output the table.
*/

document.getElementById("rows").addEventListener("focus", rowsValidaion);
document.getElementById("columns").addEventListener("focus", columnsValidation);
document.getElementById("btn").addEventListener("click", dynamicTableCreation);

function rowsValidaion() {
    let numberOfRows = parseInt(document.getElementById("rows").value);

    if (isNaN(numberOfRows) && numberOfRows < 1) {
        alert(`Wrong input value, please enter correct number of rows!`);

    }
}

function columnsValidation() {
    let numberofColumns = parseInt(document.getElementById("columns").value);

    if (isNaN(numberofColumns) && numberofColumns < 1) {
        alert(`Wrong input value, please enter correct number of columns!`);

    }
}

function dynamicTableCreation() {
    let numberOfRows = parseInt(document.getElementById("rows").value);
    let numberofColumns = parseInt(document.getElementById("columns").value);

    if (isNaN(numberOfRows)) {
        alert(`Please enter correct number of rows`);
    }
    else if (isNaN(numberofColumns)) {
        alert(`Please enter correct number of rows`);
    }
    else {
        let output = '';
        for (let a = 0; a < numberOfRows; a++) {
            let tableData = '';
            for (let b = 0; b < numberofColumns; b++) {
                tableData += `<td>Rows ${a} Columns ${b}</td>`
            }
            output += `<tr>${tableData}</tr>`
        }
        document.getElementById("table").innerHTML = `<table>${output}</table>`;
    }
}