function random(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function getCard() {
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    
    return { value: random(values), suit: random(suits) };
}

exports.getCard = getCard