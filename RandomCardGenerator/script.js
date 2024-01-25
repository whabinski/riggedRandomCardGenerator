// script.js

let deck = shuffleDeck();

function startButton(){
    document.getElementById('startScreen').style.display = 'none'; // Hide the main screen
    document.getElementById('cardScreen').style.display = 'flex'; // Show the game screen
    setRiggedCard()
}

function resetButton(){
    document.getElementById('startScreen').style.display = 'flex'; // Show the main screen
    document.getElementById('cardScreen').style.display = 'none'; // Hide the game screen
    deck = shuffleDeck();
    reset();
}

function reset(){
    var cardContainer = document.getElementById('cardContainer');
    var childElement = cardContainer.querySelector('img'); // Use querySelector to directly select the <img> element
    cardContainer.removeChild(childElement);
    
    var img = document.createElement('img');
    var card = "back_of_card"
    img.src = "cards/" + card + ".png"; // Replace with the appropriate SVG file path
    img.classList.add("card");
    cardContainer.appendChild(img);
  }

  // Draw the next card in the deck
  // Function chooses the top card to reveal. Then deletes the card
  function drawCardButton(){
    var cardContainer = document.getElementById('cardContainer');
    var childElement = cardContainer.querySelector('img'); // Use querySelector to directly select the <img> element
  
    if (childElement) {
      cardContainer.removeChild(childElement);
    }
  
    // Create the img element
    var img = document.createElement('img');
    if (deck.length == 0){                  // If deck has gone through all cards
        var card = "back_of_card"
        img.src = "cards/" + card + ".png"; // Replace with the appropriate SVG file path
        img.classList.add("card");
    }
    else {
        var card = deck.shift();
        img.src = "cards/" + card + ".svg"; // Replace with the appropriate SVG file path
        img.classList.add("card");
    }

    // Append the img element to the cardContainer
    cardContainer.appendChild(img);
  }

  // Initiate the deck to be all possible cards
  function createDeck() {
    return  [
            "ac","2c","3c","4c","5c","6c","7c","8c","9c","10c","jc","qc","kc",
            "as","2s","3s","4s","5s","6s","7s","8s","9s","10s","js","qs","ks",
            "ad","2d","3d","4d","5d","6d","7d","8d","9d","10d","jd","qd","kd",
            "ah","2h","3h","4h","5h","6h","7h","8h","9h","10h","jh","qh","kh"
            ]
  }

  // Shuffle the deck
  function shuffleDeck() {
    const shuffledDeck = createDeck().slice();

    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    
    return shuffledDeck;
  }

  function setRiggedCard(){
    var riggedCard = document.getElementById('riggedInputBox').value.toLowerCase(); // read from input box
    var index = deck.indexOf(riggedCard); // find index of rigged card in deck array

    if (index >= 0){
        // index was found (card was real)
        const removedElement = deck.splice(index, 1); // remove element at index from list
        deck.unshift(removedElement[0]); // add element to front of list
    }
    document.getElementById('riggedInputBox').value = ""; // set input box back to empty
  }

