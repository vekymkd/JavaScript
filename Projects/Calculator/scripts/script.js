let buttons = document.getElementsByTagName("button");
let printOutput = document.getElementById("output");

function calculateInputNumbers(input){

    if(input != "C" && input != "="){
        printOutput.innerHTML += input;
    }
    else if(input == "C"){
        printOutput.innerHTML = "";
    }
    else if(input == "="){
        let calculation = printOutput.innerHTML;
        printOutput.innerHTML = eval(calculation);
    }
}

function getInputNumbers(){
    let number = event.target.innerText;
    calculateInputNumbers(number);
}

for(const button of buttons){
    button.setAttribute("onclick", "getInputNumbers()");
}

