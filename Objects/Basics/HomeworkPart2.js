let title = document.getElementById("title");
let author = document.getElementById("author");
let readStatus = document.getElementById("readStatus");

function Books(title, author, readStatus, bookIsRead) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    this.bookIsRead = function(){
        if(this.readStatus === "read"){
            return document.getElementById("output").innerHTML = `The book '${this.title} by ${this.author} has been read  `;
        }
        else{
            return document.getElementById("output").innerHTML = `The book '${this.title} by ${this.author} has not been read `;
        }
    }
}

function bookRead(title, author, readStatus, bookIsRead) {
    let book = new Books(title, author, readStatus, bookIsRead);
    book.bookIsRead();
}


function validation(title, author, readStatus){
    if(title === "") {
        alert("No title input, please enter a book title!");
    }
    else if(!isNaN(title)) {
        alert("Numbers are not a correct input. Please use letters only.")
    }
    else if(author === "") {
        alert("No author input, please enter a book title!");
    }
    else if(!isNaN(author)) {
        alert("Numbers are not a correct input. Please use letters only.")
    }
    else if(readStatus === "notSelected") {
        alert("Select a value from the dropdown");
    }
    else {
        bookRead(title, author, readStatus);
    }
}

document.getElementById("btn").addEventListener('click', function(){
    validation(title.value, author.value, readStatus.value)
})