document.getElementById("dice").addEventListener("click", function() {
    rollDice();
});

function rollDice() {
    // Get the dice image element
    var diceImageElement = document.getElementById("dice").querySelector('img');

    // Generate a random number between 1 and 6
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    // Set the new image source based on the random number
    var newImageSource = "./kuvat/noppa" + randomNumber + ".png";

    // Update the image source
    diceImageElement.src = newImageSource;
}