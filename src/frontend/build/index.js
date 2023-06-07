async function populateGames() {
    const dataList = await fetch("http://localhost:8081/", { mode: 'no-cors'});
    console.log("It's working");
    return dataList;
}

const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('/', {
                method: 'post',
                body: {
                // POST CONTENT HERE
                }
            });
        } catch(err) {
        console.error('Error: ${err}');
        }
    })

populateGames();