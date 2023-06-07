async function populateGames() {
    const dataList = await fetch("http://localhost:8081/", { mode: 'no-cors'});
    console.log("It's working");
    document.getElementById('game-list').innerHTML = dataList;
}

const loadBtn = document.getElementById("load");

// const submitBtn = document.getElementById("submit");
// submitBtn.addEventListener('click', async () => {
//     try {
//         let gameName = document.getElementById("game-name").value;
//         let gameGenre = document.getElementById("game-genre").value;
//         let gameYear = document.getElementById("game-year").value;
        
//         const response = await fetch('localhost:8081/', {
//             method: 'post',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//             'game': ${gameName},
//             'genre': ${gameGenre},
//             'year': ${gameYear},
//             },)
//         });
//     } catch(err) {
//     console.error('Error: ${err}');
//     }
// });

loadBtn.addEventListener('click', populateGames);