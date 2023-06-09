// posts a fetched game to the page (called in getGames())
const gameToPage = (game) => {
    let id = game.id;
    let name = game.name;
    let genre = game.genre;
    let year = game.year;
    let codeBlock = `
    <div class="game-card">*<br>ID: ${id}<br>Name: ${name}<br>
    Genre: ${genre}<br>
    Year of release: ${year}<br>*<br>`
    document.getElementById('game-list').innerHTML += codeBlock;
}

//function to populate games from database (calls above func for fetched list)
function getGames() {
    document.getElementById('game-list').innerHTML="";
    fetch('http://localhost:8081/', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',}
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success: ", data);
            for (let game of data) {
                gameToPage(game);
            };
            
        }).catch((error) => {
            console.error('Error: ', error);
        });
    
}

//function to delete game from database
function deleteGame(event) {
    event.preventDefault();
    id = document.getElementById("deleteBtn").value;
    fetch('http://localhost:8081/' + id, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',}
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success: ", data);
            }
        ).catch((error) => {
            console.error('Error: ', error);
        });
    
}

async function postGame(event) {
    event.preventDefault();
    const gameName = `"` + document.getElementById("game-name").value + `"`;
    const gameGenre = `"` + document.getElementById("game-genre").value + `"`;
    const gameYear = `"` + document.getElementById("game-year").value + `"`;

    //create sent object
    const gameDTO = `{
        "name": ${gameName},
        "genre": ${gameGenre},
        "year": ${gameYear}
    }`

    //create HTTP request
    const initialRequestObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: gameDTO,
    }
    //send it
    await fetch("http://localhost:8081/", initialRequestObj);
}

// define buttons + behavior
const loadBtn = document.getElementById("load");
loadBtn.addEventListener('click', getGames);

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', postGame);

const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener('click', deleteGame);