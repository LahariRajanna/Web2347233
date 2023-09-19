document.addEventListener("DOMContentLoaded", () => {
    const getJokesBtn = document.getElementById("getJokesBtn");
    const jokeContainer = document.getElementById("jokeContainer");

    getJokesBtn.addEventListener("click", () => {
        fetch("jokes.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((jokes) => {
                jokeContainer.innerHTML = ""; // Clear previous jokes
                jokes.forEach((jokeObj) => {
                    const jokeElement = document.createElement("div");
                    jokeElement.className = "joke";
                    jokeElement.innerHTML = `<strong>${jokeObj.category}:</strong> ${jokeObj.joke}`;
                    jokeContainer.appendChild(jokeElement);
                });
            })
            .catch((error) => {
                console.error("Error fetching jokes:", error);
                jokeContainer.innerHTML = "Failed to fetch jokes. Please try again later.";
            });
    });
});
