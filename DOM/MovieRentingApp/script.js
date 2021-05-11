let movies = ["Casino Royale", "Rocky", "Superman", "Fast and Furious"];
let movieName = document.getElementById("movieName");
let button = document.getElementById("button");
let result = document.getElementById("result");

function output() {
    let searchOutput = movieSearch();
    if(!searchOutput) {
        result.innerText = "Move not found! Please enter a different movie name!"
        result.style.color = 'red';
        result.style.fontSize = "25px"
    }
    else {
        result.innerText = "Movie found!";
        result.style.color = 'green';
        result.style.fontSize = "25px"
    }
    movieName.value = "";
}

function movieSearch() {
    for(let movie of movies) {
        if(movie.toLowerCase() === movieName.value.toLowerCase()) {
            return movie;
        }
    }
}

button.addEventListener('click', output);
