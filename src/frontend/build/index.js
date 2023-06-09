
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

//function to populate games from database
function getGames() {
    const data = {};
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
function deleteGame() {
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

const submitForm = async () => {
    try {
        const gameName = document.getElementById("game-name").value;
        const gameGenre = document.getElementById("game-genre").value;
        const gameYear = document.getElementById("game-year").value;
        
        const response = await fetch('localhost:8081', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            'game': gameName,
            'genre': gameGenre,
            'year': gameYear,
            },)
        }).then((response) => response.json).then((json) => console.log(json));
    } catch(err) {
    console.error(err);
    }
};

async function postGame(event) {
    event.preventDefault();
    const gameName = `"` + document.getElementById("game-name").value + `"`;
    const gameGenre = `"` + document.getElementById("game-genre").value + `"`;
    const gameYear = `"` + document.getElementById("game-year").value + `"`;

    const gameDTO = `{
        "name": ${gameName},
        "genre": ${gameGenre},
        "year": ${gameYear},
    }`

    const initialRequestObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: gameDTO,
    }

    await fetch("http://localhost:8081/", initialRequestObj);
}
// define load button
const loadBtn = document.getElementById("load");
loadBtn.addEventListener('click', getGames);
//define submit button
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', submitForm);
const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener('click', deleteGame);
