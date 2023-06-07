async function populateGames() {
    const dataList = await fetch("http://localhost:8081/");
    const dataListJson = await dataList.json();
    console.log("Clicked on Load");
    console.log(dataList);
    document.getElementById('game-list').innerHTML = dataList;
}

const loadBtn = document.getElementById("load");

const submitForm = async () => {
    try {
        const gameName = document.getElementById("game-name").value;
        const gameGenre = document.getElementById("game-genre").value;
        const gameYear = document.getElementById("game-year").value;
        
        const response = await fetch('localhost:8081/', {
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

// const submitForm = () => {document.getElementById('')}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', postGame);

loadBtn.addEventListener('click', populateGames);

async function postGame(event) {
    event.preventDefault();
    const gameName = document.getElementById("game-name").value;
    const gameGenre = document.getElementById("game-genre").value;
    const gameYear = document.getElementById("game-year").value;

    const gameDTO = {
        "name": "sample name",
        "genre": "sample genre",
        "year": 666
    }

    const initialRequestObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: gameDTO
    }

    await fetch("http://localhost:8081/", initialRequestObj);
}